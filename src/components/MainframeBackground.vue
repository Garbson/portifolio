<template>
  <div class="mf-bg" aria-hidden="true">
    <canvas ref="canvasRef" class="mf-canvas"></canvas>
    <div class="mf-vignette"></div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const canvasRef = ref(null)

// Sessão de código sendo digitada ao fundo: primeiro um job no mainframe (TSO/JCL), depois um programa
// COBOL e, por fim, alguém montando um componente Vue.js. Rolar a página acelera a digitação,
// o cursor acende as linhas por perto e o clique pula para a próxima cena.
// os comentários e rótulos dos exemplos vêm do i18n; o código em si não muda
const makeScenes = () => [
  {
    title: 'TSO READY',
    file: 'SYS1.JCL(HELLO)',
    lang: 'jcl',
    lines: [
      'READY',
      "SUBMIT 'GARBSON.JCL(HELLO)'",
      'JOB00417 SUBMITTED',
      '//HELLO    JOB (ACCT),"GARBSON",CLASS=A,MSGCLASS=X',
      '//STEP01   EXEC PGM=IEFBR14',
      '//SYSPRINT DD SYSOUT=*',
      '$HASP100 HELLO    ON INTRDR',
      'IEF403I HELLO - STARTED - TIME=08.42.17',
      'IEF404I HELLO - ENDED - TIME=08.42.19',
      '$HASP395 HELLO    ENDED - RC=0000',
    ],
  },
  {
    title: 'ISPF EDIT',
    file: 'GARBSON.COBOL(BILLCALC)',
    lang: 'cobol',
    lines: [
      '       IDENTIFICATION DIVISION.',
      '       PROGRAM-ID. BILLCALC.',
      '       DATA DIVISION.',
      '       WORKING-STORAGE SECTION.',
      '       01 WS-VALOR    PIC 9(7)V99.',
      '       01 WS-ICMS     PIC 9(7)V99.',
      '       PROCEDURE DIVISION.',
      t('ui.bg.cobolComment'),
      '           MOVE 1500.00 TO WS-VALOR',
      '           COMPUTE WS-ICMS = WS-VALOR * 0.18',
      "           DISPLAY 'ICMS: ' WS-ICMS",
      '           STOP RUN.',
      'IGYSC0090-I  COMPILE ENDED - RC=0000',
    ],
  },
  {
    title: 'VS CODE',
    file: 'InvoiceCard.vue',
    lang: 'vue',
    lines: [
      '<scr' + 'ipt setup lang="ts">',
      "import { ref, computed } from 'vue'",
      '',
      'const price = ref(1500)',
      'const icms = computed(() => price.value * 0.18)',
      '</scr' + 'ipt>',
      '',
      '<template>',
      '  <section class="invoice-card">',
      `    <h2>${t('ui.bg.vueTitle')}</h2>`,
      '    <input v-model.number="price" type="number" />',
      '    <p>ICMS: {{ icms.toFixed(2) }}</p>',
      '  </section>',
      '</template>',
    ],
  },
]

const PALETTE = {
  base: '140,255,171',
  key: '241,232,138',
  str: '184,247,201',
  com: '110,160,130',
  tag: '94,234,212',
  num: '241,249,197',
}
const KEYWORDS = {
  jcl: /^(JOB|EXEC|DD|PGM|CLASS|MSGCLASS)$/,
  cobol: /^(IDENTIFICATION|DIVISION|PROGRAM-ID|DATA|WORKING-STORAGE|SECTION|PROCEDURE|MOVE|TO|COMPUTE|DISPLAY|STOP|RUN|PIC)$/,
  vue: /^(import|from|const|ref|computed|script|setup|template|lang)$/,
}

// quebra uma linha em trechos coloridos
const colorize = (line, lang) => {
  const re = /(\/\/.*$|^\s{6}\*.*$|'[^']*'|"[^"]*"|<\/?[a-zA-Z][\w-]*|\{\{|\}\}|v-[\w.]+|[A-Za-z][\w-]*|\d+(?:[.]\d+)?|\s+|.)/g
  const out = []
  let m
  while ((m = re.exec(line))) {
    const t = m[0]
    let c = PALETTE.base
    if (/^(\/\/|\s{6}\*)/.test(t) && t.trim().length > 1 && lang !== 'jcl') c = PALETTE.com
    else if (lang === 'jcl' && t.startsWith('//') && t.length > 2) c = PALETTE.key
    else if (/^['"]/.test(t)) c = PALETTE.str
    else if (/^<\/?/.test(t)) c = PALETTE.tag
    else if (/^v-/.test(t)) c = PALETTE.key
    else if (KEYWORDS[lang].test(t)) c = PALETTE.key
    else if (/^\d/.test(t)) c = PALETTE.num
    else if (/^(\$HASP|IEF|IGY)/.test(t)) c = PALETTE.key
    out.push({ t, c })
  }
  return out
}

let prepared = []
const rebuild = () => {
  prepared = makeScenes().map((sc) => ({ ...sc, parsed: sc.lines.map((l) => colorize(l, sc.lang)) }))
}
rebuild()
watch(locale, rebuild)

let raf = null
let ctx
let w = 0
let h = 0
let reduced = false
let boost = 0
let lastScroll = 0
let scene = 0
let line = 0
let col = 0
let wait = 0
let fade = 1
let phase = 'typing' // typing | hold | out
let charW = 8
const ptr = { y: -999, active: false }

// áreas da tela onde a "janela" de código aparece; muda conforme a rolagem
const REGIONS = [
  { x: 0.03, y: 0.16 },
  { x: 0.66, y: 0.5 },
  { x: 0.03, y: 0.62 },
  { x: 0.64, y: 0.14 },
  { x: 0.34, y: 0.7 },
]
let region = 0
const pos = { x: 0, y: 0 }
let posInit = false

const FONT = 15
const LH = 25

const nextScene = () => {
  scene = (scene + 1) % prepared.length
  line = 0
  col = 0
  phase = 'typing'
}

const resize = () => {
  const canvas = canvasRef.value
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  w = window.innerWidth
  h = window.innerHeight
  canvas.width = w * dpr
  canvas.height = h * dpr
  ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.font = `${FONT}px "Fira Code", "Courier New", monospace`
  charW = ctx.measureText('M').width
  if (reduced) frame()
}

const onMove = (e) => {
  ptr.y = e.clientY
  ptr.active = true
}
const onLeave = () => (ptr.active = false)
const onDown = () => {
  if (phase === 'typing') phase = 'out'
  else if (phase === 'hold') phase = 'out'
}
const onScroll = () => {
  const y = window.scrollY
  boost = Math.min(boost + Math.abs(y - lastScroll) * 0.03, 5)
  lastScroll = y
  // a cada ~um viewport de rolagem, o código troca de área e de cena
  const r = Math.floor(y / (h * 0.9)) % REGIONS.length
  if (r !== region) {
    region = r
    if (phase === 'typing' || phase === 'hold') phase = 'out'
  }
}

const step = () => {
  const sc = prepared[scene]
  if (phase === 'typing') {
    if (wait > 0) {
      wait--
      return
    }
    const target = sc.lines[line]
    if (col < target.length) {
      col += 1 + (Math.random() < 0.3 ? 1 : 0) + Math.floor(boost)
      if (col > target.length) col = target.length
    } else if (line < sc.lines.length - 1) {
      line++
      col = 0
      wait = 10 + Math.floor(Math.random() * 14)
    } else {
      phase = 'hold'
      wait = 200
    }
  } else if (phase === 'hold') {
    if (--wait <= 0) phase = 'out'
  } else if (phase === 'out') {
    fade -= 0.06
    if (fade <= 0) {
      fade = 0
      nextScene()
      phase = 'in'
    }
  } else if (phase === 'in') {
    fade += 0.06
    if (fade >= 1) {
      fade = 1
      phase = 'typing'
    }
  }
}

const frame = () => {
  if (!reduced) step()
  boost *= 0.95
  ctx.clearRect(0, 0, w, h)
  ctx.font = `${FONT}px "Fira Code", "Courier New", monospace`
  ctx.textBaseline = 'alphabetic'

  const sc = prepared[scene]
  const tgt = REGIONS[region]
  if (!posInit) {
    pos.x = tgt.x * w
    pos.y = tgt.y * h
    posInit = true
  }
  pos.x += (tgt.x * w - pos.x) * 0.06
  pos.y += (tgt.y * h - pos.y) * 0.06
  const padX = Math.min(Math.max(24, pos.x), Math.max(24, w - charW * 52))
  const top = Math.min(Math.max(110, pos.y), h - LH * (sc.lines.length + 1))
  const shown = reduced ? sc.lines.length : line + 1

  ctx.globalAlpha = fade
  // barra de título da "janela"
  ctx.fillStyle = 'rgba(241,232,138,0.55)'
  ctx.fillText(`[ ${sc.title} ]  ${sc.file}`, padX, top - 36)

  for (let i = 0; i < shown; i++) {
    const y = top + i * LH
    const upTo = reduced || i < line ? sc.lines[i].length : col
    // acende a linha perto do cursor
    const near = ptr.active ? Math.max(0, 1 - Math.abs(y - ptr.y) / 140) : 0
    const alpha = 0.5 + near * 0.45
    ctx.fillStyle = `rgba(140,255,171,0.35)`
    ctx.fillText(String(i + 1).padStart(2, ' '), padX - charW * 3.2, y)
    let x = padX
    let used = 0
    for (const seg of sc.parsed[i]) {
      if (used >= upTo) break
      const text = seg.t.slice(0, upTo - used)
      ctx.fillStyle = `rgba(${seg.c},${alpha})`
      ctx.fillText(text, x, y)
      x += charW * text.length
      used += seg.t.length
    }
    // cursor de digitação
    if (i === shown - 1 && !reduced && phase === 'typing' && Math.floor(performance.now() / 500) % 2 === 0) {
      ctx.fillStyle = 'rgba(241,249,197,0.9)'
      ctx.fillRect(x + 1, y - FONT + 2, charW * 0.7, FONT)
    }
  }
  ctx.globalAlpha = 1

  if (!reduced) raf = requestAnimationFrame(frame)
}

onMounted(() => {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) scene = 2 // estático: mostra o componente Vue completo
  resize()
  lastScroll = window.scrollY
  window.addEventListener('resize', resize)
  if (reduced) return frame()
  window.addEventListener('pointermove', onMove, { passive: true })
  window.addEventListener('pointerdown', onDown, { passive: true })
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('pointerleave', onLeave)
  frame()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
  window.removeEventListener('pointermove', onMove)
  window.removeEventListener('pointerdown', onDown)
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('pointerleave', onLeave)
})
</script>

<style scoped>
.mf-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.mf-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.mf-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 40%, rgba(2, 9, 6, 0.05) 0%, rgba(2, 9, 6, 0.7) 85%, #020906 100%);
}

</style>

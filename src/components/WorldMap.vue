<template>
  <div ref="wrap" class="world-map">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

// Mapa-múndi em pontos (estilo "dot matrix") com pings nos lugares de trabalho.
// Os continentes são polígonos simplificados [lon, lat], rasterizados numa grade de pontos.
const props = defineProps({
  // [{ lon, lat, label }]
  points: { type: Array, required: true },
  // índice do ponto em foco (ou -1)
  active: { type: Number, default: -1 },
  // ponto de origem dos arcos (índice em points)
  home: { type: Number, default: 0 },
})

const LON0 = -128
const LON1 = 52
const LAT0 = 64
const LAT1 = -46
const COLS = 118

const LAND = [
  // América do Norte + Central
  [[-168,66],[-162,70],[-141,70],[-125,70],[-110,73],[-95,72],[-82,69],[-80,63],[-94,60],[-93,57],[-82,55],[-79,52],[-78,62],[-72,62],[-65,60],[-61,56],[-56,52],[-60,47],[-66,45],[-70,43],[-74,40],[-76,35],[-81,31],[-80,26],[-82,27],[-85,30],[-90,30],[-94,29],[-97,26],[-98,22],[-96,19],[-91,19],[-90,21],[-87,21],[-88,16],[-84,15],[-83,10],[-79,9],[-77,8],[-80,7],[-84,9],[-86,12],[-90,13],[-94,16],[-97,16],[-105,20],[-110,24],[-112,29],[-115,31],[-117,33],[-121,35],[-124,40],[-124,47],[-128,51],[-134,57],[-140,60],[-150,60],[-155,58],[-164,55],[-158,58],[-165,62]],
  // Groenlândia
  [[-73,78],[-60,82],[-30,83],[-20,80],[-20,72],[-30,68],[-42,60],[-50,62],[-55,68],[-68,76]],
  // Cuba / Caribe
  [[-85,22],[-80,23],[-74,20],[-78,20]],
  [[-74,19],[-69,19],[-69,18],[-74,18]],
  // América do Sul
  [[-77,8],[-72,12],[-62,11],[-52,5],[-50,0],[-44,-2],[-35,-5],[-35,-9],[-39,-14],[-39,-19],[-42,-23],[-48,-26],[-49,-29],[-54,-34],[-58,-35],[-57,-38],[-62,-39],[-65,-42],[-65,-46],[-68,-50],[-69,-53],[-72,-54],[-74,-50],[-74,-42],[-72,-35],[-71,-28],[-70,-18],[-76,-14],[-81,-6],[-80,-2],[-78,2]],
  // Eurásia (com Escandinávia e Oriente Médio)
  [[-9,37],[-9,43],[-2,43.5],[-1,46],[-4,48],[2,51],[8,54],[9,57],[11,59],[5,59],[5,62],[14,68],[20,70],[28,71],[40,68],[44,68],[60,69],[70,73],[80,73],[100,77],[110,74],[130,72],[140,72],[160,70],[180,68],[180,60],[160,55],[143,59],[137,54],[140,48],[130,42],[126,38],[121,40],[122,37],[121,31],[118,24],[110,21],[106,18],[109,12],[105,9],[100,13],[100,8],[103,1],[98,8],[98,16],[92,22],[86,20],[80,15],[77,8],[73,16],[72,21],[67,24],[62,25],[57,26],[52,28],[49,30],[48,30],[50,26],[51,24],[56,24],[59,22],[55,17],[52,16],[43,13],[43,16],[39,21],[35,28],[34,31],[35,36],[30,36],[27,37],[26,40],[23,38],[21,37],[20,40],[19,42],[14,45],[13,45],[12,44],[16,42],[18,40],[16,38],[15.5,38],[12,41],[10,44],[8,44],[3,43],[0,39],[-2,37],[-6,36]],
  // Escandinávia (preenche o golfo de Bótnia visualmente)
  [[11,59],[12,56],[14,56],[18,60],[22,65],[25,66],[30,66],[30,60],[24,59],[21,57],[19,54],[14,54],[11,56]],
  // Ilhas Britânicas
  [[-5,50],[1,51],[2,53],[-2,56],[-2,58],[-5,58],[-6,56],[-3,54],[-5,52]],
  [[-10,52],[-6,52],[-6,55],[-8,55]],
  // Islândia
  [[-24,64],[-14,64],[-14,66],[-22,66]],
  // África
  [[-17,21],[-17,15],[-13,9],[-8,4],[0,5],[8,4],[9,-1],[12,-6],[13,-12],[12,-18],[15,-27],[18,-34],[20,-35],[26,-34],[31,-30],[33,-26],[35,-22],[35,-18],[40,-15],[40,-10],[39,-5],[42,0],[51,12],[43,12],[39,16],[37,21],[33,28],[32,31],[25,32],[20,31],[11,33],[10,37],[3,37],[-6,36],[-10,30],[-13,27]],
  // Madagascar
  [[44,-25],[47,-25],[50,-15],[49,-12],[44,-17]],
]

const wrap = ref(null)
const canvas = ref(null)
let ctx
let w = 0
let h = 0
let dots = []
let raf = null
let ro = null
let t0 = 0
let ease = [] // intensidade animada de cada ponto
let reduced = false

const rows = Math.round(COLS * ((LAT0 - LAT1) / (LON1 - LON0)))

const buildDots = () => {
  const m = document.createElement('canvas')
  m.width = COLS
  m.height = rows
  const mc = m.getContext('2d')
  mc.fillStyle = '#fff'
  const px = (lon) => ((lon - LON0) / (LON1 - LON0)) * COLS
  const py = (lat) => ((LAT0 - lat) / (LAT0 - LAT1)) * rows
  for (const poly of LAND) {
    mc.beginPath()
    poly.forEach(([lo, la], i) => (i ? mc.lineTo(px(lo), py(la)) : mc.moveTo(px(lo), py(la))))
    mc.closePath()
    mc.fill()
  }
  const data = mc.getImageData(0, 0, COLS, rows).data
  dots = []
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < COLS; x++) {
      if (data[(y * COLS + x) * 4 + 3] > 120) dots.push([x, y])
    }
  }
}

const project = (lon, lat) => [((lon - LON0) / (LON1 - LON0)) * w, ((LAT0 - lat) / (LAT0 - LAT1)) * h]

const resize = () => {
  const r = wrap.value.getBoundingClientRect()
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  w = r.width
  h = r.height
  canvas.value.width = w * dpr
  canvas.value.height = h * dpr
  canvas.value.style.width = w + 'px'
  canvas.value.style.height = h + 'px'
  ctx = canvas.value.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  if (reduced) draw(performance.now())
}

const draw = (now) => {
  const t = (now - t0) / 1000
  ctx.clearRect(0, 0, w, h)
  const cw = w / COLS
  const ch = h / rows
  const rad = Math.max(1, Math.min(cw, ch) * 0.2)
  const pts = props.points.map((p) => project(p.lon, p.lat))

  // pontos do continente; os próximos de um ping acendem
  for (const [x, y] of dots) {
    const cx = (x + 0.5) * cw
    const cy = (y + 0.5) * ch
    let near = 0
    for (let i = 0; i < pts.length; i++) {
      const d = Math.hypot(cx - pts[i][0], cy - pts[i][1])
      const r = i === props.active ? 90 : 40
      if (d < r) near = Math.max(near, (1 - d / r) * (i === props.active ? 1 : 0.5))
    }
    ctx.fillStyle = `rgba(${140 + near * 100},255,${171 - near * 30},${0.2 + near * 0.7})`
    ctx.beginPath()
    ctx.arc(cx, cy, rad * (1 + near * 0.9), 0, Math.PI * 2)
    ctx.fill()
  }

  // arcos a partir do ponto de origem
  const home = pts[props.home]
  if (home) {
    pts.forEach((p, i) => {
      if (i === props.home || (p[0] === home[0] && p[1] === home[1])) return
      const on = i === props.active
      const mx = (home[0] + p[0]) / 2
      const my = (home[1] + p[1]) / 2 - Math.hypot(p[0] - home[0], p[1] - home[1]) * 0.28
      ctx.strokeStyle = on ? 'rgba(241,232,138,0.85)' : 'rgba(140,255,171,0.22)'
      ctx.lineWidth = on ? 1.6 : 1
      ctx.setLineDash(on ? [] : [3, 5])
      ctx.lineDashOffset = -t * 12
      ctx.beginPath()
      ctx.moveTo(home[0], home[1])
      ctx.quadraticCurveTo(mx, my, p[0], p[1])
      ctx.stroke()
      if (on) {
        // pacote viajando pelo arco
        const k = (t * 0.5) % 1
        const qx = (1 - k) * (1 - k) * home[0] + 2 * (1 - k) * k * mx + k * k * p[0]
        const qy = (1 - k) * (1 - k) * home[1] + 2 * (1 - k) * k * my + k * k * p[1]
        ctx.fillStyle = '#f1f9c5'
        ctx.beginPath()
        ctx.arc(qx, qy, 3, 0, Math.PI * 2)
        ctx.fill()
      }
    })
    ctx.setLineDash([])
  }

  // pings
  ctx.font = '600 10px "Fira Code", monospace'
  props.points.forEach((p, i) => {
    const [x, y] = pts[i]
    const on = i === props.active
    ease[i] = (ease[i] || 0) + ((on ? 1 : 0) - (ease[i] || 0)) * 0.12
    const e = ease[i]
    const phase = (t * 0.7 + i * 0.37) % 1
    const color = on ? '241,232,138' : '140,255,171'
    ctx.strokeStyle = `rgba(${color},${(1 - phase) * (0.35 + e * 0.5)})`
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.arc(x, y, 3 + phase * (14 + e * 16), 0, Math.PI * 2)
    ctx.stroke()
    ctx.fillStyle = `rgb(${color})`
    ctx.beginPath()
    ctx.arc(x, y, 3 + e * 2.5, 0, Math.PI * 2)
    ctx.fill()
    if (e > 0.05) {
      const tw = ctx.measureText(p.label).width + 12
      const lx = Math.min(Math.max(x - tw / 2, 4), w - tw - 4)
      const ly = y - 26 < 16 ? y + 30 : y - 26
      ctx.globalAlpha = Math.min(e, 1)
      ctx.fillStyle = 'rgba(3,18,13,0.92)'
      ctx.fillRect(lx, ly - 11, tw, 17)
      ctx.strokeStyle = '#f1e88a'
      ctx.lineWidth = 1
      ctx.strokeRect(lx, ly - 11, tw, 17)
      ctx.fillStyle = '#f1f9c5'
      ctx.fillText(p.label, lx + 6, ly + 1)
      ctx.globalAlpha = 1
    }
  })

  if (!reduced) raf = requestAnimationFrame(draw)
}

onMounted(() => {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  buildDots()
  resize()
  t0 = performance.now()
  ro = new ResizeObserver(resize)
  ro.observe(wrap.value)
  if (reduced) draw(performance.now())
  else raf = requestAnimationFrame(draw)
})

watch(() => props.active, () => reduced && draw(performance.now()))

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  ro?.disconnect()
})
</script>

<style scoped>
.world-map {
  width: 100%;
  aspect-ratio: 180 / 110;
}
canvas {
  display: block;
}
</style>

<template>
  <canvas ref="canvasRef" class="tech-rain-canvas"></canvas>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvasRef = ref(null)
let animationId = null

const tokens = [
  'const', 'let', 'async', 'await', 'return', 'import', 'export', 'default',
  'function', 'class', 'extends', 'interface', 'type', 'enum',
  'computed', 'reactive', 'ref()', 'watch()', 'v-for', 'v-if', 'v-model',
  'useState', 'useEffect', 'useRef', 'useMemo', 'useCallback',
  '=>', '{}', '[]', '()', '...', '??', '?.', '||', '&&',
  'Vue', 'React', 'Node', 'TypeScript', 'Nuxt', 'Vite',
  '.then()', '.catch()', 'Promise', 'fetch()', 'axios',
  '<template>', '<script>', '<style>', 'props', 'emit',
  'npm run', 'git push', 'console.log', 'JSON.parse',
  'flex', 'grid', 'gap', 'rounded', 'shadow', 'blur',
  '404', '200', 'null', 'undefined', 'true', 'false',
]

class Token {
  constructor(canvas) {
    this.canvas = canvas
    this.reset(true)
  }

  reset(initial = false) {
    const canvas = this.canvas
    this.text = tokens[Math.floor(Math.random() * tokens.length)]
    this.x = Math.random() * canvas.width
    this.y = initial ? Math.random() * canvas.height : canvas.height + 20
    this.size = Math.random() * 9 + 9            // 9–18px
    this.speed = Math.random() * 0.4 + 0.15      // muito lento
    this.opacity = Math.random() * 0.09 + 0.03   // 3–12% — bem sutil
    this.color = Math.random() > 0.5 ? '#14b8a6' : '#3b82f6'  // teal ou azul
    this.drift = (Math.random() - 0.5) * 0.15    // leve deriva lateral
  }

  update() {
    this.y -= this.speed
    this.x += this.drift
    if (this.y < -30) this.reset()
  }

  draw(ctx) {
    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.fillStyle = this.color
    ctx.font = `${this.size}px 'Fira Code', 'Courier New', monospace`
    ctx.shadowColor = this.color
    ctx.shadowBlur = 6
    ctx.fillText(this.text, this.x, this.y)
    ctx.restore()
  }
}

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  resize()
  window.addEventListener('resize', resize)

  // cria tokens espalhados pelo viewport
  const count = Math.floor((canvas.width * canvas.height) / 22000)
  const tokenList = Array.from({ length: count }, () => new Token(canvas))

  const loop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    tokenList.forEach(t => { t.update(); t.draw(ctx) })
    animationId = requestAnimationFrame(loop)
  }

  loop()

  onBeforeUnmount(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resize)
  })
})
</script>

<style scoped>
.tech-rain-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}
</style>

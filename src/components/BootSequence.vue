<template>
  <div v-if="visible" class="boot" @click="finish" role="presentation">
    <pre class="boot-text"><span v-for="(line, i) in shown" :key="i" :class="line.cls">{{ line.text }}
</span><span class="boot-cursor">█</span></pre>
    <div class="boot-hint">{{ $t('ui.boot.skip') }}</div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const SEEN_KEY = 'mf-boot-seen'
const { t } = useI18n()

// códigos de mensagem IBM ficam como estão; o que é texto humano vem do i18n
const script = computed(() => [
  { text: 'IEA101I  SYSTEM IPL INITIATED  -  GARBSON.DEV  Z/OS 3.1', cls: 'hl' },
  { text: 'IEE252I  MEMBER IEASYS00 FOUND IN SYS1.PARMLIB' },
  { text: 'IEF403I  JES2 - STARTED  - TIME=08.42.17' },
  { text: 'DFS058I  CICS REGION PORTFOLIO ... ACTIVE' },
  { text: 'DSNX940I DB2 SUBSYSTEM DSN1 ... CONNECTED' },
  { text: t('ui.boot.auth'), cls: 'ok' },
  { text: t('ui.boot.loading') },
  { text: t('ui.boot.ready'), cls: 'hl' },
])

const visible = ref(false)
const count = ref(0)
let timer = null

const shown = computed(() => script.value.slice(0, count.value))

const finish = () => {
  clearInterval(timer)
  visible.value = false
  try {
    sessionStorage.setItem(SEEN_KEY, '1')
  } catch {}
  window.removeEventListener('keydown', finish)
}

onMounted(() => {
  try {
    if (sessionStorage.getItem(SEEN_KEY)) return
  } catch {}
  visible.value = true
  window.addEventListener('keydown', finish)
  timer = setInterval(() => {
    count.value++
    if (count.value >= script.value.length) {
      clearInterval(timer)
      setTimeout(finish, 600)
    }
  }, 280)
})

onBeforeUnmount(() => {
  clearInterval(timer)
  window.removeEventListener('keydown', finish)
})
</script>

<style scoped>
.boot {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background: #020906;
  color: #8cffab;
  font-family: 'Fira Code', 'Courier New', monospace;
  text-shadow: 0 0 10px rgba(74, 222, 128, 0.4);
  cursor: pointer;
}

.boot::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(140, 255, 171, 0.04) 4px);
  pointer-events: none;
}

.boot-text {
  max-width: 56rem;
  margin: 0 auto;
  width: 100%;
  font-size: clamp(0.6rem, 1.6vw, 0.85rem);
  line-height: 1.9;
  white-space: pre-wrap;
}

.hl {
  color: #f1f9c5;
}

.ok {
  color: #f1e88a;
}

.boot-cursor {
  animation: boot-blink 1s steps(2, jump-none) infinite;
}

.boot-hint {
  position: absolute;
  bottom: 1.5rem;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  color: rgba(184, 247, 201, 0.5);
}

@keyframes boot-blink {
  50% {
    opacity: 0;
  }
}
</style>

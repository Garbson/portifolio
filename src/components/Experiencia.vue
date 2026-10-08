<template>
  <section id="experience" class="journey w-[90%] md:w-[80%] mx-auto mt-16 mb-16">
    <div class="screen">
      <header class="bar"><span class="hide-sm">SYSPLEX</span><strong><span class="hide-sm">{{ $t('ui.experience.log') }} — </span>{{ $t('experience.title').toUpperCase() }}</strong><span class="hide-sm">{{ items.length }} {{ $t('ui.experience.nodes') }}</span></header>

      <div class="layout">
        <!-- Mapa fixo enquanto a linha do tempo rola -->
        <div class="map-col">
          <div class="map-sticky">
            <WorldMap :points="points" :active="active" :home="5" />
            <p class="readout">
              <span class="k">{{ $t('ui.experience.node') }}</span> {{ activePoint ? activePoint.label : '—' }}
              <span class="k">LAT</span> {{ activePoint ? activePoint.lat.toFixed(2) : '—' }}
              <span class="k">LON</span> {{ activePoint ? activePoint.lon.toFixed(2) : '—' }}
            </p>
          </div>
        </div>

        <!-- Linha do tempo -->
        <ol class="timeline">
          <li
            v-for="(job, index) in items"
            :key="index"
            :ref="(el) => (itemEls[index] = el)"
            :data-index="index"
            class="entry"
            :class="{ on: active === index }"
            @mouseenter="active = index"
            @focusin="active = index"
          >
            <span class="dot"></span>
            <div class="when">
              <span>{{ job.period }}</span>
              <span v-if="job.current" class="live"><i></i>{{ $t('experience.current') }}</span>
            </div>
            <h3>{{ job.role }} <em>· {{ job.company }}</em></h3>
            <p class="where">📍 {{ job.location }}</p>
            <p class="desc">{{ job.description }}</p>
            <ul v-if="job.achievements && job.achievements.length" class="ach">
              <li v-for="a in job.achievements.slice(0, 2)" :key="a"><span>▸</span>{{ a }}</li>
            </ul>
            <div v-if="job.tech" class="chips">
              <i v-for="t in String(job.tech).split(',')" :key="t">{{ t.trim() }}</i>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import WorldMap from './WorldMap.vue'

const { tm } = useI18n()

// mesma ordem de experience.items em todos os idiomas
const coords = [
  { lon: -43.17, lat: -22.91 },
  { lon: -48.64, lat: -26.99 },
  { lon: 23.73, lat: 37.98 },
  { lon: -80.19, lat: 25.76 },
  { lon: -71.97, lat: -13.52 },
  { lon: -67.81, lat: -9.97 },
]

// rótulos dos pings vêm do i18n (mesma ordem de coords)
const places = computed(() => coords.map((c, i) => ({ ...c, label: tm('ui.experience.places')[i] })))
const items = computed(() => Object.values(tm('experience.items')))
const points = places
const active = ref(0)
const activePoint = computed(() => places.value[active.value])
const itemEls = []
let observer = null

onMounted(async () => {
  await nextTick()
  // o item que cruza o centro da tela vira o ativo
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) active.value = Number(e.target.dataset.index)
      })
    },
    { rootMargin: '-45% 0px -45% 0px' },
  )
  itemEls.forEach((el) => el && observer.observe(el))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.journey { font-family: 'Fira Code', 'Courier New', monospace; color: #8cffab; }
.screen { overflow: clip; border: 1px solid rgba(74, 222, 128, 0.5); background: rgba(3, 18, 13, 0.9); box-shadow: 0 0 35px rgba(34, 197, 94, 0.13), inset 0 0 80px rgba(34, 197, 94, 0.05); }
.bar { display: flex; justify-content: space-between; gap: 1rem; padding: 0.55rem 1rem; background: rgba(74, 222, 128, 0.11); border-bottom: 1px solid rgba(74, 222, 128, 0.3); font-size: 0.68rem; letter-spacing: 0.07em; color: #f1f9c5; }
.bar strong { color: #8cffab; font-weight: 400; text-align: center; }
.layout > * { min-width: 0; }
.layout { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); gap: 1.5rem; padding: 1.5rem; }
.map-col { order: 2; }
.map-sticky { position: sticky; top: 100px; }
.readout { display: flex; flex-wrap: wrap; gap: 0.3rem 1rem; margin-top: 0.6rem; padding: 0.5rem 0.75rem; border: 1px solid rgba(74, 222, 128, 0.3); background: rgba(0, 18, 12, 0.7); font-size: 0.65rem; color: #f1f9c5; }
.readout .k { color: #f1e88a; }

.timeline { order: 1; position: relative; margin: 0; padding: 0 0 0 1.6rem; list-style: none; }
.timeline::before { content: ''; position: absolute; left: 5px; top: 8px; bottom: 8px; width: 1px; background: linear-gradient(180deg, #8cffab, rgba(74, 222, 128, 0.15)); }
.entry { position: relative; padding: 0 0 2.4rem; outline: none; opacity: 0.55; transition: opacity 0.3s; }
.entry:last-child { padding-bottom: 0.5rem; }
.entry.on { opacity: 1; }
.dot { position: absolute; left: -1.6rem; top: 0.2rem; width: 11px; height: 11px; border: 2px solid #8cffab; background: #03120d; transition: all 0.3s; }
.entry.on .dot { background: #f1e88a; border-color: #f1e88a; box-shadow: 0 0 14px rgba(241, 232, 138, 0.8); }
.when { display: flex; flex-wrap: wrap; gap: 0.5rem 0.9rem; align-items: center; font-size: 0.66rem; letter-spacing: 0.06em; color: #f1e88a; }
.live { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0 0.4rem; border: 1px solid rgba(140, 255, 171, 0.5); color: #8cffab; }
.live i { width: 6px; height: 6px; background: #8cffab; animation: pulse 1.4s ease-in-out infinite; }
h3 { overflow-wrap: anywhere; margin: 0.35rem 0 0.2rem; color: #f1f9c5; font-size: 1rem; font-weight: 700; }
h3 em { color: #8cffab; font-style: normal; font-weight: 400; }
.where { font-size: 0.66rem; color: rgba(184, 247, 201, 0.65); }
.desc { overflow-wrap: anywhere; margin-top: 0.6rem; max-width: 60ch; font-size: 0.72rem; line-height: 1.75; color: rgba(184, 247, 201, 0.82); }
.ach { margin: 0.6rem 0 0; padding: 0; list-style: none; }
.ach li { display: flex; gap: 0.5rem; margin-top: 0.3rem; font-size: 0.68rem; line-height: 1.6; color: rgba(184, 247, 201, 0.75); }
.ach span { color: #f1e88a; }
.chips { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.7rem; }
.chips i { padding: 0 0.45rem; border: 1px solid rgba(74, 222, 128, 0.3); font-size: 0.6rem; font-style: normal; color: rgba(184, 247, 201, 0.75); }
@keyframes pulse { 50% { opacity: 0.25; } }

@media (max-width: 860px) {
  .layout { grid-template-columns: 1fr; gap: 0.75rem; padding: 0.9rem; }
  /* mapa compacto, fixo no topo enquanto a lista rola */
  .map-col { order: 1; position: sticky; top: 74px; z-index: 5; margin: 0 -0.9rem; padding: 0.4rem 0; background: #03120d; border-bottom: 1px solid rgba(74, 222, 128, 0.25); }
  .map-sticky { position: static; width: 58%; margin: 0 auto; }
  .hide-sm { display: none; }
  .bar { justify-content: center; }
  .desc { font-size: 0.7rem; }
  .entry { padding-bottom: 1.8rem; }
  .readout { display: none; }
  .timeline { order: 2; }
}
</style>

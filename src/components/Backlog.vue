<template>
  <section id="skills" class="backlog w-[90%] md:w-[80%] mx-auto mt-16 mb-16">
    <div class="screen">
      <header class="bar">
        <span class="hide-sm">JIRA/SYS</span>
        <strong>{{ $t('ui.backlog.bar') }}</strong>
        <span class="hide-sm">{{ visible.length }} {{ $t('ui.backlog.count') }}</span>
      </header>

      <div class="body">
        <!-- Filtros no estilo teclas de função -->
        <div class="filters" role="tablist">
          <button
            v-for="f in filters"
            :key="f.key"
            class="chip"
            :class="{ on: filter === f.key }"
            role="tab"
            :aria-selected="filter === f.key"
            @click="filter = f.key"
          >
            <span class="k">{{ f.fkey }}</span>{{ f.label }}<em>{{ f.count }}</em>
          </button>
        </div>

        <div v-for="epic in epicsShown" :key="epic.key" class="epic">
          <div class="epic-head">
            <span class="bolt">⚡</span>
            <b>{{ $t(`ui.backlog.epics.${epic.key}`) }}</b>
            <span class="line"></span>
            <span class="n">{{ epic.items.length }}</span>
          </div>

          <ul class="rows">
            <li v-for="item in epic.items" :key="item.id" class="row">
              <span class="key">SKL-{{ String(item.n).padStart(3, '0') }}</span>
              <span class="tile">
                <img v-if="item.src" :src="item.src" :alt="item.name" />
                <span v-else class="svg" v-html="item.svg"></span>
              </span>
              <div class="main">
                <h3>{{ item.name }}</h3>
                <p>{{ $t(`ui.backlog.items.${item.id}`) }}</p>
              </div>
              <span class="type">{{ $t(`ui.backlog.types.${item.type}`) }}</span>
              <span class="status"><i></i>{{ $t('ui.backlog.status') }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const img = (file) => new URL(`../assets/img/${file}`, import.meta.url).href

// ícones sem arquivo próprio: desenhados em SVG simples
const tile = (bg, label) =>
  `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="6" fill="${bg}"/><text x="16" y="20" text-anchor="middle" font-family="Fira Code,monospace" font-size="${label.length > 3 ? 8 : 10}" font-weight="700" fill="#fff">${label}</text></svg>`
const SVG = {
  vuetify: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3 6h7l6 11 6-11h7L16 28z" fill="#1867C0"/><path d="M10 6h5l1 2 1-2h5l-6 11z" fill="#4DBAFF"/></svg>',
  java: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 14h15v6a5 5 0 0 1-5 5h-5a5 5 0 0 1-5-5z" fill="#f89820"/><path d="M22 15h2.5a2.5 2.5 0 0 1 0 5H22" fill="none" stroke="#5382a1" stroke-width="2"/><path d="M11 4c3 3-2 4 1 8M16 4c3 3-2 4 1 8" fill="none" stroke="#5382a1" stroke-width="1.8" stroke-linecap="round"/><path d="M6 28h17" stroke="#5382a1" stroke-width="2" stroke-linecap="round"/></svg>',
  mainframe: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="5" y="3" width="22" height="8" rx="1.5" fill="#0f2f22" stroke="#8cffab" stroke-width="1.6"/><rect x="5" y="12" width="22" height="8" rx="1.5" fill="#0f2f22" stroke="#8cffab" stroke-width="1.6"/><rect x="5" y="21" width="22" height="8" rx="1.5" fill="#0f2f22" stroke="#8cffab" stroke-width="1.6"/><circle cx="9" cy="7" r="1.2" fill="#f1e88a"/><circle cx="9" cy="16" r="1.2" fill="#8cffab"/><circle cx="9" cy="25" r="1.2" fill="#8cffab"/><path d="M14 7h9M14 16h9M14 25h9" stroke="#8cffab" stroke-width="1.4"/></svg>',
  cobol: tile('#0b5a8f', 'COBOL'),
  natural: tile('#d98a00', 'NAT'),
  jsp: tile('#e76f00', 'JSP'),
  jcl: tile('#2f7d57', 'JCL'),
  cics: tile('#5b4bb5', 'CICS'),
  pinia: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3l3 4 5-1-1 5 4 3-4 3 1 5-5-1-3 4-3-4-5 1 1-5-4-3 4-3-1-5 5 1z" fill="#ffd859"/><circle cx="13" cy="14" r="1.4" fill="#3b3b3b"/><circle cx="19" cy="14" r="1.4" fill="#3b3b3b"/><path d="M13 19c2 2 4 2 6 0" fill="none" stroke="#3b3b3b" stroke-width="1.6" stroke-linecap="round"/></svg>',
}

// n = ordem no backlog; epic agrupa; type escolhe o rótulo traduzido
const ITEMS = [
  { id: 'vue', name: 'Vue.js', epic: 'front', type: 'framework', src: img('vue-svgrepo-com.svg') },
  { id: 'nuxt', name: 'Nuxt.js', epic: 'front', type: 'framework', src: img('nuxt.png') },
  { id: 'typescript', name: 'TypeScript', epic: 'front', type: 'language', src: img('typescript.png') },
  { id: 'javascript', name: 'JavaScript', epic: 'front', type: 'language', src: img('javascript.svg.png') },
  { id: 'html', name: 'HTML5', epic: 'front', type: 'language', src: img('html.svg') },
  { id: 'css', name: 'CSS', epic: 'front', type: 'language', src: img('css-3-svgrepo-com.svg') },
  { id: 'tailwind', name: 'Tailwind CSS', epic: 'front', type: 'framework', src: img('tailwind.svg') },
  { id: 'quasar', name: 'Quasar', epic: 'front', type: 'framework', src: img('Quasar.svg') },
  { id: 'vuetify', name: 'Vuetify', epic: 'front', type: 'ui', svg: SVG.vuetify },
  { id: 'pinia', name: 'Pinia', epic: 'front', type: 'library', svg: SVG.pinia },
  { id: 'react', name: 'React', epic: 'front', type: 'framework', src: img('react.svg') },
  { id: 'node', name: 'Node.js', epic: 'back', type: 'runtime', src: img('node.svg') },
  { id: 'java', name: 'Java', epic: 'back', type: 'language', svg: SVG.java },
  { id: 'jsp', name: 'JSP', epic: 'back', type: 'framework', svg: SVG.jsp },
  { id: 'supabase', name: 'Supabase', epic: 'back', type: 'platform', src: img('supabase.svg') },
  { id: 'firebase', name: 'Firebase', epic: 'back', type: 'platform', src: img('firebase.svg') },
  { id: 'mysql', name: 'MySQL', epic: 'back', type: 'database', src: img('mysql.svg') },
  { id: 'git', name: 'Git/GitHub', epic: 'back', type: 'tool', src: img('github-color-svgrepo-com.svg') },
  { id: 'cobol', name: 'COBOL', epic: 'main', type: 'language', svg: SVG.cobol },
  { id: 'natural', name: 'Natural ONE', epic: 'main', type: 'language', svg: SVG.natural },
  { id: 'jcl', name: 'JCL', epic: 'main', type: 'language', svg: SVG.jcl },
  { id: 'cics', name: 'CICS', epic: 'main', type: 'platform', svg: SVG.cics },
  { id: 'mainframe', name: 'Mainframe', epic: 'main', type: 'platform', svg: SVG.mainframe },
].map((it, i) => ({ ...it, n: i + 1 }))

const EPICS = ['front', 'back', 'main']
const filter = ref('all')

const filters = computed(() => [
  { key: 'all', fkey: 'F1', label: t('ui.backlog.all'), count: ITEMS.length },
  ...EPICS.map((e, i) => ({ key: e, fkey: `F${i + 2}`, label: t(`ui.backlog.epics.${e}`), count: ITEMS.filter((x) => x.epic === e).length })),
])
const epicsShown = computed(() =>
  EPICS.filter((e) => filter.value === 'all' || filter.value === e).map((e) => ({ key: e, items: ITEMS.filter((x) => x.epic === e) }))
)
const visible = computed(() => epicsShown.value.flatMap((e) => e.items))
</script>

<style scoped>
.backlog { font-family: 'Fira Code', 'Courier New', monospace; color: #8cffab; }
.screen { overflow: clip; border: 1px solid rgba(74, 222, 128, 0.5); background: rgba(3, 18, 13, 0.9); box-shadow: 0 0 35px rgba(34, 197, 94, 0.13), inset 0 0 80px rgba(34, 197, 94, 0.05); }
.bar { display: flex; justify-content: space-between; gap: 1rem; padding: 0.55rem 1rem; background: rgba(74, 222, 128, 0.11); border-bottom: 1px solid rgba(74, 222, 128, 0.3); font-size: 0.68rem; letter-spacing: 0.07em; color: #f1f9c5; }
.bar strong { color: #8cffab; font-weight: 400; text-align: center; }
.body { padding: 1.1rem 1.2rem 1.3rem; }

.filters { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.2rem; }
.chip { display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.35rem 0.7rem; border: 1px solid rgba(74, 222, 128, 0.35); background: rgba(0, 18, 12, 0.6); color: #b8f7c9; font: inherit; font-size: 0.66rem; letter-spacing: 0.06em; cursor: pointer; transition: all 0.2s; }
.chip .k { padding: 0 0.25rem; background: rgba(241, 232, 138, 0.14); color: #f1e88a; font-size: 0.58rem; }
.chip em { font-style: normal; color: rgba(184, 247, 201, 0.55); }
.chip:hover { border-color: #f1e88a; }
.chip.on { border-color: #f1e88a; background: #f1e88a; color: #03120d; }
.chip.on .k { background: rgba(3, 18, 13, 0.18); color: #03120d; }
.chip.on em { color: rgba(3, 18, 13, 0.7); }

.epic { margin-bottom: 1.2rem; }
.epic:last-child { margin-bottom: 0; }
.epic-head { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem; font-size: 0.72rem; letter-spacing: 0.08em; color: #f1f9c5; }
.bolt { color: #f1e88a; }
.epic-head .line { flex: 1; height: 1px; background: rgba(74, 222, 128, 0.25); }
.epic-head .n { padding: 0 0.45rem; border: 1px solid rgba(74, 222, 128, 0.35); color: #8cffab; font-size: 0.62rem; }

.rows { margin: 0; padding: 0; list-style: none; border: 1px solid rgba(74, 222, 128, 0.25); }
.row { display: grid; grid-template-columns: 4.6rem 2.4rem minmax(0, 1fr) 7.5rem 5.5rem; align-items: center; gap: 0.9rem; padding: 0.55rem 0.9rem; border-top: 1px solid rgba(74, 222, 128, 0.15); transition: background 0.2s, box-shadow 0.2s; }
.row:first-child { border-top: 0; }
.row:hover { background: rgba(140, 255, 171, 0.08); box-shadow: inset 3px 0 0 #f1e88a; }
.key { color: rgba(184, 247, 201, 0.5); font-size: 0.62rem; letter-spacing: 0.05em; }
.tile { display: grid; place-items: center; width: 2.4rem; height: 2.4rem; border: 1px solid rgba(74, 222, 128, 0.3); background: rgba(255, 255, 255, 0.06); }
.tile:has(img) { background: rgba(236, 250, 240, 0.92); border-color: rgba(236, 250, 240, 0.5); }
.tile .svg { display: grid; }
.tile :deep(svg), .tile img { width: 1.6rem; height: 1.6rem; object-fit: contain; }
.main { min-width: 0; }
.main h3 { color: #f1f9c5; font-size: 0.85rem; font-weight: 700; }
.main p { margin-top: 0.15rem; font-size: 0.66rem; line-height: 1.5; color: rgba(184, 247, 201, 0.7); overflow-wrap: anywhere; }
.type { justify-self: start; padding: 0 0.45rem; border: 1px solid rgba(74, 222, 128, 0.3); color: rgba(184, 247, 201, 0.8); font-size: 0.58rem; letter-spacing: 0.05em; }
.status { display: inline-flex; align-items: center; gap: 0.4rem; justify-self: end; color: #8cffab; font-size: 0.6rem; letter-spacing: 0.06em; white-space: nowrap; }
.status i { width: 6px; height: 6px; background: #8cffab; box-shadow: 0 0 8px #8cffab; }

@media (max-width: 700px) {
  .hide-sm { display: none; }
  .bar { justify-content: center; }
  .body { padding: 0.8rem; }
  .filters { gap: 0.35rem; }
  .chip { padding: 0.3rem 0.5rem; font-size: 0.6rem; }
  .chip .k { display: none; }
  /* linha vira: [ícone] nome/descrição  [status] com o tipo embaixo */
  .row { grid-template-columns: 2.4rem minmax(0, 1fr) auto; gap: 0.2rem 0.7rem; padding: 0.6rem 0.7rem; }
  .key { display: none; }
  .tile { grid-row: 1 / span 2; }
  .main { grid-column: 2; grid-row: 1 / span 2; }
  .status { grid-column: 3; grid-row: 1; font-size: 0; gap: 0; }
  .status i { width: 8px; height: 8px; }
  .type { grid-column: 3; grid-row: 2; justify-self: end; }
}
</style>

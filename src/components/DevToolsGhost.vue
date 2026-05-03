<template>
  <div class="devtools-ghost pointer-events-none">

    <!-- Highlight box sobre o elemento inspecionado -->
    <Transition name="hl">
      <div v-if="highlight" class="inspect-highlight" :style="highlight.box">
        <span class="inspect-tag">{{ highlight.tag }}</span>
        <!-- réguas de margem estilo DevTools -->
        <div class="hl-ruler hl-ruler--top"></div>
        <div class="hl-ruler hl-ruler--left"></div>
      </div>
    </Transition>

    <!-- Painel DevTools full-width na base -->
    <div class="dt-panel">

      <!-- Barra de título (drag handle) -->
      <div class="dt-handle">
        <div class="dt-handle-dots">
          <span></span><span></span><span></span>
        </div>
        <span class="dt-handle-title">DevTools – garbsondev.portfolio</span>
        <div class="dt-handle-actions">
          <span>⋮</span>
          <span>✕</span>
        </div>
      </div>

      <!-- Abas -->
      <div class="dt-tabs">
        <div class="dt-tab dt-tab--active">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>
          Elements
        </div>
        <div class="dt-tab">Console</div>
        <div class="dt-tab">Sources</div>
        <div class="dt-tab">Network</div>
        <div class="dt-tab">Performance</div>
        <div class="dt-cursor-icon">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 3l14 9-7 1-4 7z"/></svg>
        </div>
        <div class="dt-breadcrumb">
          body &gt; div#app &gt; <span class="dt-bc-active">{{ current.tag }}.{{ current.cls.split(' ')[0] }}</span>
        </div>
      </div>

      <!-- Body: DOM + Divider + Styles + Computed -->
      <div class="dt-body">

        <!-- ── DOM Tree ── -->
        <div class="dt-dom">
          <div class="dt-search">
            <span class="dt-search-icon">🔍</span>
            <span class="dt-search-text">{{ current.selector }}</span>
            <span class="dt-cursor blink">|</span>
          </div>

          <div class="dt-line dt-dim">▾ <span class="dt-tag">&lt;html</span> <span class="dt-attr">lang</span>=<span class="dt-str">"pt-BR"</span><span class="dt-tag">&gt;</span></div>
          <div class="dt-line dt-dim">&nbsp;▾ <span class="dt-tag">&lt;body&gt;</span></div>
          <div class="dt-line dt-dim">&nbsp;&nbsp;▾ <span class="dt-tag">&lt;div</span> <span class="dt-attr">id</span>=<span class="dt-str">"app"</span><span class="dt-tag">&gt;</span></div>
          <div class="dt-line dt-dim">&nbsp;&nbsp;&nbsp;▾ <span class="dt-tag">&lt;div</span> <span class="dt-attr">class</span>=<span class="dt-str">"min-h-screen bg-[#020817]"</span><span class="dt-tag">&gt;</span></div>
          <div class="dt-line dt-dim">&nbsp;&nbsp;&nbsp;&nbsp;▸ <span class="dt-tag">&lt;div</span> <span class="dt-attr">class</span>=<span class="dt-str">"fixed inset-0 z-0"</span><span class="dt-tag">&gt;</span> <span class="dt-comment">&lt;!-- blobs --&gt;</span></div>
          <div class="dt-line dt-dim">&nbsp;&nbsp;&nbsp;&nbsp;▸ <span class="dt-tag">&lt;nav</span> <span class="dt-attr">class</span>=<span class="dt-str">"glass-nav fixed top-0 z-50"</span><span class="dt-tag">&gt;…&lt;/nav&gt;</span></div>
          <div class="dt-line dt-selected">
            &nbsp;&nbsp;&nbsp;&nbsp;▾ <span class="dt-tag">&lt;{{ current.tag }}</span>
            <span class="dt-attr"> class</span>=<span class="dt-str">"{{ current.cls }}"</span>
            <span class="dt-tag">&gt;</span>
            <span class="dt-comment"> == $0</span>
          </div>
          <div class="dt-line dt-dim">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="dt-tag">&lt;/{{ current.tag }}&gt;</span></div>
          <div class="dt-line dt-dim">&nbsp;&nbsp;&nbsp;&nbsp;▸ <span class="dt-tag">&lt;section</span> <span class="dt-attr">id</span>=<span class="dt-str">"experience"</span><span class="dt-tag">&gt;…&lt;/section&gt;</span></div>
          <div class="dt-line dt-dim">&nbsp;&nbsp;&nbsp;&nbsp;▸ <span class="dt-tag">&lt;section</span> <span class="dt-attr">id</span>=<span class="dt-str">"projects"</span><span class="dt-tag">&gt;…&lt;/section&gt;</span></div>
          <div class="dt-line dt-dim">&nbsp;&nbsp;&nbsp;&nbsp;▸ <span class="dt-tag">&lt;section</span> <span class="dt-attr">id</span>=<span class="dt-str">"testimonials"</span><span class="dt-tag">&gt;…&lt;/section&gt;</span></div>
          <div class="dt-line dt-dim">&nbsp;&nbsp;&nbsp;&nbsp;▸ <span class="dt-tag">&lt;section</span> <span class="dt-attr">id</span>=<span class="dt-str">"certificates"</span><span class="dt-tag">&gt;…&lt;/section&gt;</span></div>
          <div class="dt-line dt-dim">&nbsp;&nbsp;&nbsp;<span class="dt-tag">&lt;/div&gt;</span></div>
          <div class="dt-line dt-dim">&nbsp;&nbsp;<span class="dt-tag">&lt;/div&gt;</span></div>
          <div class="dt-line dt-dim">&nbsp;<span class="dt-tag">&lt;/body&gt;</span></div>
        </div>

        <!-- ── Divider redimensionável ── -->
        <div class="dt-divider"></div>

        <!-- ── Styles ── -->
        <div class="dt-styles">
          <div class="dt-styles-tabs">
            <span class="dt-styles-tab dt-styles-tab--active">Styles</span>
            <span class="dt-styles-tab">Computed</span>
            <span class="dt-styles-tab">Layout</span>
          </div>

          <!-- Regras do elemento ativo -->
          <div class="dt-rule">
            <div class="dt-rule-source">portfolio.css:{{ current.line || 42 }}</div>
            <div class="dt-styles-header">
              <span class="dt-selector">{{ current.selector }}</span> {
            </div>
            <TransitionGroup name="prop" tag="div">
              <div v-for="prop in current.styles" :key="prop.name" class="dt-prop">
                <span class="dt-checkbox">☑</span>
                <span class="dt-prop-name">{{ prop.name }}</span>:
                <span class="dt-prop-value"> {{ prop.value }}</span>;
              </div>
            </TransitionGroup>
            <div class="dt-styles-close">}</div>
          </div>

          <!-- Regra herdada (glass-card) -->
          <div class="dt-rule dt-dim">
            <div class="dt-rule-source">portfolio.css:128</div>
            <div class="dt-styles-header">
              <span class="dt-selector dt-dim">.glass-card, .glass-wrap</span> {
            </div>
            <div class="dt-prop">
              <span class="dt-checkbox dt-dim">☑</span>
              <span class="dt-prop-name">backdrop-filter</span>:
              <span class="dt-prop-value"> blur(20px) saturate(150%)</span>;
            </div>
            <div class="dt-prop">
              <span class="dt-checkbox dt-dim">☑</span>
              <span class="dt-prop-name">border</span>:
              <span class="dt-prop-value"> 1px solid rgba(255,255,255,.09)</span>;
            </div>
            <div class="dt-prop">
              <span class="dt-checkbox dt-dim">☑</span>
              <span class="dt-prop-name">box-shadow</span>:
              <span class="dt-prop-value"> 0 8px 32px rgba(0,0,0,.25)</span>;
            </div>
            <div class="dt-styles-close">}</div>
          </div>

          <!-- User agent styles -->
          <div class="dt-rule dt-dim" style="opacity:0.4">
            <div class="dt-rule-source">user agent stylesheet</div>
            <div class="dt-styles-header"><span class="dt-selector dt-dim">div</span> {</div>
            <div class="dt-prop"><span class="dt-prop-name">display</span>: <span class="dt-prop-value">block</span>;</div>
            <div class="dt-styles-close">}</div>
          </div>
        </div>

        <!-- ── Computed Panel ── -->
        <div class="dt-computed">
          <div class="dt-styles-tabs">
            <span class="dt-styles-tab dt-styles-tab--active">Box Model</span>
          </div>
          <div class="dt-boxmodel">
            <div class="bm-margin">
              <span class="bm-label">margin</span>
              <div class="bm-border">
                <span class="bm-label">border</span>
                <div class="bm-padding">
                  <span class="bm-label">padding</span>
                  <div class="bm-content">
                    <span class="bm-size">{{ current.size || '480 × 96' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dt-computed-props">
            <div class="dt-cprop"><span>color</span><span class="dt-prop-value">rgba(255,255,255,.85)</span></div>
            <div class="dt-cprop"><span>font-size</span><span class="dt-prop-value">14px</span></div>
            <div class="dt-cprop"><span>border-radius</span><span class="dt-prop-value">{{ current.borderRadius || '16px' }}</span></div>
            <div class="dt-cprop"><span>z-index</span><span class="dt-prop-value">{{ current.zIndex || 'auto' }}</span></div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'

const elements = [
  {
    selector: 'nav.glass-nav',
    tag: 'nav',
    cls: 'glass-nav fixed top-0 z-50',
    domSelector: 'nav',
    line: 12,
    size: '1280 × 64',
    borderRadius: '0px',
    zIndex: '50',
    styles: [
      { name: 'position', value: 'fixed' },
      { name: 'backdrop-filter', value: 'blur(28px) saturate(160%)' },
      { name: 'background', value: 'rgba(2, 8, 23, 0.50)' },
      { name: 'border-bottom', value: '1px solid rgba(255,255,255,.07)' },
      { name: 'z-index', value: '50' },
    ],
  },
  {
    selector: 'div.foto-ring',
    tag: 'div',
    cls: 'foto-ring',
    domSelector: '.foto-ring',
    line: 38,
    size: '248 × 248',
    borderRadius: '50%',
    zIndex: 'auto',
    styles: [
      { name: 'border-radius', value: '50%' },
      { name: 'background', value: 'linear-gradient(135deg, #14b8a6, #2563eb, #8b5cf6)' },
      { name: 'padding', value: '4px' },
      { name: 'box-shadow', value: '0 0 40px rgba(20,184,166,.30)' },
      { name: 'animation', value: 'rotateBorder 6s linear infinite' },
    ],
  },
  {
    selector: 'div.glass-card',
    tag: 'div',
    cls: 'glass-card rounded-2xl p-5 group',
    domSelector: '.glass-card',
    line: 128,
    size: '380 × 280',
    borderRadius: '16px',
    zIndex: 'auto',
    styles: [
      { name: 'background', value: 'rgba(255, 255, 255, 0.04)' },
      { name: 'backdrop-filter', value: 'blur(20px) saturate(150%)' },
      { name: 'border', value: '1px solid rgba(255,255,255,.09)' },
      { name: 'border-radius', value: '1rem' },
      { name: 'box-shadow', value: '0 8px 32px rgba(0,0,0,.25)' },
    ],
  },
  {
    selector: 'a.cta-btn',
    tag: 'a',
    cls: 'cta-btn inline-flex items-center gap-2',
    domSelector: '.cta-btn',
    line: 55,
    size: '196 × 44',
    borderRadius: '9999px',
    zIndex: 'auto',
    styles: [
      { name: 'background', value: 'rgba(20, 184, 166, 0.15)' },
      { name: 'border', value: '1px solid rgba(20,184,166,.40)' },
      { name: 'backdrop-filter', value: 'blur(12px)' },
      { name: 'border-radius', value: '9999px' },
      { name: 'transition', value: 'all 0.3s ease' },
    ],
  },
  {
    selector: 'div.lang-pill',
    tag: 'div',
    cls: 'lang-pill flex items-center gap-0.5',
    domSelector: '.lang-pill',
    line: 74,
    size: '180 × 40',
    borderRadius: '1rem',
    zIndex: 'auto',
    styles: [
      { name: 'background', value: 'rgba(255, 255, 255, 0.05)' },
      { name: 'backdrop-filter', value: 'blur(20px) saturate(150%)' },
      { name: 'border', value: '1px solid rgba(255,255,255,.10)' },
      { name: 'border-radius', value: '1rem' },
      { name: 'box-shadow', value: '0 4px 20px rgba(0,0,0,.30)' },
    ],
  },
  {
    selector: 'a.social-btn',
    tag: 'a',
    cls: 'social-btn',
    domSelector: '.social-btn',
    line: 92,
    size: '44 × 44',
    borderRadius: '50%',
    zIndex: 'auto',
    styles: [
      { name: 'width', value: '44px' },
      { name: 'height', value: '44px' },
      { name: 'border-radius', value: '50%' },
      { name: 'background', value: 'rgba(255,255,255,.06)' },
      { name: 'backdrop-filter', value: 'blur(12px)' },
      { name: 'border', value: '1px solid rgba(255,255,255,.12)' },
    ],
  },
]

const current = reactive({ ...elements[0] })
const highlight = ref(null)
let idx = 0
let timer = null

const updateElement = () => {
  idx = (idx + 1) % elements.length
  const el = elements[idx]
  Object.assign(current, el)

  const domEl = document.querySelector(el.domSelector)
  if (domEl) {
    const r = domEl.getBoundingClientRect()
    highlight.value = {
      tag: `<${el.tag} class="${el.cls.split(' ')[0]}">`,
      box: {
        top: `${r.top}px`,
        left: `${r.left}px`,
        width: `${r.width}px`,
        height: `${r.height}px`,
      },
    }
  } else {
    highlight.value = null
  }
}

onMounted(() => {
  updateElement()
  timer = setInterval(updateElement, 3800)
})

onBeforeUnmount(() => clearInterval(timer))
</script>

<style scoped>
.devtools-ghost {
  position: fixed;
  inset: 0;
  z-index: 5;
  pointer-events: none;
}

/* ── Highlight ── */
.inspect-highlight {
  position: fixed;
  border: 1.5px solid rgba(20, 184, 166, 0.65);
  background: rgba(20, 184, 166, 0.07);
  box-shadow: inset 0 0 0 1px rgba(20, 184, 166, 0.12);
  pointer-events: none;
  transition: top 0.55s cubic-bezier(0.4,0,0.2,1),
              left 0.55s cubic-bezier(0.4,0,0.2,1),
              width 0.55s cubic-bezier(0.4,0,0.2,1),
              height 0.55s cubic-bezier(0.4,0,0.2,1);
  z-index: 6;
}

.inspect-tag {
  position: absolute;
  top: -22px;
  left: 0;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 10px;
  background: #14b8a6;
  color: #020817;
  padding: 2px 7px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.hl-ruler { position: absolute; background: rgba(20,184,166,0.25); }
.hl-ruler--top  { top: -1px; left: 10%; width: 80%; height: 1px; }
.hl-ruler--left { left: -1px; top: 10%; height: 80%; width: 1px; }

/* ── Panel ── */
.dt-panel {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100vh - 80px);
  background: rgba(14, 16, 26, 0.55);
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 11.5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 -8px 40px rgba(0,0,0,0.5);
}

/* Handle / title bar */
.dt-handle {
  display: flex;
  align-items: center;
  height: 26px;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  padding: 0 10px;
  gap: 8px;
  flex-shrink: 0;
}

.dt-handle-dots {
  display: flex;
  gap: 5px;
}

.dt-handle-dots span {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.12);
}

.dt-handle-title {
  font-size: 10px;
  color: rgba(255,255,255,0.3);
  flex: 1;
  text-align: center;
  letter-spacing: 0.05em;
}

.dt-handle-actions {
  display: flex;
  gap: 10px;
  font-size: 12px;
  color: rgba(255,255,255,0.2);
}

/* Tabs */
.dt-tabs {
  display: flex;
  align-items: center;
  height: 32px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  padding: 0 4px;
  gap: 0;
  flex-shrink: 0;
}

.dt-tab {
  padding: 0 14px;
  height: 100%;
  display: flex;
  align-items: center;
  color: rgba(255,255,255,0.25);
  font-size: 11px;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
}

.dt-tab--active {
  color: rgba(255,255,255,0.8);
  border-bottom-color: #14b8a6;
}

.dt-cursor-icon {
  color: rgba(20,184,166,0.6);
  display: flex;
  align-items: center;
  padding: 0 10px;
}

.dt-breadcrumb {
  margin-left: auto;
  font-size: 10px;
  color: rgba(255,255,255,0.2);
  padding-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 320px;
}

.dt-bc-active { color: rgba(20,184,166,0.7); }

/* Body */
.dt-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* DOM */
.dt-dom {
  flex: 1;
  padding: 6px 8px;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid rgba(255,255,255,0.05);
}

.dt-dom::-webkit-scrollbar { width: 3px; }
.dt-dom::-webkit-scrollbar-track { background: transparent; }
.dt-dom::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

.dt-search {
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 6px;
  padding: 3px 8px;
  margin-bottom: 8px;
  gap: 6px;
  color: rgba(255,255,255,0.5);
  font-size: 11px;
}

.dt-search-icon { font-size: 9px; }
.dt-search-text { color: rgba(20,184,166,0.8); }

.dt-line {
  line-height: 1.8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(255,255,255,0.4);
  font-size: 11px;
}

.dt-dim { color: rgba(255,255,255,0.18) !important; }

.dt-selected {
  color: rgba(255,255,255,0.9) !important;
  background: rgba(20,184,166,0.1);
  border-left: 2px solid rgba(20,184,166,0.6);
  padding-left: 4px;
  border-radius: 0 3px 3px 0;
}

.dt-tag     { color: rgba(103,194,233,0.85); }
.dt-attr    { color: rgba(156,220,254,0.7); }
.dt-str     { color: rgba(206,145,120,0.85); }
.dt-comment { color: rgba(255,255,255,0.25); font-style: italic; }
.dt-cursor  { color: #14b8a6; margin-left: 2px; }

/* Divider */
.dt-divider {
  width: 3px;
  background: rgba(255,255,255,0.04);
  cursor: col-resize;
  flex-shrink: 0;
  transition: background 0.2s;
}

/* Styles */
.dt-styles {
  width: 300px;
  flex-shrink: 0;
  padding: 6px 10px;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid rgba(255,255,255,0.05);
}

.dt-styles::-webkit-scrollbar { width: 3px; }
.dt-styles::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

.dt-styles-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  padding-bottom: 4px;
}

.dt-styles-tab {
  font-size: 10.5px;
  color: rgba(255,255,255,0.25);
  cursor: default;
  padding-bottom: 2px;
}

.dt-styles-tab--active {
  color: rgba(255,255,255,0.75);
  border-bottom: 1.5px solid #14b8a6;
}

.dt-rule { margin-bottom: 10px; }

.dt-rule-source {
  font-size: 9.5px;
  color: rgba(20,184,166,0.5);
  margin-bottom: 2px;
  letter-spacing: 0.03em;
}

.dt-styles-header {
  color: rgba(255,255,255,0.4);
  margin-bottom: 1px;
  font-size: 11px;
}

.dt-selector     { color: rgba(215,186,125,0.9); }
.dt-styles-close { color: rgba(255,255,255,0.35); font-size: 11px; }

.dt-prop {
  padding-left: 12px;
  line-height: 1.75;
  color: rgba(255,255,255,0.45);
  font-size: 11px;
  display: flex;
  align-items: baseline;
  gap: 2px;
  transition: all 0.35s ease;
}

.dt-checkbox   { color: rgba(255,255,255,0.15); font-size: 9px; margin-right: 4px; }
.dt-prop-name  { color: rgba(156,220,254,0.85); }
.dt-prop-value { color: rgba(206,145,120,0.9); }

/* Computed / Box Model */
.dt-computed {
  width: 220px;
  flex-shrink: 0;
  padding: 6px 10px;
  overflow: hidden;
}

.dt-boxmodel {
  margin: 8px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bm-margin, .bm-border, .bm-padding, .bm-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bm-margin  { background: rgba(245,158,11,0.08);  border: 1px solid rgba(245,158,11,0.25);  padding: 10px; border-radius: 3px; }
.bm-border  { background: rgba(59,130,246,0.08);  border: 1px solid rgba(59,130,246,0.25);  padding: 8px;  border-radius: 2px; }
.bm-padding { background: rgba(16,185,129,0.08);  border: 1px solid rgba(16,185,129,0.25);  padding: 8px;  border-radius: 2px; }
.bm-content { background: rgba(20,184,166,0.1);   border: 1px solid rgba(20,184,166,0.3);   padding: 6px 12px; border-radius: 2px; min-width: 80px; justify-content: center; }

.bm-label {
  position: absolute;
  top: 2px;
  left: 4px;
  font-size: 8px;
  color: rgba(255,255,255,0.2);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.bm-size {
  font-size: 10px;
  color: rgba(20,184,166,0.8);
  white-space: nowrap;
}

.dt-computed-props {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 8px;
}

.dt-cprop {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: rgba(255,255,255,0.25);
  border-bottom: 1px solid rgba(255,255,255,0.04);
  padding: 1px 0;
}

.dt-cprop .dt-prop-value { color: rgba(206,145,120,0.7); font-size: 10px; }

/* ── Mobile responsive ── */
@media (max-width: 776px) {
  .dt-panel { font-size: 10px; }

  /* Abas: esconde as que transbordam */
  .dt-tab:not(.dt-tab--active) { padding: 0 8px; }
  .dt-breadcrumb { display: none; }

  /* Body: DOM ocupa toda a largura, styles compacto, computed escondido */
  .dt-styles  { width: 140px; }
  .dt-computed { display: none; }

  /* Reduz padding interno */
  .dt-dom    { padding: 4px 6px; }
  .dt-styles { padding: 4px 6px; }
}

/* Cursor piscando */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
.blink { animation: blink 1s step-end infinite; }

/* Transitions */
.hl-enter-active, .hl-leave-active { transition: opacity 0.4s ease; }
.hl-enter-from, .hl-leave-to       { opacity: 0; }

.prop-enter-active { transition: all 0.3s ease; }
.prop-enter-from   { opacity: 0; transform: translateX(-6px); }
</style>

<template>
  <section id="about" class="mainframe-hero" aria-label="Garbson Souza">
    <div class="mainframe-screen">
      <header class="mainframe-header"><span>ISPF/PDF</span><strong>{{ $t('ui.hero.session') }}</strong><span>SYS1</span></header>
      <nav class="mainframe-menu">
        <span v-for="(item, i) in menu" :key="item" :class="{ 'menu-active': i === 0 }">{{ item }}</span>
        <span class="menu-time">08:42:17 &nbsp; {{ $t('ui.hero.online') }}</span>
      </nav>
      <div class="mainframe-content">
        <div class="mainframe-command"><span>{{ $t('ui.hero.command') }} ===&gt;</span> {{ $t('ui.hero.welcome') }}<span class="cursor">█</span></div>
        <div class="mainframe-rule"></div>
        <div class="mainframe-grid">
          <div class="terminal-panel">
            <div class="panel-title">{{ $t('ui.hero.personal') }}</div>
            <div class="profile-row">
              <img class="pixel-avatar" src="/garbson-avatar.webp" alt="Garbson Souza" />
              <div class="profile-fields">
                <div><i>{{ $t('ui.hero.name') }}</i> GARBSON SOUZA</div>
                <div><i>{{ $t('ui.hero.role') }}</i> {{ $t('ui.hero.roleValue') }}</div>
                <div><i>{{ $t('ui.hero.status') }}</i> <b>{{ $t('ui.hero.statusValue') }}</b></div>
                <div><i>{{ $t('ui.hero.location') }}</i> {{ $t('ui.hero.locationValue') }}</div>
              </div>
            </div>
            <div class="panel-line">&gt; {{ $t('ui.hero.line1') }}</div>
            <div class="panel-line">&gt; {{ $t('ui.hero.line2') }}</div>
          </div>
          <div class="terminal-panel intro-panel">
            <div class="panel-title">{{ $t('ui.hero.about') }}</div>
            <h1>{{ $t('introduction.greeting') }}</h1>
            <p>{{ $t('introduction.role') }}</p>
            <div class="impact-callout">
              <span>{{ $t('ui.hero.impactTitle') }}</span>
              <strong>{{ $t('ui.hero.impactNames') }}</strong>
              <small>{{ $t('ui.hero.impactDesc') }}</small>
            </div>
            <div class="signature">{{ $t('ui.hero.signature') }}</div>
          </div>
        </div>
        <div class="terminal-panel stack-panel">
          <div class="panel-title">{{ $t('ui.hero.stackTitle') }}</div>
          <div class="stack-values">
            <span>{{ $t('ui.hero.front') }}: <b>VUE.JS / TYPESCRIPT</b></span>
            <span>{{ $t('ui.hero.legacy') }}: <b>COBOL / NATURAL / CICS / JSP</b></span>
            <span>{{ $t('ui.hero.mode') }}: <b>{{ $t('ui.hero.modeValue') }}</b></span>
          </div>
        </div>
      </div>
      <footer class="mainframe-footer"><span v-for="k in keys" :key="k">{{ k }}</span></footer>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
const menu = computed(() => tm('ui.hero.menu'))
const keys = computed(() => tm('ui.hero.keys'))
</script>

<style scoped>
.mainframe-hero{padding:2rem 0 4rem;color:#8cffab;font-family:'Fira Code','Courier New',monospace}.mainframe-screen{position:relative;overflow:hidden;border:1px solid rgba(74,222,128,.52);background:#03120d;box-shadow:0 0 35px rgba(34,197,94,.13),inset 0 0 80px rgba(34,197,94,.05);text-shadow:0 0 10px rgba(74,222,128,.32)}.mainframe-screen:after{position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent 0,transparent 3px,rgba(140,255,171,.035) 4px);content:'';pointer-events:none}.mainframe-header,.mainframe-menu,.mainframe-footer{display:flex;align-items:center;gap:1.5rem;padding:.55rem 1rem;border-bottom:1px solid rgba(74,222,128,.3);font-size:.68rem;letter-spacing:.07em}.mainframe-header{justify-content:space-between;background:rgba(74,222,128,.11);color:#f1f9c5}.mainframe-header strong{color:#8cffab}.mainframe-menu{color:rgba(184,247,201,.6)}.menu-active{padding:0 .35rem;background:#8cffab;color:#03120d;text-shadow:none}.menu-time{margin-left:auto;color:#f1f9c5}.mainframe-content{padding:1.1rem 1.35rem 1.35rem}.mainframe-command{min-height:1.8rem;font-size:.78rem;color:#f1f9c5}.mainframe-command:first-letter{color:#f1e88a}.cursor{animation:blink 1s steps(2,jump-none) infinite}.mainframe-rule{height:1px;margin:.65rem 0 1.15rem;background:rgba(74,222,128,.3)}.mainframe-grid{display:grid;grid-template-columns:minmax(0,.95fr) minmax(0,1.25fr);gap:1.25rem}.terminal-panel{border:1px solid rgba(74,222,128,.34);background:rgba(0,18,12,.58)}.panel-title{padding:.5rem .75rem;border-bottom:1px solid rgba(74,222,128,.28);color:#f1e88a;font-size:.68rem;letter-spacing:.08em}.profile-row{display:flex;flex-wrap:wrap;align-items:center;gap:1rem;padding:1.1rem .9rem .7rem}.pixel-avatar{display:grid;width:86px;height:86px;flex-shrink:0;place-items:center;border:2px solid #8cffab;outline:4px solid rgba(140,255,171,.13);background:repeating-linear-gradient(135deg,rgba(140,255,171,.15) 0 4px,transparent 4px 8px),#06281a;color:#f1f9c5;font-size:1.4rem;font-weight:700}.profile-fields{min-width:0;flex:1 1 11rem;font-size:.66rem;line-height:1.9}.profile-fields div{display:flex;gap:.55rem}.profile-fields i{min-width:3.5rem;color:#f1e88a;font-style:normal}.profile-fields b,.stack-values b{color:#8cffab;font-weight:400}.panel-line{padding:.2rem .9rem;color:rgba(184,247,201,.65);font-size:.65rem}.panel-line:last-child{padding-bottom:1rem}.intro-panel h1{margin:1.2rem 1.1rem .65rem;color:#f1f9c5;font-size:clamp(1.7rem,4vw,3.25rem)}.intro-panel p{max-width:58ch;margin:0 1.1rem;color:#b8f7c9;font-size:.82rem;line-height:1.8}.signature{margin:1.3rem 1.1rem 1.2rem;color:#f1e88a;font-size:.68rem;letter-spacing:.06em}.stack-panel{margin-top:1.25rem}.stack-values{display:flex;flex-wrap:wrap;gap:.7rem 1.8rem;padding:.85rem .75rem 1rem;color:rgba(184,247,201,.68);font-size:.68rem}.mainframe-footer{flex-wrap:wrap;row-gap:.35rem;border-top:1px solid rgba(74,222,128,.3);border-bottom:0;color:rgba(184,247,201,.58)}
@keyframes blink{50%{opacity:0}}@media(max-width:700px){.mainframe-hero{padding-top:1rem}.mainframe-header,.mainframe-menu,.mainframe-footer{font-size:.55rem;gap:.7rem}.mainframe-header strong,.menu-time{display:none}.mainframe-content{padding:.8rem}.mainframe-grid{grid-template-columns:1fr}.profile-row{align-items:flex-start}.pixel-avatar{width:64px;height:64px;font-size:1rem}.profile-fields{font-size:.55rem}.intro-panel p{font-size:.7rem}}
</style>

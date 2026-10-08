<template>
  <section id="contact" class="cta w-[90%] md:w-[80%] mx-auto mt-16 mb-16">
    <div class="screen">
      <header class="bar"><span>JES2</span><strong>{{ $t('ui.cta.bar') }}</strong><span>{{ $t('ui.cta.ready') }}</span></header>

      <div class="body">
        <pre class="jcl"><span class="c">//GARBSON  JOB (CONTACT),'{{ $t('callToAction.title') }}',CLASS=A</span>
<span class="c">//STEP01   EXEC PGM=HIRE</span>
<span class="c">//SYSIN    DD *</span></pre>

        <h2>{{ $t('callToAction.title') }}</h2>
        <p class="desc">{{ $t('callToAction.description') }}</p>

        <div class="menu">
          <a v-for="(c, i) in contacts" :key="c.name" :href="c.href" :target="c.external ? '_blank' : null" rel="noopener noreferrer" class="opt">
            <span class="num">{{ i + 1 }}</span>
            <span class="label">{{ c.name }}</span>
            <span class="dots"></span>
            <span class="go">{{ $t('ui.cta.submit') }} ▶</span>
          </a>
        </div>

        <pre class="jcl end"><span class="c">/*</span>
<span class="ok">{{ $t('ui.cta.end') }}</span></pre>
      </div>
    </div>
  </section>
</template>

<script setup>
const contacts = [
  { name: 'EMAIL', href: 'mailto:garbsonsouzasantos@gmail.com' },
  { name: 'WHATSAPP', href: 'https://api.whatsapp.com/send?phone=5568992490198', external: true },
  { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/garbson-souza-0744a825a/', external: true },
]
</script>

<style scoped>
.cta { font-family: 'Fira Code', 'Courier New', monospace; color: #8cffab; }
.screen { border: 1px solid rgba(74, 222, 128, 0.5); background: rgba(3, 18, 13, 0.92); box-shadow: 0 0 35px rgba(34, 197, 94, 0.13), inset 0 0 80px rgba(34, 197, 94, 0.05); }
.bar { display: flex; justify-content: space-between; gap: 1rem; padding: 0.55rem 1rem; background: rgba(74, 222, 128, 0.11); border-bottom: 1px solid rgba(74, 222, 128, 0.3); font-size: 0.68rem; letter-spacing: 0.07em; color: #f1f9c5; }
.bar strong { color: #8cffab; font-weight: 400; }
.body { padding: 1.4rem 1.5rem 1.6rem; }
.jcl { font-size: 0.68rem; line-height: 1.9; white-space: pre-wrap; font-family: inherit; }
.c { color: rgba(184, 247, 201, 0.6); }
.ok { color: #f1e88a; }
h2 { margin: 1.1rem 0 0.7rem; color: #f1f9c5; font-size: clamp(1.5rem, 4vw, 2.4rem); font-weight: 700; text-shadow: 0 0 16px rgba(140, 255, 171, 0.3); }
.desc { max-width: 62ch; margin-bottom: 1.5rem; font-size: 0.8rem; line-height: 1.8; color: #b8f7c9; }
.menu { display: grid; gap: 0.5rem; margin-bottom: 1.4rem; }
.opt { display: flex; align-items: center; gap: 0.8rem; padding: 0.8rem 1rem; border: 1px solid rgba(74, 222, 128, 0.35); background: rgba(0, 18, 12, 0.6); color: #f1f9c5; font-size: 0.8rem; text-decoration: none; transition: all 0.2s; }
.num { color: #f1e88a; }
.dots { flex: 1; border-bottom: 1px dotted rgba(74, 222, 128, 0.35); transform: translateY(3px); }
.go { color: rgba(184, 247, 201, 0.5); font-size: 0.65rem; letter-spacing: 0.08em; transition: color 0.2s; }
.opt:hover, .opt:focus-visible { border-color: #f1e88a; background: #f1e88a; color: #03120d; box-shadow: 0 0 24px rgba(241, 232, 138, 0.4); transform: translateX(6px); outline: none; }
.opt:hover .num, .opt:hover .go, .opt:focus-visible .num, .opt:focus-visible .go { color: #03120d; }
.opt:hover .dots, .opt:focus-visible .dots { border-color: rgba(3, 18, 13, 0.5); }
</style>

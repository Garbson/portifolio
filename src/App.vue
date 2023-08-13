<template>
  <div class="body">
    <div class="apresentacao">
      <img class="foto" src="public/img/logo.jpeg" alt="" />
      <div class="sobre">
        <p>Olá, meu nome é</p>
        <h1>Garbson Souza</h1>
        <h1>Sou um desenvolvedor FRONT-END</h1>
        <p>
          Sou apaixonado por programação e desafios,
          <br />
          e estou sempre em busca de conhecimento.
        </p>
      </div>
      <div class="redes">
        <a href="https://www.instagram.com/dev_garbson/"><img src="public/img/instagram-2-1-logo-svgrepo-com.svg" alt="instagram" /></a>
        <a href=""><img src="public/img/whatsapp-svgrepo-com.svg" alt="whatsap" /></a>
        <a href="https://github.com/Garbson"><img src="public/img/github-142-svgrepo-com.svg" alt="Github" /></a>
        <a href="https://www.linkedin.com/in/garbson-souza-santos-0744a825a/">
          <img src="public/img/linkedin-svgrepo-com.svg" alt="linkedli" />
        </a>
      </div>
    </div>

    <h1 class="portfolio">Portfolio:</h1>
    <div class="container">
      <div class="con">
        <BaseCard
          title="Brasileiro.ninja"
          description="Informações nacionais como ISBN, CEP, DDD..."
          img="public/img/brasileiroo.jpeg"
          vue
          css
          javascript
          github="https://github.com/arnonrdp/Brasileiro-Ninja"
          link="https://brasileiro.ninja/"
        />

        <BaseCard
          title="Bitcoin"
          description="Site com o valor em tempo real de moedas digitais"
          img="public/img/bitcoin.jpeg"
          html
          css
          javascript
          github="https://github.com/Garbson/bitcoin"
          link="https://bitcoin-27r.pages.dev/"
        />

        <BaseCard
          title="Temperature"
          description="Site feito para ver a temperatura em tempo real."
          img="public/img/temperatures.jpeg"
          html
          css
          javascript
          github="https://github.com/Garbson/projeto-site-pra-ver-a-temperatura"
          link="https://temperature-9ta.pages.dev/"
        />

        <BaseCard
          title="Conversor"
          description="Conversor para o cambio de moedas de todo o mundo"
          img="public/img/Conversor.jpeg"
          html
          css
          javascript
          github="https://github.com/Garbson/Currency-Converter"
          link="https://currency-converter-cgn.pages.dev/"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseCard from './components/BaseCard.vue'
</script>

<style>
body {
  background-size: 100% 100%;
  background-position: 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
  background-image: repeating-linear-gradient(315deg, #00ffff2e 92%, #073aff00 100%),
    repeating-radial-gradient(75% 75% at 238% 218%, #00ffff12 30%, #073aff14 39%),
    radial-gradient(99% 99% at 109% 2%, #09090aff 0%, #073aff00 100%),
    radial-gradient(160% 154% at 711px -303px, #000000ff 0%, #2000ffff 12%, #073affff 100%);
  object-fit: contain;
  margin: 0;
  padding: 0;
  font-family: 'Oswald', sans-serif;
}

header {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 20px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Center the header itself horizontally */
}

/* .meu-nome {
  margin-left: 10px;
  padding: 10px;
} */

.redes {
  display: flex;
  /* Display redes in a column */
  justify-content: center;
  /* Center items vertically */
  align-items: flex-end;
  /* Align redes items to the right */
  max-width: 200px;
  /* Adjust as needed */
  margin-top: 10px;
  margin-left: 10px;
  /* Adjust spacing from sobre text */
}

.redes img {
  width: 30px;
  height: auto;
  margin-right: 10px;
  /* Adjust margin between images */
  border-radius: 50%;
}

.apresentacao {
  margin-left: 30px;
  display: flex;
}

.foto {
  width: 300px;
  height: 100%;
  border-radius: 50%;
  margin-top: 20px;
}

.sobre {
  display: flex;
  flex-direction: column;
  margin-top: 140px;
  margin-left: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 20px;
  color: #ffffff;
  font-family: 'Oswald', sans-serif;
}

.meu-nome {
  margin-left: 50px;
}

.descricao {
  font-family: math;
  margin-left: 100px;
  font-size: 17px;
}

.portfolio {
  color: #fffdfd;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100px;
  margin-top: 15px;
}

.div-content {
  text-align: center;
}

.container {
  margin: 0 auto;

  max-width: 100%;

  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

.con {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  margin: 0 100px;
}
@media screen and (max-width: 800px) {
  .apresentacao {
    /* coloque aqui os estilos que você quer aplicar */
    flex-direction: column;
    align-items: center;
  }
  .foto {
    width: 50%;
  }
  .sobre {
    text-align: center;
  }
  .redes {
    display: flex;
    justify-content: center;
  }
}
</style>

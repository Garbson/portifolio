<template>
  <div class="body">
    <div class="apresentacao">
      <img class="foto" src="./assets/img/logo.jpeg" alt="" />
      <div class="redes">
        <a href="https://www.instagram.com/dev_garbson/"><img src="./assets/img/instagram-2-1-logo-svgrepo-com.svg" alt="instagram" /></a>
        <a href="https://github.com/Garbson"><img src="./assets/img/github-142-svgrepo-com.svg" alt="Github" /></a>
        <a href="https://www.linkedin.com/in/garbson-souza-santos-0744a825a/">
          <img src="./assets/img/linkedin-svgrepo-com.svg" alt="linkedli" />
        </a>
      </div>
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
    </div>

    <div class="container">
      <div class="con">
        <BaseCard
          title="Gerenciador de tarefas"
          description="Gerenciador de tarefas, metas e calendario"
          img="gerenciador.png"
          vue
          tailwind
          javascript
          github="https://github.com/Garbson/GER"
          link="https://ger-8tm.pages.dev/"
        />

        <BaseCard
          title="Brasileiro.ninja"
          description="Informações nacionais como ISBN, CEP, DDD..."
          img="brasileiroo.jpeg"
          vue
          css
          javascript
          github="https://github.com/arnonrdp/Brasileiro-Ninja"
          link="https://brasileiro.ninja/"
        />

        <BaseCard
          title="Portifolio"
          description="Site com projetos que construí e mantenho ativo"
          img="portfolio.png"
          vue
          css
          javascript
          github="https://github.com/Garbson/portifolio"
          link="https://portifolio-by1.pages.dev"
        />

        <BaseCard
          title="Bitcoin"
          description="Site com o valor em tempo real de moedas digitais"
          img="bitcoin.jpeg"
          html
          css
          javascript
          github="https://github.com/Garbson/bitcoin"
          link="https://bitcoin-27r.pages.dev/"
        />

        <BaseCard
          title="Temperature"
          description="Site feito para ver a temperatura de qualquel cidade"
          img="temperatures.jpeg"
          html
          css
          javascript
          github="https://github.com/Garbson/projeto-site-pra-ver-a-temperatura"
          link="https://temperature-9ta.pages.dev/"
        />

        <BaseCard
          title="Conversor"
          description="Conversor para o cambio de moedas do mundo"
          img="Conversor.jpeg"
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
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 60%, rgba(118, 10, 10, 1) 100%);
  object-fit: contain;
  margin: 0;
  padding: 0;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
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
.apresentacao {
  display: flex;
  flex-direction: column; /* Altere para uma coluna */
  align-items: center; /* Centralize horizontalmente */
}

.foto-container {
  display: flex;
  justify-content: center; /* Centralize horizontalmente */
  align-items: center; /* Centralize verticalmente */
}

.foto {
  width: 400px;
  height: auto;
  border-radius: 50%;
  margin-top: 20px;
}

.redes {
  margin-top: 10px;
  display: flex;
}

.redes a {
  display: flex;

  align-items: center;
  margin-bottom: 10px; /* Adicione espaço entre os ícones */
}

.redes img {
  width: 30px;
  height: auto;
  margin-right: 10px;
  border-radius: 50%;
}

.sobre {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
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
  margin: 0 40px; /* Adjust this margin for better spacing on small screens */
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

@media screen and (max-width: 700px) {
  .con {
    /* Stack cards vertically */
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  .con .BaseCard {
    width: 100%; /* Make each card take full width on smaller screens */
    margin-bottom: 20px; /* Add some space between stacked cards */
  }
}
@media screen and (max-width: 700px) {
  .apresentacao {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }

  .foto {
    width: 70%;
    max-width: 300px;
    margin-left: 0; /* Remova a margem da esquerda */
    margin-right: 0; /* Remova a margem da direita */
  }

  .sobre {
    text-align: center;
    margin-top: 20px;
  }

  .redes {
    margin-top: 20px;
  }

  .redes img {
    margin-bottom: 10px;
  }

  .portfolio {
    margin-top: 20px;
  }

  .container {
    margin: 0;
  }

  .con {
    margin: 0;
  }
}
</style>

<script setup>
import TechCards from './layout/TechCards.vue';

const techs = [
  {
    nome: 'Vue.js',
    icon: '',
    bg: 'linear-gradient(90deg, rgba(65, 184, 131, 0.5) 0%, rgba(65, 184, 131, 0) 30%, rgba(65, 184, 131, 0) 70%, rgba(65, 184, 131, 0.5) 100%)'
  },
  {
    nome: 'Nuxt',
    icon: '',
    bg: 'linear-gradient(90deg, rgba(0, 255, 151, 0.5) 0%, rgba(65, 184, 131, 0) 30%, rgba(65, 184, 131, 0) 70%, rgba(0, 255, 151, 0.5) 100%)'
  },
  {
    nome: 'Web Desing',
    icon: '',
    bg: 'linear-gradient(90deg, rgba(0, 150, 157, 0.5) 0%, rgba(65, 184, 131, 0) 30%, rgba(65, 184, 131, 0) 70%, rgba(0, 150, 157, 0.5) 100%)'
  },
  {
    nome: 'Figma',
    icon: '',
    bg: 'linear-gradient(90deg,   rgba(242, 78, 30, 0.5) 0%, rgba(162, 89, 255, 0.5) 6%, rgba(26, 188, 254, 0.5) 12%, rgba(10, 207, 131, 0.5) 18%, rgba(10, 207, 131, 0) 30%, rgba(10, 207, 131, 0) 70%, rgba(10, 207, 131, 0.5) 82%, rgba(26, 188, 254, 0.5) 88%, rgba(162, 89, 255, 0.5) 94%, rgba(242, 78, 30, 0.5) 100%)'
  },
  {
    nome: 'JavaScript',
    icon: '',
    bg: 'linear-gradient(90deg, rgba(247, 223, 30, 0.5) 0%, rgba(65, 184, 131, 0) 30%, rgba(65, 184, 131, 0) 70%, rgba(247, 223, 30, 0.5) 100%)'
  },
  {
    nome: 'Tailwind',
    icon: '',
    bg: 'linear-gradient(90deg, rgba(24, 181, 185, 0.5) 0%, rgba(65, 184, 131, 0) 30%, rgba(65, 184, 131, 0) 70%, rgba(24, 181, 185, 0.5) 100%)'
  },
  {
    nome: 'HTML',
    icon: '',
    bg: 'linear-gradient(90deg, rgba(227, 78, 38, 0.5) 0%, rgba(65, 184, 131, 0) 30%, rgba(65, 184, 131, 0) 70%, rgba(227, 78, 38, 0.5) 100%)'
  },
  {
    nome: 'CSS',
    icon: '',
    bg: 'linear-gradient(90deg, rgba(28, 136, 199, 0.5) 0%, rgba(65, 184, 131, 0) 30%, rgba(65, 184, 131, 0) 70%, rgba(28, 136, 199, 0.5) 100%)'
  },
  {
    nome: 'GIT',
    icon: '',
    bg: 'linear-gradient(90deg,rgba(66, 0, 152, 0.5) 0%, rgba(65, 184, 131, 0) 30%, rgba(65, 184, 131, 0) 70%,rgba(66, 0, 152, 0.5) 100%)'
  },
  {
    nome: 'React',
    icon: '',
    bg: 'linear-gradient(90deg,rgba(83, 193, 222, 0.5) 0%, rgba(65, 184, 131, 0) 30%, rgba(65, 184, 131, 0) 70%,rgba(83, 193, 222, 0.5) 100%)'
  }
];
</script>

<template>
  <section class="gap-5">
    <div>
      <div class="sobre mb-6">
        <h1>Sobre mim</h1>
        <p class="mb-7 max-w-xl text-xl">
          Sou um empreendedor de 25 anos que adora projetar e construir soluções de alta qualidade.
          Você vai amar trabalha comigo, sempre prezo pelo ótimo atendimento, qualidade de entrega a
          nível profissional e uma excepcional relação com o cliente.
        </p>
        <div class="radical flex items-center gap-5">
          <img src="../assets/icon/caveira.svg" alt="" />
          <p>Também gosto de praticar esportes radicais.</p>
        </div>
      </div>

      <div class="xp grid">
        <h2 class="mb-4">Tenho experiência com</h2>
        <ul class="max-w-lg gap-5">
          <TechCards v-for="item in techs" :key="item.nome" :bg="item.bg" :title="item.nome" />

          <li class="marreta">
            <div class="bg"></div>
            <p>MARRETA</p>
            <span>(Caso nenhuma das anteriores funcione)</span>
          </li>
        </ul>
      </div>
    </div>

    <img src="../assets/img/perfil_2.webp" alt="" class="perfil" />
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1400px;
  margin: 0px auto 40px;
  .sobre {
    text-align: left;
    .radical {
      justify-content: left;
    }
  }
  h1 {
    font-family: var(--body-fonts);
    font-size: clamp(3rem, 9vw, 6rem);
  }
  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
  }
  .perfil {
    width: 600px;
    border-radius: 45px;
    justify-self: end;
  }
  .xp {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      li {
        background-color: var(--color-g-11);
        border-radius: 8px;
        text-align: center;
        padding: 14px;
      }
      .marreta {
        display: grid;
        width: max-content;
        grid-column: span 2;
        margin: auto;
        padding: 14px 30px;
        position: relative;
        span {
          font-size: 12px;
        }
        .bg {
          position: absolute;
          inset: 0;
          border-radius: 8px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(65, 184, 131, 0) 30%,
            rgba(65, 184, 131, 0) 70%,
            rgba(255, 255, 255, 0.3) 100%
          );
          z-index: 1;
          opacity: 0;
          transition: opacity 0.25s linear;
        }
        .bg:hover {
          opacity: 1;
        }
      }
    }
  }
}
@media screen and (max-width: 700px) {
  section {
    grid-template-columns: none;
    .sobre {
      text-align: center;
      .radical {
        justify-content: center;
      }
    }
    .perfil {
      width: 100%;
      height: 200px;
      object-fit: cover;
      justify-self: center;
      border-radius: 22px;
    }

    .xp {
      justify-content: center;
      h2 {
        text-align: center;
      }
    }
  }
}
</style>

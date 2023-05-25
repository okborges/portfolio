<script setup>
import TechCards from './layout/TechCards.vue';
import techs from '~/store';
</script>

<template>
  <section>
    <div class="estrelas gap-5">
      <div>
        <div class="sobre mb-6">
          <h2 class="title">Sobre mim</h2>
          <h3 class="mb-7 max-w-xl text-xl">
            Meu nome é Rafael Borges.<br />
            Sou um desenvolvedor Front-end criativo que adora projetar e construir soluções de alta
            qualidade. Minha abordagem é dinâmica e leve, me esforço para criar sites incríveis e
            emocionantes.<br />
            Acima de tudo, prezo para que meus clientes tenham uma boa experiência e um ótimo
            atendimento.
          </h3>
          <div class="radical flex items-center gap-5">
            <img src="../assets/icon/caveira.svg" alt="ilustração de caveira" width="32" />
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

        <div class="ajuste mt-5 flex">
          <span class="mx-auto">Não é muito mas é trabalho honesto.</span>
        </div>
      </div>

      <div class="profile_pic">
        <img src="../assets/img/perfil_2.webp" alt="Foto do okborges" width="600" />
      </div>
      <img
        src="../assets/img/perfil_2.webp"
        alt="Foto do okborges"
        width="600"
        class="profile_mobile"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: url(../assets/svg/estrelas.svg);
  background-repeat: no-repeat;
  background-size: cover;
  .estrelas {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 87.5rem;
    margin: 0rem auto 2.5rem;

    .sobre {
      text-align: left;
      .radical {
        justify-content: left;
      }
    }

    .profile_pic {
      justify-self: end;
      max-width: 37.5rem;
      height: fit-content;
      border-radius: 2.8125rem;
      overflow: hidden;
      box-shadow: 0 0.4375rem 2rem -0.125rem rgba(0, 0, 0, 0.68);
      img {
        width: 100%;
        transition: all 0.3s ease;
      }
      img:hover {
        transform: scale(1.1);
      }
    }
    .profile_mobile {
      display: none;
    }
    .title {
      font-family: var(--body-fonts);
      font-size: clamp(3rem, 9vw, 6rem);
    }
    h2 {
      font-size: clamp(2rem, 4vw, 3rem);
    }

    .xp {
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        li {
          background-color: var(--color-g-11);
          border-radius: 0.5rem;
          text-align: center;
          padding: 0.875rem;
          transition: all 0.3s ease 0s;
        }
        li:hover {
          transform: scale(1.1);
          rotate: (1deg);
        }
        .marreta {
          display: grid;
          width: max-content;
          grid-column: span 2;
          margin: auto;
          padding: 0.875rem 1.875rem;
          position: relative;
          span {
            font-size: 0.75rem;
          }
          .bg {
            position: absolute;
            inset: 0;
            border-radius: 0.5rem;
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
        .marreta:hover {
          box-shadow: 0 0.4375rem 2rem -0.125rem rgba(0, 0, 0, 0.68);
        }
      }
    }

    .ajuste {
      max-width: 512px;
    }
  }
}
@media screen and (max-width: 43.75rem) {
  section {
    .estrelas {
      grid-template-columns: none;
      .sobre {
        text-align: center;
        .radical {
          justify-content: center;
        }
      }
      .profile_pic {
        display: none;
      }
      .profile_mobile {
        display: block;
        width: 100%;
        height: 12.5rem;
        object-fit: cover;
        justify-self: center;
        border-radius: 1.375rem;
      }

      .xp {
        justify-content: center;
        h2 {
          text-align: center;
        }
      }
      .ajuste {
        max-width: none;
      }
    }
  }
}
</style>

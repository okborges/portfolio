<template>
  <section class="gap-5">
    <div>
      <div class="mb-6 sobre">
        <h1>Sobre mim</h1>
        <p class="text-xl max-w-xl mb-7">
          Sou um empreendedor de 25 anos que adora projetar e construir soluções de alta qualidade. Você vai amar
          trabalha comigo, sempre prezo pelo ótimo atendimento, qualidade de entrega a nível profissional e uma
          excepcional relação com o cliente.
        </p>
        <div class="flex items-center gap-5 radical">
          <img src="../assets/icon/caveira.svg" alt="" />
          <p>Também gosto de praticar esportes radicais.</p>
        </div>
      </div>

      <div class="grid xp">
        <h2 class="mb-4">Tenho experiência com</h2>
        <ul class="gap-5 max-w-lg">
          <li>Vue.js</li>
          <li>Nuxt</li>
          <li>Web Desing</li>
          <li>Figma</li>
          <li>JavaScript</li>
          <li>Tailwind</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>GIT</li>
          <li>Flutter</li>
          <li>
            MARRETA
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
    width: 560px;
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
    }
  }
}
@media screen and (max-width: 700px) {
  section {
    grid-template-columns: none;
    .sobre {
      text-align: center;
      .radical {
        justify-content: center ;
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

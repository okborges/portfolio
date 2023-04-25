<template>
  <section class="p-5">
    <div class="grid w-full h-full place-content-center text-center">
      <h1 class="pb-7">Desenvolvedor Front End</h1>
      <h2 class="text-base p-4 mx-3 rounded-2xl justify-self-center xl:text-2xl">
        🧡 Design • Natureza • Esportes radicais • Cultura brasileira • Uma boa fofoca
      </h2>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 100svh;
  div {
    background-image: url(../assets/img/giga.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 45px;

    h1 {
      font-size: clamp(3rem, 8vw, 9rem);
    }

    h2 {
      background-color: rgb(0 0 0 / 0.7);
      transition: 0.2s;
    }
    h2:hover {
      background-color: rgb(0 0 0 / 1);
    }
  }
}
</style>

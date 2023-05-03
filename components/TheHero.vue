<template>
  <section class="p-5">
    <div class="grid h-full w-full place-content-center text-center">
      <h1 class="pb-7">Desenvolvedor Front End</h1>
      <h2 class="mx-3 justify-self-center rounded-2xl p-4 text-base xl:text-2xl">
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
    border-radius: 2.8125rem;
    background-attachment: fixed;

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

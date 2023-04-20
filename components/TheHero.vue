<template>
  <section class="p-5 bg-black">
    <div class="grid w-full h-full place-content-center text-center text-white">
      <h1 class="font-semibold text-8xl pb-7">Desenvolvedor Front End</h1>
      <h2 class="text-2xl p-4 rounded-2xl justify-self-center">
        Apaixonado por: Design, Natureza, Esportes radicais, Cultura brasileira, Uma boa fofoca.
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

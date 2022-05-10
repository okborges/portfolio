<template>
  <main class="py-12">
    <div class="flex max-w-6xl mx-auto justify-between items-center">
      <section class="md:w-7/12">
        <h1 class="text-white font-bold mb-6 text-3xl ms:text-4xl md:text-5xl">
          Oi, sou o Borges :)
        </h1>
        <p class="sm:text-xl mb-6 md:pr-6">
          Me chamo Rafael Borges , um Desenvolvedor e Web designer localizado em
          São Bernardo - SP, com uma grande paixão em simplificar problemas.
          Cursando Análise e Desenvolvimentos de Sistemas na UNINOVE.
        </p>
        <p class="sm:text-lg mb-8 md:pr-6">
          No meu tempo livre gosto de fotografar, andar de patins e consumir
          arte.
        </p>
        <div class="flex justify-center md:block">
          <button class="btn-projetos">
            <a href="" class="text-lg font-semibold">Ver projetos</a>
          </button>
          <button>
            <a href="" class="text-lg font-semibold p-8 cafe">Cafezinho?</a>
          </button>
        </div>
      </section>
      <img
        class="hidden md:block md:rounded-lg"
        src="/sitezao.webp"
        alt=""
        width="330"
      />
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-projetos {
  background-color: #ff3d00;
  padding: 0.8rem 2rem;
  border-radius: 0.25rem;
}
.btn-projetos:hover {
  background-color: #dd2c00;
}

.cafe:hover {
  color: #dd2c00;
  transition-duration: 0.2s;
}
</style>

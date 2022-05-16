<template>
  <section class="max-w-6xl mx-auto justify-between mt-8 md:flex sm:mt-32">
    <div class="md:w-1/2 md:pr-6">
      <h2 class="italico pb-6 text-white text-2xl sm:text-3xl">Sobre mim</h2>
      <p class="pb-6 leading-8 sm:leading-8 sm:text-lg">
        Sou um empreendedor de 24 anos que adora projetar e construir soluções
        de alta qualidade. Você vai amar trabalha comigo, sempre prezo pelo
        ótimo atendimento, qualidade de entrega a nível profissional e uma
        excepcional relação com o cliente.
      </p>
      <div class="flex items-center">
        <Caveira />
        <p class="text-base pl-3">Também gosto de praticar esportes radicais.</p>
      </div>
    </div>
    <div class="pt-8 md:pt-0">
      <h2 class="italico pb-6 text-white text-2xl sm:text-3xl">
        Eu tenho experiencia com
      </h2>
      <div class="flex flex-wrap max-w-sm btn-experiencia gap-4">
        <p>Web Design</p>
        <p>Desenvolvimento Web</p>
        <p>HTML/CSS</p>
        <p>Figma</p>
        <p>Vue.js</p>
        <p>React</p>
        <p>Tailwind CSS</p>
        <p>MySQL</p>
        <p>GIT</p>
        <p>SEO</p>
      </div>
    </div>
  </section>
</template>

<script>
import Caveira from "./Caveira.vue";
export default { components: { Caveira } };
</script>

<style scoped>
.btn-experiencia p {
  padding: 0.4rem;
  border-radius: 5px;
  background-color: #351e1b;
  border: solid 1px #dd2c00;
  color: white;
  font-size: 0.9rem;
}

.italico {
  font-family: "DM Serif Display";
  font-style: italic;
}
</style>

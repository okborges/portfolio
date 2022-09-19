<template>
  <main>
    <section
      class="flex max-w-6xl mx-auto justify-between items-center my-9 sm:my-12"
    >
      <section class="md:w-7/12">
        <h1
          class="italico text-white font-bold mb-6 text-2xl ms:text-4xl md:text-5xl"
        >
          Oi, sou o Borges :)
        </h1>
        <p class="leading-8 mb-6 sm:leading-8 sm:text-xl md:pr-6">
          Me chamo
          <a
            href="https://linkedin.com/in/okborges"
            target="_blank"
            class="texto-azul"
            >Rafael Borges</a
          >
          , um Desenvolvedor e Web designer localizado em São Bernardo - SP, com
          uma grande paixão em simplificar problemas. Cursando Análise e
          Desenvolvimentos de Sistemas na UNINOVE.
        </p>
        <p class="sm:text-lg mb-8 md:pr-6">
          No meu tempo livre gosto de
          <a
            href="https://www.instagram.com/okborges/"
            target="_blank"
            class="texto-azul"
            >fotografar</a
          >, andar de patins e consumir arte.
        </p>
        <div class="flex mt-8 md:block">
          <button class="btn-projetos">
            <a href="#projetos" class="sm:text-lg font-semibold"
              >Ver projetos</a
            >
          </button>
          <button>
            <a
              href="https://wa.me/+5511983736528"
              target="_blank"
              class="sm:text-lg font-semibold p-8 cafe"
              >Cafezinho?</a
            >
          </button>
        </div>
      </section>
      <div>
        <img
          class="hidden md:block md:rounded-lg"
          src="/sitezao.webp"
          alt=""
          width="330"
        />
        <p class="text-center text-xs italic pt-5 hidden sm:block">
          Não é muito, mas é trabalho honesto
        </p>
      </div>
    </section>
    <AboutMe />
    <OqueFaco />
    <Projetos />
  </main>
</template>

<script>
import AboutMe from "./AboutMe.vue";
import OqueFaco from "./OqueFaco.vue";
import Projetos from "./Projetos.vue";
export default { components: { AboutMe, OqueFaco, Projetos } };
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

.texto-azul {
  color: #ff3d00;
  border-bottom: 1px solid #b9bcbd;
  cursor: pointer;
}

.texto-azul:hover {
  border-bottom: 1px solid #ff3d00;
}

.italico {
  font-family: "DM Serif Display";
  font-style: italic;
}
</style>

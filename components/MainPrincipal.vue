<template>
  <main class="py-12">
    <div class="flex max-w-6xl mx-auto justify-between items-center">
      <section class="md:w-7/12">
        <h1 class="text-white font-bold mb-6 text-3xl ms:text-4xl md:text-5xl">
          Oi, sou o Borges :)
        </h1>
        <p class="text-xl mb-6 md:pr-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          rerum voluptatum sit dicta, quia fuga quas repellat nisi, nam, quis id
          laborum tenetur aut et ipsam suscipit ipsum nemo assumenda.
        </p>
        <p class="mb-8 md:pr-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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

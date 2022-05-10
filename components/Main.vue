<template>
  <main class="py-12">
    <div class="flex max-w-6xl mx-auto justify-between items-center">
      <section class="w-7/12">
        <h1 class="text-5xl text-white font-bold mb-6">
          Oi, me chamo Borges :)
        </h1>
        <p class="text-xl mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          rerum voluptatum sit dicta, quia fuga quas repellat nisi, nam, quis id
          laborum tenetur aut et ipsam suscipit ipsum nemo assumenda.
        </p>
        <p class="mb-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div>
          <button class="btn-projetos">
            <a href="" class="text-lg font-semibold">Ver projetos</a>
          </button>
          <button>
            <a href="" class="text-lg font-semibold py-8 cafe">Cafezinho?</a>
          </button>
        </div>
      </section>
      <div class="tres"></div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
div.tres {
  width: 256px;
  height: 384px;
  border: 25px solid; /* As 4 bordas sólidas com 25px de espessura */
  border-color: #f00 #0f0 #00f #fc0; /* cores: topo, direita, inferior, esquerda */
}

.btn-projetos {
  background-color: #ff3d00;
  padding: 0.8rem 2rem;
  border-radius: 0.25rem;
  margin-right: 2.5rem;
}
.btn-projetos:hover {
  background-color: #dd2c00;
}

.cafe:hover {
  color: #dd2c00;
  transition-duration: 0.2s;
}
</style>

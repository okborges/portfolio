<template>
  <div class="max-w-5xl mx-auto">
    <div class="flex items-center justify-between pt-12">
      <a href="/" class="logo">Borges</a>
      <div class="nav space-x-4">
        <span>Sobre</span>
        <span>Projetos</span>
        <span>Contato</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  font-family: "DM Serif Display";
  font-style: italic;
  font-weight: 400;
  font-size: 36px;
  color: #ff3d00;
}
.logo:hover {
  color: #dd2c00;
  cursor: pointer;
}

.nav {
  font-weight: 500;
}

.nav:hover {
  cursor: pointer;
}
</style>

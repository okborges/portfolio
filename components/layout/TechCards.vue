<script setup>
defineProps({
  bg: String,
  title: String
});
</script>

<template>
  <li>
    <div class="bg"></div>
    <p>{{ title }}</p>
  </li>
</template>

<style lang="scss" scoped>
li {
  border-radius: 0.5rem;
  text-align: center;
  position: relative;
  .bg {
    position: absolute;
    inset: 0;
    border-radius: 0.5rem;
    background: v-bind('bg');
    z-index: 1;
    opacity: 0;
    transition: opacity 0.25s linear;
  }
  .bg:hover {
    opacity: 1;
  }
}
li:hover {
  box-shadow: 0 0.4375rem 2rem -0.125rem rgba(0, 0, 0, 0.68);
}
</style>

<template>
  <li>
    <div class="d1"></div>
    <div class="d2"></div>
    <div class="p-4">textooo</div>
  </li>
</template>

<script setup>
defineProps({
  d1: String,
  d2: String,
});
</script>

<style lang="scss" scoped>
li {
  border-radius: 8px;
  text-align: center;
  position: relative;
  .d2 {
    position: absolute;
    width: 20%;
    top: 0px;
    bottom: 0px;
    right: 0px;
  }
}
li:hover .d1::before {
  content: 'aaaaaa';
  width: 20%;
  height: 20%;
  background-color: v-bind('d1');
}
li:hover .d2::before {
  content: 'bbbbbbbb';
  width: 20%;
  height: 20%;
  background-color: v-bind('d2');
}
</style>

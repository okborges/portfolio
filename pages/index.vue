<template>
  <div class="px-8">
    <TheHeader />
    <MainPrincipal />
    <TheFooter />
  </div>
</template>

<script>
import MainPrincipal from "~/components/MainPrincipal.vue";
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
import AboutMe from "~/components/AboutMe.vue";
export default {
  name: "IndexPage",
  components: { MainPrincipal, TheHeader, TheFooter, AboutMe },
};
</script>

<style>
body {
  background-color: black;
  font-family: "DM Sans", sans-serif;
  color: #dfe3e4;
}
</style>

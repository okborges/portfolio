<template>
  <div>
    <div class="mx-8">
      <MainPrincipal />
    </div>

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
  font-family: "Inter", sans-serif;
  color: #dfe3e4;
}

</style>

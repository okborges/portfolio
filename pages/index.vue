<template>
  <div class="px-8">
    <TheHeader />
    <MainPrincipal />
    <TheFooter />
  </div>
</template>

<script>
import MainPrincipal from "~/components/MainPrincipal.vue";
import MainSecundaria from "~/components/MainSecundaria.vue";
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
export default {
  name: "IndexPage",
  components: { MainPrincipal, MainSecundaria, TheHeader, TheFooter },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap");
body {
  background-color: black;
  font-family: "DM Sans", sans-serif;
  color: #dfe3e4;
}
</style>

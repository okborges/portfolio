<template>
  <div class="px-8">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
export default {
  name: "default",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

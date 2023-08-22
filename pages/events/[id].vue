<template>
  <div>event id: {{ $route.params.id }}</div>
</template>

<script lang="ts">
export default {
  setup() {
    const route = useRoute();
    const nuxt = useNuxtApp();
    // console.log(route.params.id);
    console.log(nuxt);

    definePageMeta({
      layout: "custom" as any,
    });
    return {};
  },
};
</script>

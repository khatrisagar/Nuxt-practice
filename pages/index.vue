<template>
  <p>a-{{ apiData }}</p>
  <div>Index page</div>
  <p>{{ counter }}</p>
  <button @click="counter++">Update Count</button>

  <p>Count from pinia state= {{ store.count }}</p>
  <button @click="store.increment">Update Count</button>

  <h1>Image from assets</h1>
  <img src="@/assets/images/mountains.jpg" width="500px" alt="" />
  <h1>Image from public</h1>
  <img src="/images/mountains.jpg" width="500px" alt="" />
  <button @click="alert('msg')">Alert</button>
</template>

<script lang="ts">
import { useCounterStore } from "@/stores/my-store";
export default {
  async setup() {
    const store = useCounterStore();
    console.log("store", store.count);
    const { sayHello } = useUtils();
    sayHello();
    const { $alertMsg } = useNuxtApp();
    const counter = useCounter();
    const apiData: any = ref(null);
    // // definePageMeta({
    // //   middleware: "auth",
    // // });
    // const updateCounter = () => {
    //   counter++;
    // };

    // use fetch stop the app from execute next until data get
    // instead of that use useLazyFetch to get data
    apiData.value = await useLazyFetch("/api/hello", {
      transform: (filterData) => filterData.data,
    });
    return {
      alert: $alertMsg,
      counter,
      store,
      apiData,
      // updateCounter,
    };
  },
};
</script>

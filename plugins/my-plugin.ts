export default defineNuxtPlugin((nuxtApp) => {
  // return {
  //   provide: {
  //     alertMsg: (msg: string) => console.log(msg),
  //   },
  // };
  nuxtApp.hook("app:created", () => {
    console.log("Plugin added");
  });
});

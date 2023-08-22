// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  alias: {
    // "@": resolve(__dirname, "/"),
    // assets: "<rootDir>/assets",
  },
  css: ["~/assets/styles/main.css"],
  // https://nuxt.com/docs/api/configuration/nuxt-config
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt"],
});

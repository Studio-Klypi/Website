// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@pinia/nuxt",
  ],
  imports: {
    dirs: ["composables/**"],
  },
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
  },
  css: ["./tailwind.css"],
  colorMode: {
    classPrefix: "",
    classSuffix: "",
    preference: "system",
    fallback: "light",
    storageKey: "klypi-color-scheme",
  },
  runtimeConfig: {
    public: {
      api: {
        url: "",
      },
    },
  },
  compatibilityDate: "2025-07-15",
  vite: {
    optimizeDeps: {
      include: [
        "@vue/devtools-core",
        "@vue/devtools-kit",
      ],
    },
  },
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },
  eslint: {
    checker: true,
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
      },
    },
  },
  googleFonts: {
    families: {
      Inter: "100..900",
    },
  },
  i18n: {
    locales: [
      {
        name: "Français",
        code: "fr",
        iso: "fr-FR",
        file: "fr.json",
      },
    ],
    defaultLocale: "fr",
    strategy: "prefix_except_default",
  },
});

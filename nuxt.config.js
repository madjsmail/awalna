export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "awalna",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "a dictionary web app for our algerian Dialect algeria , relies on users contribution with the definition of words  "
      },
      {
        name: "format-detection",
        content: "telephone=no"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },
  target: "static",
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/style.css"],
  router: {
    linkExactActiveClass: "has-text-primary"
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    [
      "nuxt-buefy",
      {
        css: true,
        materialDesignIcons: true
      }
    ],
    // https://go.nuxtjs.dev/axios
    // "@nuxtjs/axios",
    "@tui-nuxt/editor",
    // "@nuxtjs/auth"
    { src: "@nuxtjs/axios", mode: "client" },
    { src: "@nuxtjs/auth", mode: "client" }
  ],
  tui: {
    editor: {}
  },
  serverMiddleware: [],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL || "http://localhost:8080" // here set your API url  process.env.BASE_URL ||
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  auth: {
    strategies: {
      // The strategies are ways that we want to implement our authentication with here we just use local strategy
      local: {
        tokenType: "token",
        // The name of our strategy
        // token: {
        //   // The token config
        //   property: "token", // The token property name that API will provide us when we log in
        //   global: true // This determines if the authentication token is automatically included in all custom axios requests.
        //   // required: true, // This option can be used to disable all token handling.
        //   // type: "Bearer" // Authorization header type to be used in axios requests.
        //   //  We don't use maxAge, because we provide expiry time for token from API
        // },
        user: {
          property: "user", // The user object that API will provide us when we log in
          autoFetch: false // if it was true will send a request to API to call the user endpoint
        },
        endpoints: {
          login: {
            url: "/api/auth/login",
            method: "post",
            propertyName: "token"
          }, // our endpoint for sending request to the API
          logout: false, //  we don't have an endpoint for our logout in our API and we just remove the token from localstorage
          user: {
            url: "/api/auth/user",
            method: "get",
            propertyName: "user" ///"data.attributes"
          } // our endpoint for getting data from the API
        }
      }
    }
  }
};

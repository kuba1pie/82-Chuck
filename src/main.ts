import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";

import App from "./App.vue";

import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

createApp(App)
  .use(createPinia())
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  .mount("#app");

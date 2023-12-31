import "./assets/css/fonts.css";
import "./assets/css/style.css";

import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";

createApp(App).use(store).mount("#app");

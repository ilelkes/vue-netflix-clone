import { createApp } from "vue";
import { createPinia } from "pinia";

import "animate.css";

import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.mount("#app");

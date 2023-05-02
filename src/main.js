import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";

import App from "./App.vue";
import router from "./router";

import "./assets/reset.css";
import { VueQueryPlugin } from "vue-query";
import Flutterwave from "flutterwave-vue3";

const app = createApp(App);

app.use(VueQueryPlugin);
app.use(Flutterwave);
app.use(createPinia());
app.use(router);

app.mount("#app");

// AXIOS defaults
axios.defaults.baseURL = "https://techcrunch.com/wp-json/wp/v2";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

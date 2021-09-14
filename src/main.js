import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";

const app = createApp(App);
app.use(store);
app.use(router);
app.config.globalProperties.$axios = axios;
app.mount("#app");

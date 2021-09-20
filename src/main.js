import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@/assets/main.css";
import AppHeader from "@/components/AppHeader.vue";

const app = createApp(App);
app.use(store);
app.use(router);
app.config.globalProperties.$axios = axios;
app.component("AppHeader", AppHeader);
app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { appAxios } from "./utils/appAxios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@/assets/main.css";
import AppHeader from "@/components/shared/AppHeader.vue";

const app = createApp(App);
app.use(store);
app.use(router);
app.config.globalProperties.$appAxios = appAxios;
app.component("AppHeader", AppHeader);
app.mount("#app");

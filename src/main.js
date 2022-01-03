import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createI18n } from "vue-i18n";
import messages from "@/i18n/messages";
import "./assets/tailwind.css";
import "./assets/global.css";
import { getCookie } from "./helpers/cookieHelpers";

const i18n = createI18n({
  legacy: false,
  locale: getCookie("lang") || "ua",
  fallbackLocale: "ua",
  messages,
});

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);

app.mount("#app");

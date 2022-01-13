import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "vue3-date-time-picker/dist/main.css";

createApp(App).use(router).mount("#app");

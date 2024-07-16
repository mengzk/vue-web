import "./main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import VConsole from "vconsole";

import App from "./App.vue";
import router from "./router/index";
import { deviceMotion } from "./modules/system/device";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

new VConsole(); // 测试

deviceMotion()
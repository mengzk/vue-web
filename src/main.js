import "./main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/index";

import "./utils/log";
import "./utils/scene";
import "./utils/device";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

app.config.errorHandler = (err, instance, info) => {
  // 向追踪服务报告错误
  console.warn("------> vue errorHandler");
  console.warn(err, instance, info);
};

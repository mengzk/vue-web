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

app.config.errorHandler = (err, instance, info) => {
  // 向追踪服务报告错误
  console.error("------> vue errorHandler");
  console.error(err, instance, info);
}

new VConsole(); // 测试

deviceMotion()
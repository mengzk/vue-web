import "./main.css";

import { createApp } from "vue";
// import { createPinia } from "pinia";
import VConsole from 'vconsole';

const vConsole = new VConsole();

// import vant from 'vant';
import 'vant/lib/index.css';

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
// app.use(createPinia());
app.use(router);

app.mount("#app");

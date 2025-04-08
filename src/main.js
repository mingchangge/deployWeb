import { createApp } from "vue";
import "./style.css";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

import router from "./router";
import store from "./store";
import App from "./App.vue";


const app = createApp(App);

app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(router);
app.use(store);


app.mount("#app");

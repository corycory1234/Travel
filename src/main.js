// 1. App實例
import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);
// createApp(App).mount('#app');

// 2. CSS引入
// import './style.css'
import './css/all.css'

// 3. BootStrap SCSS 引入
import "/node_modules/bootstrap/scss/bootstrap.scss";

// 4. Bootstrap ICON 引入
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

// 5. Bootstrap JS 引入
import "../node_modules/bootstrap/dist/js/bootstrap.js";

// 5. Axios 引入
import VueAxios from "vue-axios";
import axios from 'axios';

// 6. Swiper 引入
import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const swiper = new Swiper('.swiper', {
  modules: [Navigation],
});

// 7. Router 引入
import router from "./router/router";
app.use(router);

// 9. Pinia 引入
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

// 10. Loading 引入
import Loading from "vue3-loading-overlay";
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
app.component("Loading", Loading); // / 採用Component全域註冊, 因每個地方都用得到; 這樣一來任何元件檔 就不用再import一次

// 8. 掛載 app
app.mount("#app")
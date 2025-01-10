import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routers/index";
// import AOS from "aos";
import "aos/dist/aos.css";
const app = createApp(App);
app.use(router);
// app.use(AOS);
app.mount("#app");

createApp(App).use(router).mount("#app");

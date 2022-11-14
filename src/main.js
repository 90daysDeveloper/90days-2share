import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueSocialSharing from "vue-social-sharing";

const app = createApp(App);

app.use(router);
app.use(VueSocialSharing);

app.mount("#app");

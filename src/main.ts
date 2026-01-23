import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "go-view-worker/dist/style.css";
// @ts-ignore
import { initGoViewWorker } from "go-view-worker/init";

async function bootstrap() {
  const app = createApp(App);
  app.use(createPinia());

  app.use(router);
  initGoViewWorker(app);

  app.mount("#app");
}

bootstrap();

import { createApp, h } from "vue";
import { intlayer } from "vue-intlayer";
import { intlayerMarkdown } from "vue-intlayer/markdown";
import App from "./App.vue";
import { router } from "./routes";
import "./style.css";

const app = createApp(App);

// Add the router to the app
app.use(router);

app.use(intlayer);

app.use(intlayerMarkdown, {
  components: {
    h1: (props) =>
      h("h1", { style: { color: "orange" }, ...props }, props.children),
    ComponentDemo: () => h("div", { style: { background: "grey" } }, "DEMO"),
    bold: (props) => h("strong", props),
    code: (props) => h("code", props),
  },
});

// Mount the app
app.mount("#app");

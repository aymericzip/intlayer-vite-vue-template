import { createApp, h } from "vue";
import { installIntlayer } from "vue-intlayer";
import { installIntlayerMarkdown } from "vue-intlayer/markdown";
import App from "./App.vue";
import { router } from "./routes";
import "./style.css";

const app = createApp(App);

// Add the router to the app
app.use(router);

// Tell Intlayer to use md.render() whenever it needs to turn markdown into HTML
installIntlayerMarkdown(app, {
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

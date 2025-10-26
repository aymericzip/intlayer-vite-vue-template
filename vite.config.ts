import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { intlayer, intlayerProxy } from "vite-intlayer";

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), intlayer(), intlayerProxy()],
});

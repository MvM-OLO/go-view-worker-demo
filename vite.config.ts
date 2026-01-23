import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import postCssPxToRem from "postcss-pxtorem";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "#": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 14,
          propList: ["*"],
          selectorBlackList: ["norem"], // 过滤掉norem-开头的class，不进行rem转换
        }),
      ],
    },
  },
});

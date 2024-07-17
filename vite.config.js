import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import legacy from "@vitejs/plugin-legacy";

import pxToRem from "./pxtorem.config";

const isDev = process.env.NODE_ENV !== "production";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    legacy({
      targets: ["chrome < 60", "edge < 15"],
      modernPolyfills: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [pxToRem],
    },
  },
  server: {
    /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
    host: true, // host: "0.0.0.0"
    /** 端口号 */
    port: 8300,
    /** 是否自动打开浏览器 */
    open: false,
    /** 跨域设置允许 */
    cors: true,
    /** 端口被占用时，是否直接退出 */
    strictPort: false,
    proxy: {
      "/api": {
        target: "http://127.0.0.0:4000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    hmr: {
      overlay: false,
    },
  },
  // build: {
  //   outDir: "dist",
  //   assetsDir: "assets",
  //   minify: isDev ? false : "terser",
  //   sourcemap: isDev ? "inline" : false,
  //   target: "es2015",
  //   terserOptions: {
  //     compress: {
  //       drop_console: !isDev,
  //       drop_debugger: !isDev,
  //     },
  //   },
  // },
  // // 编译混淆器
  // esbuild: {
  //   target: "es2015",
  //   minify: false,
  //   jsxFactory: "h",
  //   jsxFragment: "Fragment"
  // },
});

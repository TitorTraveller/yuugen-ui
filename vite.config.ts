import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";
import path, { resolve } from 'path'
import { libInjectCss} from "vite-plugin-lib-inject-css"

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    libInjectCss(),
    dts({
      insertTypesEntry: false,
      tsconfigPath: resolve(__dirname, "tsconfig.app.json"),

    })
  ],
  resolve:{
    alias:{
      "yuugen-ui": path.resolve(__dirname, "lib/components/"),
    }
  },
  build: {
    copyPublicDir:false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: "yuugen-ui",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        chunkFileNames: 'chunks/[name].[hash].js',
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});

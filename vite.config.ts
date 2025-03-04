import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from 'path'
import { libInjectCss} from "vite-plugin-lib-inject-css"

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: ["lib"],
      outDir: "dist/types",
      entryRoot: "lib",
      insertTypesEntry: false,
      tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
    })
  ],
  build: {
    copyPublicDir:false,
    lib: {
      entry: resolve(__dirname, 'lib/components/index.tsx'),
      name: "yuugen-ui",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        dir: "dist",
        preserveModules:true,
        preserveModulesRoot:"lib",
        chunkFileNames: 'chunks/[name].[hash].js',
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
      }
    }
  },
  resolve:{
    alias:{
      "yuugen-ui/components": resolve(__dirname, "lib/components"),
    }
  },
});

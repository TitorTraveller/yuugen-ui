# 📦 yuugen UI

Main external component library for yuugen apps.

## 🚀 Main Specs

-   🔹 Built with [React Typescript](w) & [Material UI](w)
-   🔹 Bundled with [Vite](w)
-   🔹 Interactive documentation with [Storybook](w)
-   🔹 Plug and play library

## 📦 Installation

```sh
npm install yuugen-ui@latest
```

---

## 📂 Directories Structure

```bash
yuugen-ui/
│── lib/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.styles.ts
│   │   │   ├── Button.tsx
│   │   │   ├── index.tsx
│   ├── styles/
│   │   ├── theme.ts
│── .storybook/
│── vite.config.ts
│── tsconfig.app.json
│── package.json
```

---

## 🔧 Main Scripts Commands

```sh
npm run build     # Generates build on /dist folder
npm run storybook # Starts Storybook's server to visualize component suite
npm run build-storybook # Generates static storybook's folder to serve
```

---

## 🎨 Components and Styles Usage

### **Importing Components**

```tsx
import { Button } from "yuugen-ui/components/Button";

function App() {
	return (
		<>
			<Button variantStyle="primary" size="small">
				Click Me
			</Button>
		</>
	);
}

export default App;
```

---

### **Vite `vite.config.ts` settings declaration**

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";

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
		}),
	],
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, "lib/components/index.tsx"),
			name: "yuugen-ui",
			formats: ["es"],
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				dir: "dist",
				preserveModules: true,
				preserveModulesRoot: "lib",
				chunkFileNames: "chunks/[name].[hash].js",
				assetFileNames: "assets/[name][extname]",
				entryFileNames: "[name].js",
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
	resolve: {
		alias: {
			"yuugen-ui/components": resolve(__dirname, "lib/components"),
		},
	},
});
```

---

## 📘 Storybook Playground

Run this command to start Storybook local server to visualize/interact with components

```sh
npm run storybook
```

Go to `http://localhost:6006` to manually open Storybook's playground

---

## 👥 Contributors

-   [@TitorTraveller](https://github.com/TitorTraveller)

---

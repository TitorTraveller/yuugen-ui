#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Promt to request component name to user
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("📛 Component name: ", (componentName) => {
	if (!componentName) {
		console.log("❌ Error: Type a valid component name");
		rl.close();
		return;
	}

	// Folder and files routes
	const componentDir = path.join(__dirname, "../lib/components", componentName);
	const componentFile = path.join(componentDir, `${componentName}.tsx`);
	const stylesFile = path.join(componentDir, `${componentName}.styles.ts`);
	const storyFile = path.join(componentDir, `${componentName}.stories.tsx`);
	const indexFile = path.join(componentDir, `index.tsx`);

	// Comonents file templates
	const componentTemplate = `import React from "react";
import { styles } from "./${componentName}.styles";

interface ${componentName}Props {
	children: React.ReactNode;
}

function ${componentName}({ children, ...props }: ${componentName}Props) {
	return (
		<div {...props} sx={styles()}>
			{children}
		</div>
	);
}

export default ${componentName};`;

	const stylesTemplate = `import theme from "../../styles/theme";
import { CSSProperties } from "@mui/material/styles/createMixins";
export function styles(variant: "primary" | "secondary", size: "medium" | "small"): CSSProperties {

	const baseStyle: CSSProperties = {
	/*Component Base Styles*/
};

const variants = {
	/*Component Variants Styles*/
};

const sizes = {
  /*Component Sizes Styles */
};

return {
	...baseStyle,
	...variants[variant],
	...sizes[size]
};`;

	const storyTemplate = `import { Meta, StoryObj } from "@storybook/react";
import ComboSelection from "./ComboSelection";

const meta: Meta<typeof ComboSelection> = {
	title: "Components/ComboSelection",
	component: ComboSelection,
};
export default meta;

type Story = StoryObj<typeof ComboSelection>;
export const Default: Story = {
	args: {
		children: "This is a ComboSelection component",
	},
};`;

	const indexTemplate = `import ${componentName} from "./${componentName}";
export default ${componentName};`;

	// Create component folder
	if (!fs.existsSync(componentDir)) {
		fs.mkdirSync(componentDir, { recursive: true });
	}
	// Write files
	fs.writeFileSync(componentFile, componentTemplate);
	fs.writeFileSync(stylesFile, stylesTemplate);
	fs.writeFileSync(storyFile, storyTemplate);
	fs.writeFileSync(indexFile, indexTemplate);

	console.log(
		`\n✅ Component '${componentName}' created successfully!.\n🔎 Go to ${componentDir}\n to start working with your component 👌`
	);

	rl.close();
});

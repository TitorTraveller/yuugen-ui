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

function ${componentName}({ children }: ${componentName}Props) {
  return <div style={styles.container}>{children}</div>;
}

export default ${componentName};
  `;

	const stylesTemplate = `export const styles = {
  container: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
};
  `;

	const storyTemplate = `import { Meta, StoryObj } from "@storybook/react";
import ${componentName} from "./${componentName}";

const meta: Meta<typeof ${componentName}> = {
  title: "Components/${componentName}",
  component: ${componentName},
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: {
    children: "This is a ${componentName} component",
  },
};
  `;

	const indexTemplate = `import ${componentName} from "./${componentName}";
export default ${componentName};"`;

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
		`✅ Component '${componentName}' created successfully!. Check ${componentDir} route to work with your component 👌`
	);
	rl.close();
});

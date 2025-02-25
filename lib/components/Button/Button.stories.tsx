import Button from "./index";
import type { Meta, StoryObj } from "@storybook/react";
import ArrowDown from "@mui/icons-material/KeyboardArrowDown";
import InfoIcon from "@mui/icons-material/Info";
import CheckIcon from "@mui/icons-material/Check";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const iconOptions = {
	NoIcon: null,
	ArrowDown: <ArrowDown />,
	Info: <InfoIcon />,
	UploadFile: <UploadFileIcon />,
	Check: <CheckIcon />,
};

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	args: {
		leftIcon: iconOptions["ArrowDown"],
		rightIcon: iconOptions["ArrowDown"],
	},
	argTypes: {
		leftIcon: {
			control: "select",
			options: Object.keys(iconOptions),
			mapping: iconOptions,
		},
		rightIcon: {
			control: "select",
			options: Object.keys(iconOptions),
			mapping: iconOptions,
		},
		size: {
			control: "radio",
			options: ["medium", "small"],
		},
		iconButtonMode: {
			control: false,
			table: { disable: true },
		},
		sx: { table: { disable: true } },
		children: { table: { disable: true } },
		className: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		variantStyle: "primary",
		children: "Primary",
	},
	argTypes: {
		variantStyle: {
			control: "radio",
			options: ["primary", "primary-outline"],
		},
	},
};

export const Secondary: Story = {
	args: {
		variantStyle: "secondary",
		children: "Secondary",
	},
	argTypes: {
		variantStyle: {
			control: "radio",
			options: ["secondary", "secondary-outline"],
		},
	},
};

export const Transparent: Story = {
	args: {
		variantStyle: "transparent-primary",
		children: "Transparent",
	},
	argTypes: {
		variantStyle: {
			control: "radio",
			options: ["transparent-primary", "transparent-secondary"],
		},
	},
};

export const IconButton: Story = {
	args: {
		variantStyle: "primary",
		iconButtonMode: true,
	},
	argTypes: {
		iconButtonMode: {
			control: false,
			table: { disable: false },
		},
		variantStyle: {
			control: "select",
			options: [
				"primary",
				"primary-outline",
				"secondary",
				"secondary-outline",
				"transparent-primary",
				"transparent-secondary",
			],
		},
		rightIcon: { table: { disable: true } },
	},
};

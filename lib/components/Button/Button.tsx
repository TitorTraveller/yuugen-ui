import React from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "@mui/material/Button";
import { styles } from "./Button.styles";
interface CustomButtonProps extends ButtonProps {
	children: React.ReactNode;
	variantStyle?:
		| "primary"
		| "primary-outline"
		| "secondary"
		| "secondary-outline"
		| "transparent-primary"
		| "transparent-secondary";
	size?: "medium" | "small";
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	iconButtonMode?: boolean;
}

function CustomButton({
	children,
	variantStyle = "primary",
	size = "medium",
	leftIcon,
	rightIcon,
	iconButtonMode = false,
	...props
}: CustomButtonProps) {
	return (
		<Button {...props} sx={styles(variantStyle, size, iconButtonMode)}>
			{leftIcon && <span className="left-icon">{leftIcon}</span>}
			{!iconButtonMode && <span className="text-span">{children}</span>}
			{rightIcon && !iconButtonMode && <span className="right-icon">{rightIcon}</span>}
		</Button>
	);
}

export default CustomButton;

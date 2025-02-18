import React from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "@mui/material/Button";
import { withTheme } from "../../styles/withTheme";
import theme from "../../styles/theme";

interface CustomButtonProps extends ButtonProps {
	children: React.ReactNode;
}

function CustomButton({ children, ...props }: CustomButtonProps) {
	return (
		<Button
			{...props}
			sx={{
				backgroundColor: theme.palette.custom["blue-700"],
				border: `1px solid ${theme.palette.custom["blue-700"]}`,
				borderRadius: "4px",
				alignItems: "center",
			}}
		>
			{children}
		</Button>
	);
}

const ThemedCustomButton = withTheme(CustomButton) as React.FC<CustomButtonProps>;
ThemedCustomButton.displayName = "ThemedCustomButton";
export default ThemedCustomButton;

import React from "react";
import { button } from "./Button.css";

interface ButtonProps {
	label: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
	return (
		<button className={button} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;

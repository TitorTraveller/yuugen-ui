import { ThemeProvider } from "@mui/material";
import theme from "./theme";

export function withTheme<T extends object>(Component: React.ComponentType<T>) {
	return function ThemedComponent(props: T) {
		return (
			<ThemeProvider theme={theme}>
				<Component {...props} />
			</ThemeProvider>
		);
	};
}

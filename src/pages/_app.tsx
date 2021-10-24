import { CssBaseline, ThemeProvider } from "@mui/material";
import { StylesProvider } from "@mui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { theme } from "../theme";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function MyApp({ pageProps, Component }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<StyledThemeProvider theme={theme}>
				<StylesProvider injectFirst>
					<Component {...pageProps} />
				</StylesProvider>
			</StyledThemeProvider>
		</ThemeProvider>
	);
}

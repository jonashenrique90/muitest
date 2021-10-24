import { createTheme } from "@mui/material";

const HEADINGS_FONT_FAMILY = "'Quicksand', sans-serif";
const HEADINGS_FONT_WEIGHT = 600;
export const theme = createTheme({
	typography: {
		fontFamily: "'Encode Sans', sans-serif",
		h1: {
			fontSize: "4rem",
			fontWeight: HEADINGS_FONT_WEIGHT,
			"@media (max-width: 959.95px)": {
				fontSize: "3.25rem",
			},
			"@media (max-width: 695.95px)": {
				fontSize: "2.75rem",
			},
			fontFamily: HEADINGS_FONT_FAMILY,
		},
		h2: {
			fontSize: "3rem",
			fontWeight: HEADINGS_FONT_WEIGHT,
			"@media (max-width: 959.95px)": {
				fontSize: "2.25rem",
			},
			"@media (max-width: 695.95px)": {
				fontSize: "1.75rem",
			},
			fontFamily: HEADINGS_FONT_FAMILY,
		},
		h3: {
			fontSize: "1.75rem",
			fontWeight: HEADINGS_FONT_WEIGHT,
			fontFamily: HEADINGS_FONT_FAMILY,
		},
		h4: {
			fontSize: "1.5rem",
			fontWeight: HEADINGS_FONT_WEIGHT,
			fontFamily: HEADINGS_FONT_FAMILY,
		},
		h5: {
			fontSize: "1.25rem",
			fontWeight: HEADINGS_FONT_WEIGHT,
			fontFamily: HEADINGS_FONT_FAMILY,
		},
		h6: {
			fontSize: "1.125rem",
			fontWeight: HEADINGS_FONT_WEIGHT,
			fontFamily: HEADINGS_FONT_FAMILY,
		},
		subtitle1: {
			fontWeight: 600,
		},
		subtitle2: {
			fontWeight: 600,
		},
	},
	palette: {
		primary: {
			main: "#454E9E",
			contrastText: "#FFF",
		},
		secondary: {
			main: "#FFBF00",
			contrastText: "#000",
		},
		text: {
			// Minimum contrast ration o 7:1. It passes the AAA test for small font-size
			secondary: "rgba(0, 0, 0, 0.68)",
		},
		success: {
			main: "#35821C",
			contrastText: "#FFF",
		},
		warning: {
			main: "#FF1053",
			contrastText: "#FFF",
		},
		background: {
			default: "#FFF",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				sizeLarge: {
					padding: "0.688rem 2rem",
				},
				text: {
					padding: "6px 16px",
				},
				root: {
					fontWeight: "bold",
					fontSize: "1rem",
					textTransform: "none",
					borderRadius: ".5rem",
				},
				containedSizeLarge: {
					fontSize: "1rem",
				},
			},
		},
		MuiButtonGroup: {
			styleOverrides: {
				root: {
					borderRadius: ".5rem",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				rounded: {
					borderRadius: ".5rem",
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				colorDefault: {
					backgroundColor: "#FFF",
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					backgroundColor: "#FFF",
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				root: {
					backgroundColor: "#FFF",
				},
			},
		},
		MuiList: {
			styleOverrides: {
				root: {
					outline: "none !important",
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				paper: {
					margin: "2rem 0.25rem",
				},
				paperWidthXs: {
					// maxWidth: 'calc(100% - 2rem)',
					"@media (max-width: 695.95px)": {
						maxWidth: "calc(100% - 1rem) !important",
					},
				},
				paperWidthSm: {
					// maxWidth: 'calc(100% - 2rem)',
					"@media (max-width: 695.95px)": {
						maxWidth: "calc(100% - 2rem) !important",
					},
				},
			},
		},
		MuiDialogContent: {
			styleOverrides: {
				root: {
					overflow: "inherit !important",
				},
			},
		},
	},
});

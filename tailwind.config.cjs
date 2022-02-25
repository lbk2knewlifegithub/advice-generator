const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require("tailwindcss/plugin");
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1.5rem",
				sm: "2rem",
				lg: "4rem",
				xl: "8rem",
			},
		},
		boxShadow: {
			'3xl': '0 0px 60px hsl(150, 100%, 66%)',
			'4xl': '0 0px 60px rgba(0, 0, 0, 0.5)',
		},
		extend: {
			fontFamily: {
				'mono': ['', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				cyan: {
					DEFAULT: "hsl(193, 38%, 86%)",
					"50": "hsl(150, 100%, 66%)"
				},
				blue: {
					DEFAULT: "hsl(217, 19%, 38%)",
					"50": "hsl(217, 19%, 24%)"
				},
			}
		},
	},

	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				".container": {
					maxWidth: "1440px",
				},
			});
		}),
	]
};

module.exports = config;

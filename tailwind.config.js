/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,vue}"],
	theme: {
		extend: {
			colors: {
				"icon-clr": "#5C607E",
				"border-clr": "#353948",
				"bar-clr": "#242631",
				"primary-clr": "#1c1d26",
			},
		},
	},
	plugins: [],
};

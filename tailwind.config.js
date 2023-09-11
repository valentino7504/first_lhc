/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.html", "./static/css/src/*", "./static/js/*"],
  theme: {
    extend: {
		colors: {
			"pri": "#080E21",
			"sec": "#37474F",
			"ter": "#8B0000",
			"quad": "#CCCCCC"
		}
	},
  },
  plugins: [],
}

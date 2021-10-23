module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		// Some useful comment
		fontFamily: {
			sans: ['Fira Code', 'sans-serif'],
			serif: ['Kaisei Opti', 'serif'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}

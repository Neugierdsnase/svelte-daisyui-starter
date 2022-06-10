/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['dracula', 'winter']
	},
	plugins: [require('daisyui')]
};

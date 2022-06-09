/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				svelte: {
					primary: '#ff3e00',
					'primary-content': '#fcf7f8',
					secondary: '#0066cc',
					'secondary-content': '#fcf7f8',
					accent: '#ffe900',
					'accent-content': '#171a21',
					neutral: '#171a21',
					'base-100': '#ffffff',
					info: '#3abff8',
					success: '#5fad56',
					warning: '#fbbd23',
					error: '#c1292e'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};

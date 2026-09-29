/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
				mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
				sacramento: ['var(--font-sacramento)', 'cursive'],
			},
			colors: {
				'aqua-blue': '#65cccc',
				grey: '#222222',
				ink: '#0d1117',
				surface: '#161b22',
				line: '#2a313c',
			},
		},
	},
	plugins: [],
}

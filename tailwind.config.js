/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sacramento: ['var(--font-sacramento)'],
				prompt: ['var(--font-prompt)'],
				poppins: ['var(--font-poppins)'],
			},
			colors: {
				'aqua-blue': '#65cccc',
				grey: '#222222',
			},
			keyframes: {
				bounce: {
					'0%, 100%': {
						transform: 'translateY(-15%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
					},
					'50%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
					},
				},
			},
			animation: {
				bounce: 'bounce .3s linear',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}

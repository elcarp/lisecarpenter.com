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
			animationDelay: {
				50: '50ms',
				100: '100ms',
				150: '150ms',
				200: '200ms',
				250: '250ms',
				300: '300ms',
				350: '350ms',
				400: '400ms',
				450: '450ms',
				500: '500ms',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				'.animation-delay-50': {
					'animation-delay': '50ms',
				},
				'.animation-delay-100': {
					'animation-delay': '100ms',
				},
				'.animation-delay-150': {
					'animation-delay': '150ms',
				},
				'.animation-delay-200': {
					'animation-delay': '200ms',
				},
				'.animation-delay-250': {
					'animation-delay': '250ms',
				},
				'.animation-delay-300': {
					'animation-delay': '300ms',
				},
				'.animation-delay-350': {
					'animation-delay': '350ms',
				},
				'.animation-delay-400': {
					'animation-delay': '400ms',
				},
				'.animation-delay-450': {
					'animation-delay': '450ms',
				},
				'.animation-delay-500': {
					'animation-delay': '500ms',
				},
			}
			addUtilities(newUtilities)
		},
	],
}

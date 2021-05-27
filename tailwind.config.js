module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
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

import utilStyles from '../styles/utils.module.css'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faReact,
	faShopify,
	faWordpress,
} from '@fortawesome/free-brands-svg-icons'

export default function Tech() {
	const [isVisible, setVisible] = useState(true)

	return (
		<div className='tech-stack bg-grey py-20'>
			<h1 className={`${utilStyles.heading2Xl} pt-4 text-white text-center`}>
				Tech that I like
			</h1>
			<p>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faReact}
					width={20}
					className={`mx-auto pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
			</p>
			<h1 className={`${utilStyles.heading2Xl} pt-4 text-white text-center`}>
				Other things that I like
			</h1>
		</div>
	)
}

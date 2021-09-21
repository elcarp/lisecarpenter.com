import utilStyles from '../styles/utils.module.css'
import React, { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCss3,
	faHtml5,
	faJs,
	faMedium,
	faReact,
	faShopify,
	faWordpress,
} from '@fortawesome/free-brands-svg-icons'

export default function Tech() {
	const [isVisible] = useState(true)

	return (
		<div className='tech-stack bg-grey py-20'>
			<h1 className={`${utilStyles.heading2Xl} pt-4 text-white text-center`}>
				Tech that I like
			</h1>
			<div className='flex w-1/4 mx-auto'>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faWordpress}
					width={20}
					className={`mx-auto pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faShopify}
					width={20}
					className={`mx-auto pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faCss3}
					width={20}
					className={`mx-auto pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faReact}
					width={20}
					className={`mx-auto pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faHtml5}
					width={20}
					className={`mx-auto pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faJs}
					width={20}
					className={`mx-auto pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
			</div>
			<h1 className={`${utilStyles.heading2Xl} pt-4 text-white text-center`}>
				Other things that I like
			</h1>
			<div className='flex w-1/4 mx-auto'>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faMedium}
					width={20}
					className={`mx-auto pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
				<Image
					priority
					src='/images/yoga.svg'
					height={35}
					width={35}
					alt='yoga'
					className={`mx-auto pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
			</div>
		</div>
	)
}

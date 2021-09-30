import utilStyles from '../styles/utils.module.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCss3,
	faHtml5,
	faJs,
	faReact,
} from '@fortawesome/free-brands-svg-icons'
import {
	faBook,
	faCat,
	faOm,
	faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons'

export default function Tech() {
	const [isVisible] = useState(true)

	return (
		<div className='tech-stack bg-grey py-20'>
			<h1 className={`${utilStyles.heading2Xl} pt-4 text-white text-center`}>
				Tech that I like
			</h1>
			<div className='w-3/4 md:w-1/4 mx-auto text-center'>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faCss3}
					width={20}
					className={`inline-block mx-3 pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faReact}
					width={20}
					className={`inline-block mx-3 pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faHtml5}
					width={20}
					className={`inline-block mx-3 pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faJs}
					width={20}
					className={`inline-block mx-3 pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
			</div>
			<h1 className={`${utilStyles.heading2Xl} pt-4 text-white text-center`}>
				Other things that I like
			</h1>
			<div className='w-3/4 md:w-1/4 mx-auto text-center'>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faPizzaSlice}
					width={20}
					className={`inline-block mx-3 pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faCat}
					width={20}
					className={`inline-block mx-3 pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faBook}
					width={20}
					className={`inline-block mx-3 pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faOm}
					width={20}
					className={`inline-block mx-3 pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
			</div>
		</div>
	)
}

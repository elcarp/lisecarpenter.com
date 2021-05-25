import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import {
	faGooglePlusSquare,
	faShopify,
	faWordpress,
} from '@fortawesome/free-brands-svg-icons'
import {
	faFileCode,
	faPaintBrush,
	faServer,
} from '@fortawesome/free-solid-svg-icons'

export default function Skills() {
	const [isVisible, setVisible] = useState(true)
	const domRef = React.useRef()

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setVisible(entry.isIntersecting))
		})

		observer.observe(domRef.current)

		return () => observer.unobserve(domRef.current)
	}, [])

	return (
		<div className='skills w-full px-5 md:pr-20 py-20 md:w-1/2 grid grid-cols-2 z-50'>
			<div ref={domRef} className='skill-box px-4 text-center'>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faFileCode}
					width={20}
					className={`mx-auto pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-25 transition' : ''
					}`}
				/>
				I can code your site from scratch if you’d like. I’m fluent in HTML, CSS
				and pretty good with JavaScript/TypeScript on React framework.
			</div>
			<div ref={domRef} className='skill-box px-4 text-center'>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faPaintBrush}
					width={20}
					className={`mx-auto pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-25 transition' : ''
					}`}
				/>
				Need a design? I can help mock something up in Adobe Illustrator/
				Photoshop. I can also whip up a simple logo
			</div>
			<div ref={domRef} className='skill-box px-4 text-center'>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faGooglePlusSquare}
					width={20}
					className={`mx-auto pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
				Worried about SEO and inbound marketing? I can help with that too. I’ve
				had 5+ years experience as a Marketing Manager, specialising in digital
				and social media.
			</div>
			<div ref={domRef} className='skill-box px-4 text-center'>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faServer}
					width={20}
					className={`mx-auto pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-50 transition' : ''
					}`}
				/>
				Dealing with web hosts and domain names can be quite frustrating. I’ve
				worked with many of them, and can offer advice. I can also help with
				site migrations.
			</div>
			<div ref={domRef} className='skill-box px-4 text-center'>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faWordpress}
					width={20}
					className={`mx-auto pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-75 transition' : ''
					}`}
				/>
				One of the best things you can do for SEO and for your marketing is
				sharing content. I can help with copywriting and coming up with social
				media optimised blog post ideas.
			</div>
			<div ref={domRef} className='skill-box px-4 text-center'>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faShopify}
					width={20}
					className={`mx-auto pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-75 transition' : ''
					}`}
				/>
				I love creating online stores! I work with both WooCommerce (free) and
				Shopify (worth the monthly all-inclusive pricing) and will optimise your
				store for success.
			</div>
		</div>
	)
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import {
	faGooglePlusSquare,
	faShopify,
	faWordpress,
} from '@fortawesome/free-brands-svg-icons'
import {
	faCode,
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
		<div className='skills w-full px-5 md:pr-20 py-20 md:w-1/2 block md:grid md:grid-cols-2 z-50'>
			<div ref={domRef} className='skill-box px-4 text-center'>
				<FontAwesomeIcon
					color='#65cccc'
					icon={faCode}
					width={20}
					className={`mx-auto pt-6 pb-4 ${
						isVisible ? 'animate-bounce animation-delay-25 transition' : ''
					}`}
				/>
				<h2>Coding</h2>
				<p className='pt-2'>
					I prefer coding JavaScript/TypeScript on React framework, but have
					extensive experience working on sites on various CMS platorms
					(Wordpress, Shopify, Webflow, etc.). Happy to discuss your project's
					needs and recommend something based on my experience.
				</p>
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
				<h2>Design</h2>
				<p className='pt-2'>
					While I can whip up simple designs, I'm also able to recommend a
					number of designer contacts with whom I've worked closely, depending
					on your needs and budgetary requirements.
				</p>
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
				<h2>Inbound Marketing</h2>
				<p className='pt-2'>
					I’ve had 5+ years experience as a Marketing Manager, specialising in
					digital and social media. While I don't do any freelance marketing
					work, I can set you up with good practices for SEO and inbound
					marketing.
				</p>
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
				<h2>Webhosting</h2>
				<p className='pt-2'>
					Dealing with web hosts and domain names can be quite frustrating. I’ve
					worked with many of them, and can offer advice. I can advise or manage
					site migrations as needed.
				</p>
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
				<h2>Copywriting</h2>
				<p className='pt-2'>
					One of the best things you can do for SEO, and for your marketing, is
					sharing content. I can offer copywriting ideas and help come up with
					social media optimised blog post ideas.
				</p>
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
				<h2>E-Commerce</h2>
				<p className='pt-2'>
					I work with both WooCommerce (free) and Shopify (worth the monthly
					all-inclusive pricing) and can help optimize your store for success.
				</p>
			</div>
		</div>
	)
}

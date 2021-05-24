import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Hero from './hero.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

const name = 'Lise Carpenter'
export const siteTitle =
	'Lise Carpenter - Freelance Web Developer Hong Kong, Bangkok'

export default function Layout({ children, home }) {
	return (
		<div>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Learn how to build a personal website using Next.js'
				/>
				<meta
					property='og:image'
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name='og:title' content={siteTitle} />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<header
				className={`fixed w-full text-white z-50 justify-between flex justify-between p-4`}>
				<div className='logo flex justify-center items-center border border-aqua-blue rounded-full p-4'>
					<h3 className='leading-none text-xl -mb-1 text-aqua-blue'>L</h3>
				</div>
				<div> </div>
			</header>
			{home ? (
				<>
					<Hero />
					<div className='about-me w-full bg-grey py-20 text-white px-5 md:px-20 block md:flex'>
						<div className='w-full md:w-1/2 px-4'>
							<h1 className={`${utilStyles.heading2Xl} pb-4`}>
								Profile & Background
							</h1>
							<Image
								priority
								src='/images/profile.jpg'
								className={utilStyles.borderCircle}
								height={144}
								width={144}
								alt={name}
							/>
							<p className='pt-4'>
								I have a background in financial services, but my love of code
								led me to work at a startup tech academy, where I re-sharpened
								some skills and began completing web design and development
								projects. I enjoy working with my clients to design and launch
								simple, beautiful and mobile responsive websites and e-commerce
								shops.
							</p>
							<h1 className={`${utilStyles.heading2Xl} pt-4`}>Etcetera</h1>
							<p>
								I’m American/Thai, based in Hong Kong and Bangkok since 6 years.
								Most of the time, however, I work remotely. I speak English,
								Thai and French. Passionate about practicing yoga (certified RYT
								200 teacher – check out my yoga site here!) and traveling the
								world.
							</p>
						</div>
						<div className='w-full px-4 md:w-1/2 grid grid-cols-2'>
							<div className='skill-box px-4 text-center'>
								<FontAwesomeIcon
									icon={faFileCode}
									width={20}
									className='mx-auto py-4'
								/>
								I can code your site from scratch if you’d like. I’m fluent in
								HTML, CSS and pretty good with JavaScript/TypeScript on React
								framework.
							</div>
							<div className='skill-box px-4 text-center'>
								<FontAwesomeIcon
									icon={faPaintBrush}
									width={20}
									className='mx-auto py-4'
								/>
								Need a design? I can help mock something up in Adobe
								Illustrator/ Photoshop. I can also whip up a simple logo
							</div>
							<div className='skill-box px-4 text-center'>
								<FontAwesomeIcon
									icon={faGooglePlusSquare}
									width={20}
									className='mx-auto py-4'
								/>
								Worried about SEO and inbound marketing? I can help with that
								too. I’ve had 5+ years experience as a Marketing Manager,
								specialising in digital and social media.
							</div>
							<div className='skill-box px-4 text-center'>
								<FontAwesomeIcon
									icon={faServer}
									width={20}
									className='mx-auto py-4'
								/>
								Dealing with web hosts and domain names can be quite
								frustrating. I’ve worked with many of them, and can offer
								advice. I can also help with site migrations.
							</div>
							<div className='skill-box px-4 text-center'>
								<FontAwesomeIcon
									icon={faWordpress}
									width={20}
									className='mx-auto py-4'
								/>
								One of the best things you can do for SEO and for your marketing
								is sharing content. I can help with copywriting and coming up
								with social media optimised blog post ideas.
							</div>
							<div className='skill-box px-4 text-center'>
								<FontAwesomeIcon
									icon={faShopify}
									width={20}
									className='mx-auto py-4'
								/>
								I love creating online stores! I work with both WooCommerce
								(free) and Shopify (worth the monthly all-inclusive pricing) and
								will optimise your store for success.
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<Link href='/'>
						<a>
							<Image
								priority
								src='/images/profile.jpg'
								className={utilStyles.borderCircle}
								height={108}
								width={108}
								alt={name}
							/>
						</a>
					</Link>
					<h2 className={utilStyles.headingLg}>
						<Link href='/'>
							<a className={utilStyles.colorInherit}>{name}</a>
						</Link>
					</h2>
				</>
			)}
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href='/'>
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	)
}

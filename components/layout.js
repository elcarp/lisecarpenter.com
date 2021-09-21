import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Hero from './hero.js'
import Skills from './skills'
import About from './about'
import Tech from './tech'
import { InlineWidget } from 'react-calendly'

const name = 'Lise Carpenter'
export const siteTitle =
	'Lise Carpenter - Freelance Web Developer Hong Kong, Bangkok'

export default function Layout({ children, home }) {
	return (
		<div>
			<Head>
				<link rel='icon' href='/lc-favicon.png' />
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
				className={`fixed w-full text-white z-50 justify-between flex p-4`}>
				<div className='logo flex justify-center items-center border border-aqua-blue rounded-full p-4'>
					<h3 className='leading-none text-xl -mb-1 text-aqua-blue'>L</h3>
				</div>
			</header>
			{home ? (
				<>
					<Hero />
					<Tech />
					<div className='about-me w-full text-white'>
						<div className='about-overlay block md:flex'>
							<About />
							<Skills />
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
			{/* hiding blog posts for now */}
			{/* <main>{children}</main> */}
			{!home && (
				<div className={styles.backToHome}>
					<Link href='/'>
						<a>← Back to home</a>
					</Link>
				</div>
			)}
			<h1 className='text-white pt-20 pb-4 text-center'>Let's chat!</h1>
			<p className='w-1/2 mx-auto text-white text-center'>
				Set up a time for us to speak using a widget below.
			</p>
			<p className='w-1/2 mx-auto text-white text-center pb-10'>
				Are we in different timezones? Please feel free to email me at
				<strong className='underline'> lise.carpenter@gmail.com</strong>
			</p>
			<InlineWidget url='https://calendly.com/lise-carpenter' />
		</div>
	)
}

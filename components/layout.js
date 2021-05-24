import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import ReactTypingEffect from 'react-typing-effect'

const name = 'Lise Carpenter'
export const siteTitle = 'Next.js Sample Website'

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
			<header className={styles.header}></header>
			{home ? (
				<>
					<div className='hero flex items-center h-full '>
						<div className='overlay z-25 bg-black absolute w-full h-full opacity-50'></div>
						<div className='hero-content z-50 text-white md:pl-20 w-full absolute'>
							<h1 className='hover:text-aqua-blue'>Hi, I'm Lise Carpenter</h1>
							<ReactTypingEffect
								speed={100}
								typingDelay={100}
								className='tracking-widest text-sm text-aqua-blue'
								text={[
									'function showSubTitle() { (<>"Your friend who likes to code"</>) }',
								]}
							/>
						</div>
					</div>
					<Image
						priority
						src='/images/profile.jpg'
						className={utilStyles.borderCircle}
						height={144}
						width={144}
						alt={name}
					/>
					<h1 className={utilStyles.heading2Xl}>{name}</h1>
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

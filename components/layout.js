import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

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
					<div className='hero'>
						<div className='overlay z-25 bg-black absolute w-full h-full opacity-25'></div>
						<div className='hero-content z-50 text-white flex items-center h-full md:pl-20 w-full absolute'>
							<h1>This is lise, your friend who likes to code</h1>
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

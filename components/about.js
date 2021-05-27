import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

export default function About() {
	return (
		<div className='w-full md:w-1/2 px-5 md:pl-20 py-20 z-50'>
			<h1 className={`${utilStyles.heading2Xl} pb-4`}>Profile & Background</h1>
			<Image
				priority
				src='/images/profile.jpg'
				className={utilStyles.borderCircle}
				height={144}
				width={144}
				alt='Lise Carpenter'
			/>
			<p className='pt-4'>
				I started my career in financial services over a decade ago, but my love
				of code led me to work at a startup tech academy. I learned some new
				skills, and began completing web design and development projects on my
				own. I'm currently working in fintech as a frontend web developer,
				mostly coding react and elixir projects. On a freelance basis, I enjoy
				working with my clients to design and launch simple, beautiful and
				mobile responsive websites and e-commerce shops.
			</p>
			<h1 className={`${utilStyles.heading2Xl} pt-4`}>Etcetera</h1>
			<p>
				I’m American/Thai, based in Hong Kong and Bangkok since 6 years. Most of
				the time, however, I work remotely. I speak English, Thai and French.
				Passionate about practicing yoga (certified RYT 200 teacher – check out
				my yoga site here!) and traveling the world.
			</p>
		</div>
	)
}

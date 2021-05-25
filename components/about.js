export default function About() {
	return (
		<div className='w-full md:w-1/2 px-5 md:px-20 py-20 z-50'>
			<h1 className={`${utilStyles.heading2Xl} pb-4`}>Profile & Background</h1>
			<Image
				priority
				src='/images/profile.jpg'
				className={utilStyles.borderCircle}
				height={144}
				width={144}
				alt={name}
			/>
			<p className='pt-4'>
				I have a background in financial services, but my love of code led me to
				work at a startup tech academy, where I re-sharpened some skills and
				began completing web design and development projects. I enjoy working
				with my clients to design and launch simple, beautiful and mobile
				responsive websites and e-commerce shops.
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

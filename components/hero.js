import ReactTypingEffect from 'react-typing-effect'

export default function Hero() {
	return (
		<div className='hero flex items-center h-full'>
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
	)
}

import { FunctionComponent } from 'react'
import { TypeAnimation } from 'react-type-animation'

const Hero: FunctionComponent<any> = () => {
  return (
    <div className='hero flex items-center h-full'>
      <div className='overlay z-25 bg-black absolute w-full h-full opacity-50'></div>
      <div className='hero-content z-50 text-white md:pl-20 w-full absolute'>
        <h1 className='hover:text-aqua-blue editable'>
          Hi, I'm Lise Carpenter
        </h1>
        <div className='pt-5 pb-8'>
          <TypeAnimation
            sequence={[
              `Let's discuss your tech project`,
              1000,
              `Let's discuss your website requirements`,
              1000,
              `Let's discuss the best pizza places around the world`,
              1000,
            ]}
            wrapper='span'
            speed={50}
            style={{ fontSize: '1rem', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <button className='bg-aqua-blue px-4 py-2 rounded-lg border border-aqua-blue hover:bg-transparent hover:text-aqua-blue animate-pulse'>
          Let's chat
        </button>
      </div>
    </div>
  )
}

export default Hero

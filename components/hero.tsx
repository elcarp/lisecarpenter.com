import { FunctionComponent } from 'react'
import { TypeAnimation } from 'react-type-animation'

const Hero: FunctionComponent<any> = () => {
  return (
    <div className='hero flex items-center h-full'>
      <div className='overlay z-25 bg-black absolute w-full h-full opacity-50'></div>
      <div className='hero-content z-50 text-white md:pl-20 w-full absolute'>
        <h1 className='hover:text-aqua-blue editable'>
          Websites that work as hard as you do
        </h1>
        <div className='pt-5 pb-8'>
          <TypeAnimation
            sequence={[
              `Turn visitors into customers`,
              2000,
              `Launch your online store`,
              2000,
              `Stand out from competitors`,
              2000,
              `Grow your business online`,
              2000,
            ]}
            wrapper='span'
            speed={50}
            style={{ fontSize: '1rem', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <a
          href='#contact'
          className='bg-aqua-blue visited:text-white text-white hover:no-underline px-4 py-2 rounded-lg border border-aqua-blue hover:bg-transparent hover:text-aqua-blue animate-pulse'>
          Start your project
        </a>
      </div>
    </div>
  )
}

export default Hero

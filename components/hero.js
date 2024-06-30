import ReactTypingEffect from 'react-typing-effect'
import { openPopupWidget } from 'react-calendly'

export default function Hero() {
  const CustomButton = ({
    url = 'https://calendly.com/lise-carpenter',
    prefill,
    pageSettings,
    utm,
  }) => {
    const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm })

    return (
      <button onClick={onClick} className='btn shiny'>
        Let's Chat
      </button>
    )
  }
  return (
    <div className='hero flex items-center h-full'>
      <div className='overlay z-25 bg-black absolute w-full h-full opacity-50'></div>
      <div className='hero-content z-50 text-white md:pl-20 w-full absolute'>
        <h1 className='hover:text-aqua-blue editable'>
          Hi, I'm Lise Carpenter
        </h1>
        <div className='pt-5 pb-8'>
          <ReactTypingEffect
            speed={100}
            typingDelay={100}
            className='tracking-widest text-sm text-aqua-blue'
            text={['Let' + "'" + 's discuss' + ' your tech project 😊']}
          />
        </div>
        <CustomButton />
      </div>
    </div>
  )
}

import { FunctionComponent } from 'react'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

const About: FunctionComponent = () => {
  return (
    <div className='w-full md:w-1/2 px-5 md:pl-20 py-20 z-50'>
      <h1 className={`${utilStyles.heading2Xl} pb-4`}>Hi, I'm Lise</h1>
      <Image
        priority
        src='/images/profile.jpg'
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt='Lise Carpenter'
      />
      <p className='pt-4'>
        I help business owners like you get online with websites that actually
        deliver results. With over a decade of experience in financial services
        and tech startups, I understand what it takes to build trust and convert
        visitors into paying customers. Whether you need a stunning portfolio,
        a lead-generating business site, or an e-commerce store ready to sell—
        I'll create something that looks beautiful and works flawlessly on every device.
      </p>
      <h1 className={`${utilStyles.heading2Xl} pt-4`}>Working with me</h1>
      <p>
        Based in Hong Kong and Bangkok, I work with clients worldwide. I speak
        English, Thai and French. You'll get clear communication, realistic
        timelines, and a website you're proud to share. No tech jargon, no
        endless revisions—just a smooth process from first call to launch day.
      </p>
    </div>
  )
}

export default About
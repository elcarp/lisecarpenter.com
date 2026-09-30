import { FunctionComponent } from 'react'
import Image from 'next/image'

const About: FunctionComponent = () => {
  return (
    <div className='mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[auto_1fr]'>
      <Image
        src='/images/profile.jpg'
        className='rounded-full border border-line'
        height={160}
        width={160}
        alt='Lise Carpenter'
      />
      <div className='max-w-3xl text-gray-300'>
        <p className='eyebrow pb-3'>About</p>
        <h2 className='pb-6 text-white'>Hi, I&apos;m Lise</h2>
        <p>
          I&apos;m an AI engineer with a full-stack web background and over a
          decade in financial services and tech startups. I&apos;ve spent my
          career shipping software for real users, and now I bring that
          experience to AI: I build the retrieval pipelines, agents and evals
          that turn a promising demo into something your business can depend
          on.
        </p>
        <p className='pt-4'>
          Coming from fintech, I care about accuracy, privacy and cost as much
          as the model itself. I&apos;ll tell you plainly when AI is the right
          tool and when a simpler solution will do.
        </p>
        <h3 className='pt-8 text-white'>Working with me</h3>
        <p className='pt-2'>
          I&apos;m based in Hong Kong and Bangkok, work with clients worldwide,
          and speak English, Thai and French. Engagements usually start with a
          short scoping call, then a focused prototype, so you can see real
          results before committing to a full build.
        </p>
      </div>
    </div>
  )
}

export default About

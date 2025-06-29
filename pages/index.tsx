import { NextPage } from 'next'
import Head from 'next/head'
import { Sacramento, Prompt, Poppins } from 'next/font/google'
import Hero from '@/components/hero'
import Tech from '@/components/tech'
import About from '@/components/about'
import Skills from '@/components/skills'

const sacramento = Sacramento({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sacramento',
})

const prompt = Prompt({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-prompt',
})

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const siteTitle =
  'Lise Carpenter - Freelance Web Developer & Designer | React, Shopify, WordPress in Hong Kong, Bangkok'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel='icon' href='/lc-favicon.png' />
        <meta
          name='description'
          content="Freelance web developer & designer with fintech and startup experience. Specializing in React, JavaScript, Shopify, and WordPress. I create mobile-friendly, SEO-optimized websites and e-commerce stores. Let's discuss your project today!"
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <title>{siteTitle}</title>
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <main className={`${sacramento.variable} ${prompt.variable} ${poppins.variable}`}>
        <section>
          <Hero />
        </section>
        <section>
          <Tech />
        </section>
        <section>
          <div className='about-me w-full text-white'>
            <div className='about-overlay block md:flex'>
              <About />
              <Skills />
            </div>
          </div>
        </section>
        <section className='pb-20' id='contact'>
          <h1 className='text-white pt-20 pb-4 text-center'>Let's chat!</h1>
          <div className='w-full lg:w-1/3 px-5 mx-auto text-center'>
            <form
              action='https://public.herotofu.com/v1/8e2e9d80-36a8-11ef-b65d-f35c9518deb4'
              method='post'
              acceptCharset='UTF-8'>
              <div className='p-2 w-full'>
                <input
                  className='p-2 rounded-lg w-full'
                  name='Name'
                  id='name'
                  type='text'
                  required
                  placeholder='Your name'
                />
              </div>
              <div className='p-2 w-full'>
                <input
                  className='p-2 rounded-lg w-full'
                  name='Email'
                  id='email'
                  type='email'
                  required
                  placeholder='Your email'
                />
              </div>
              <div className='p-2 w-full'>
                <textarea
                  className='p-2 rounded-lg w-full'
                  name='Message'
                  id='message'
                  required
                  placeholder='Your message'
                />
              </div>
              <div>
                <input
                  className='bg-aqua-blue text-white w-full mt-10 px-4 py-2 rounded-lg border border-aqua-blue hover:bg-transparent hover:text-aqua-blue animate-pulse'
                  type='submit'
                  value='Get in touch'
                />
                <div
                  style={{
                    textIndent: '-99999px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    position: 'absolute',
                  }}
                  aria-hidden='true'>
                  <input
                    type='text'
                    name='_gotcha'
                    tabIndex={-1}
                    autoComplete='off'
                  />
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home

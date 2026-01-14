import { NextPage } from 'next'
import Head from 'next/head'
import Hero from '@/components/hero'
import Tech from '@/components/tech'
import About from '@/components/about'
import Skills from '@/components/skills'
import Work from '@/components/work'

export const siteTitle =
  'Lise Carpenter - Web Developer & Designer | Websites That Grow Your Business'

const siteDescription =
  "I help businesses launch beautiful, high-converting websites and e-commerce stores. Get a mobile-friendly, SEO-optimized site that attracts customers and drives sales. From startups to established brands—let's build something great together."

const siteUrl = 'https://lisecarpenter.com'
const ogImage = `${siteUrl}/og-image.png`

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lise Carpenter',
  url: siteUrl,
  jobTitle: 'Web Developer & Designer',
  description: siteDescription,
  knowsAbout: ['Web Development', 'Web Design', 'E-Commerce', 'SEO', 'React', 'Shopify', 'WordPress'],
  sameAs: [
    // Add your social media URLs here
    // 'https://linkedin.com/in/yourprofile',
    // 'https://github.com/yourprofile',
  ],
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{siteTitle}</title>
        <meta name='description' content={siteDescription} />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href={siteUrl} />
        <link rel='icon' href='/lc-favicon.png' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={siteUrl} />
        <meta property='og:title' content={siteTitle} />
        <meta property='og:description' content={siteDescription} />
        <meta property='og:image' content={ogImage} />
        <meta property='og:site_name' content='Lise Carpenter' />
        <meta property='og:locale' content='en_US' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:url' content={siteUrl} />
        <meta name='twitter:title' content={siteTitle} />
        <meta name='twitter:description' content={siteDescription} />
        <meta name='twitter:image' content={ogImage} />
        {/* <meta name='twitter:site' content='@yourtwitterhandle' /> */}
        {/* <meta name='twitter:creator' content='@yourtwitterhandle' /> */}

        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main>
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
        <section>
          <Work />
        </section>
        <section className='pb-20' id='contact'>
          <h1 className='text-white pt-20 pb-4 text-center'>Ready to grow your business online?</h1>
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

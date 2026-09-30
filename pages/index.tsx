import { NextPage } from 'next'
import Head from 'next/head'
import Hero from '@/components/hero'
import Tech from '@/components/tech'
import About from '@/components/about'
import Skills from '@/components/skills'
import Work from '@/components/work'
import Nav, { githubUrl, linkedinUrl } from '@/components/nav'

export const siteTitle =
  'Lise Carpenter - AI Engineer | LLM Apps, RAG & AI Agents for Business'

const siteDescription =
  'Freelance AI engineer helping businesses ship reliable AI: LLM-powered apps, RAG over your own data, AI agents that automate workflows, and evals that prove it works. Based in Hong Kong and Bangkok, working worldwide.'

const inputClass =
  'w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-aqua-blue focus:outline-none'

const siteUrl = 'https://lisecarpenter.com'
const ogImage = `${siteUrl}/og-image.png`

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lise Carpenter',
  url: siteUrl,
  jobTitle: 'AI Engineer',
  description: siteDescription,
  knowsAbout: [
    'Artificial Intelligence',
    'Large Language Models',
    'Retrieval-Augmented Generation',
    'AI Agents',
    'LLM Evaluation',
    'Python',
    'TypeScript',
    'Next.js',
  ],
  sameAs: [githubUrl, linkedinUrl],
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
      <Nav />
      <main id='top' className='text-white'>
        <section>
          <Hero />
        </section>
        <section id='services' className='scroll-mt-16'>
          <Skills />
        </section>
        <section>
          <Tech />
        </section>
        <section id='work' className='scroll-mt-16'>
          <Work />
        </section>
        <section id='about' className='scroll-mt-16 border-t border-line'>
          <About />
        </section>
        <section id='contact' className='scroll-mt-16 border-t border-line hero-grid'>
          <div className='mx-auto max-w-xl px-5 py-24'>
            <p className='eyebrow pb-3 text-center'>Contact</p>
            <h2 className='text-center'>Have an AI idea or problem?</h2>
            <p className='pt-4 text-center text-gray-400'>
              Tell me what you&apos;re trying to do. I&apos;ll reply within two
              business days, and the first call is free.
            </p>
            <form
              className='space-y-4 pt-10'
              action='https://public.herotofu.com/v1/8e2e9d80-36a8-11ef-b65d-f35c9518deb4'
              method='post'
              acceptCharset='UTF-8'>
              <input
                className={inputClass}
                name='Name'
                id='name'
                type='text'
                required
                placeholder='Your name'
                aria-label='Your name'
              />
              <input
                className={inputClass}
                name='Email'
                id='email'
                type='email'
                required
                placeholder='Your email'
                aria-label='Your email'
              />
              <textarea
                className={`${inputClass} min-h-[140px]`}
                name='Message'
                id='message'
                required
                placeholder='What would you like AI to do for your business?'
                aria-label='Your message'
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
              <button type='submit' className='btn-primary w-full justify-center'>
                Get in touch
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className='border-t border-line py-8 text-center text-xs text-gray-500'>
        © {new Date().getFullYear()} Lise Carpenter ·{' '}
        <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
          GitHub
        </a>{' '}
        ·{' '}
        <a href={linkedinUrl} target='_blank' rel='noopener noreferrer'>
          LinkedIn
        </a>
      </footer>
    </>
  )
}

export default Home

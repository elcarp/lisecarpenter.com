import { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const githubUrl = 'https://github.com/elcarp'
export const linkedinUrl = 'https://www.linkedin.com/in/lise-carpenter-0773558/'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
]

const Nav: FunctionComponent = () => {
  return (
    <header className='sticky top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-5 py-3'>
        <a
          href='#top'
          className='whitespace-nowrap font-sacramento text-2xl text-white sm:text-3xl hover:text-aqua-blue hover:no-underline'>
          Lise Carpenter
        </a>
        <div className='flex items-center gap-4 text-sm sm:gap-5'>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='hidden text-gray-300 hover:text-white hover:no-underline sm:inline'>
              {link.label}
            </a>
          ))}
          <a
            href={githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='text-gray-300 hover:text-white'>
            <FontAwesomeIcon icon={faGithub} className='h-5 w-5' />
          </a>
          <a
            href={linkedinUrl}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='text-gray-300 hover:text-white'>
            <FontAwesomeIcon icon={faLinkedin} className='h-5 w-5' />
          </a>
          <a href='#contact' className='btn-primary whitespace-nowrap !px-4 !py-1.5'>
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Nav

import type { AppProps } from 'next/app'
import { Sacramento, Prompt, Poppins } from 'next/font/google'
import '../styles/global.css'

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${sacramento.variable} ${prompt.variable} ${poppins.variable}`}>
      <Component {...pageProps} />
    </div>
  )
} 
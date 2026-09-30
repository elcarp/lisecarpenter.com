import type { AppProps } from 'next/app'
import { Sacramento, Inter, JetBrains_Mono } from 'next/font/google'
import '../styles/global.css'

const sacramento = Sacramento({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sacramento',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${sacramento.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}

import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/NavBar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'Neko Anime',
  description: 'Website Anime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true} >
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Neko Anime',
  description: 'Website Anime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {`${inter.className} bg-color-dark`} suppressHydrationWarning={true} >
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

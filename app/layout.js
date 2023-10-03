
import './globals.css'
import { Raleway } from 'next/font/google'
import Navbar from './components/Navbar'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'UPA',
  description: 'La radio que crece contigo',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={raleway.className}>
        {children}
      </body>
    </html>
  )
}

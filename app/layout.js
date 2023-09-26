import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UPA',
  description: 'La radio que crece contigo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href="/"><h1>UPA</h1></Link>
          <Link href="/streaming">Radio en línea</Link>
          <Link href="/podcasts">Podcasts</Link>
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/nosotros">Nosotros</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}

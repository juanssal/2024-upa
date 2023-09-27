import './globals.css'
import { Raleway } from 'next/font/google'
import Navbar from './components/Navbar'

// Redux stuff
import { store } from "./redux/app/store.js"
import { Provider } from 'react-redux'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'UPA',
  description: 'La radio que crece contigo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        <Provider store={store}>
        {children}
        </Provider>
        
      </body>
    </html>
  )
}

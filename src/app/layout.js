'use client'
import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AgroHouse',
  description: 'Aplicación web para dar a conocer los productos del campo colombiano.',
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Provider store={store}>
          <NavBar />
          {children}
        </Provider>
        <Footer />
      </body>
    </html>
  )
}

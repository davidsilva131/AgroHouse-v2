import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AgroHouse',
  description: 'Aplicación web para dar a conocer los productos del campo colombiano.',
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

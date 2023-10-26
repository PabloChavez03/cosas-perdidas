import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './components/widgets/header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cosas perdidas',
  description: 'Será aquí el lugar donde encontraras lo que buscas?'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`bg-gray-900 ${inter.className}`}>
        <>
          <Header />
          {children}
        </>
        </body>
    </html>
  )
}

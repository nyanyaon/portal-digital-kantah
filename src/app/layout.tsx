import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/app/ui/footer'
import Header from './ui/header'
import { Inter } from 'next/font/google'
import ScreenSaver from './_components/screensaver'

export const metadata: Metadata = {
  title: 'Portal Digital Kantor Pertanahan',
  description: 'A simple portal',
}

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <ScreenSaver />
      </body>
    </html>
  )
}

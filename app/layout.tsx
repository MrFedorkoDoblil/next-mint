import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.scss'
import Header from '@/components/header/header'
import SideNav from '@/components/sideNav/sideNav'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'МЯТА | рекламно-производственная компания',
  description: 'Официальный сайт и онлайн-сервис для заказов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <div className="wrap">
        <Header/>
        <SideNav/>
        { children}
        <Footer/>
        
        </div>
        </body>
    </html>
  )
}

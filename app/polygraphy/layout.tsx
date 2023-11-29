import type { Metadata } from 'next'
import Polygraphy from './page'
import '@/app/globals.scss'

export const metadata: Metadata = {
  title: 'МЯТА | Полиграфия',
  description: 'Официальный сайт и онлайн-сервис для заказов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Polygraphy/>
    {children}
    </>
  )
}

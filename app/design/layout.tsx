import type { Metadata } from 'next'
import '@/app/globals.scss'
import Design from './page'

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
    <Design/>
    {children}
    </>
  )
}

import type { Metadata } from 'next'
import '@/app/globals.scss'
import UvPrint from './page'

export const metadata: Metadata = {
  title: 'МЯТА | УФ печать',
  description: 'Официальный сайт и онлайн-сервис для заказов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <UvPrint/>
    {children}
    </>
  )
}

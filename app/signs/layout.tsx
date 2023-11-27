import type { Metadata } from 'next'
import Signs from './page'
import '@/app/globals.scss'

export const metadata: Metadata = {
  title: 'МЯТА | Вывески',
  description: 'Официальный сайт и онлайн-сервис для заказов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="wrap">
    <Signs/>
    {children}
    </div>
  )
}

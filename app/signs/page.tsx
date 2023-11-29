import React from 'react'
import Link from 'next/link'
import Hat from '@/components/hat/Hat'


export default function Signs() {
  return (
    <Hat
      title='Вывески'
      btns={[
        {lable: 'Полезная информация', link: '/signs/signsUseful'},
        {lable: 'Онлайн калькулятор', link: '/signs/calc'},
        {lable: 'Как заказать', link: '/signs/signsOrder'},
      ]}
    />
  )
}

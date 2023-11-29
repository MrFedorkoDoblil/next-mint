import React from 'react'
import Link from 'next/link'
import Hat from '@/components/hat/Hat'


export default function Polygraphy() {
  return (
    <Hat
      title='Полиграфия'
      btns={[
        {lable: 'Виды продукции', link: '/polygraphy/polygraphyInfo'},
        {lable: 'Онлайн заказ', link: '/polygraphy/'},
      ]}
    />
  )
}

import React from 'react'
import Link from 'next/link'
import Hat from '@/components/hat/Hat'


export default function Design() {
  return (
    <Hat
      title='Дизайн'
      btns={[
        {lable: 'Виды услуг', link: '/design/designInfo'},
        {lable: 'Чек-лист заказчику', link: '/design/designChek'},
        {lable: 'Требования к макетам', link: '/design/designRequire'},
      ]}
    />
  )
}
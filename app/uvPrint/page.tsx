import React from 'react'
import '../sass/sassTemplates/hat.scss'
import Link from 'next/link'
import Hat from '@/components/hat/Hat'


export default function UvPrint() {
  return (
    <Hat
      title='УФ-печать'
      btns={[
        {lable: 'Информация', link: '/uvPrint/uvPrintInfo'},
        {lable: 'Онлайн калькулятор', link: '/uvPrint/calc'},
      ]}
    />
  )
}

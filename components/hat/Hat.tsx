'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import '@/app/sass/sassTemplates/hat.scss';

interface HatProps {
    btns: {link: string; lable:string}[];
    title: string;
}

export default function Hat({btns, title}: HatProps) {
    
    const pathname = usePathname();

    const handleStyle = (link: string) => {
      if(link === pathname){

        console.log('handleStyle true');
        return "button hat__button hat__button_active"
      } else {
        console.log('handleStyle FALSE');
        return "button hat__button"
      }
    }
  
    return (
    <section className="hat">
      <div className="container">
          <div className="hat__header">
              <div className="hat__buttons">
                  {btns.map(({lable, link}, i)=> <Link key = {i} href={link} className={handleStyle(link)}> <span>{lable}</span></Link>)}       
              </div>
              <h1 className="hat__title">{title}</h1>
          </div>
      </div>
    </section>
  )
}

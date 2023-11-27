import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
    link: string;
    img:{
        width: number;
        alt: string;
        src: string;
    };
    title: string
}

export default function MenuItem( props:MenuItemProps) {
    const {img, link, title } = props
  return (
    <li className="menu__item">
        <Link href={link} className="menu__link" > 
            <div className="menu__round">
                <img src={img.src} style= {{width: `${img.width}px`}} alt={img.alt}/>
            </div> 
            <span>{title}</span>
        </Link>
    </li>
    )
}

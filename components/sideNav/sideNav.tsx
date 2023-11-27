import Link from 'next/link';
import React from 'react';
import './sideNav.scss';
import MenuItem from './menuItem';


interface SideNavProps {
  isOpen? : boolean;
}

export default function SideNav ({isOpen}: SideNavProps) {
  
  return (
    <>
      {
        !isOpen && 
        <div className="menu show" >
              <nav>
                  <ul className="menu__list">
                    <MenuItem title='Главная' link='/mainPage' img={{alt:'main', src:"icons/naw_icons/main.svg", width: 25}}/>
                    <MenuItem title='Вывески' link='/signs' img={{alt:'sign', src:"icons/naw_icons/signs.svg",width: 27}}/>
                    <MenuItem title='УФ печать' link='/uvPrint' img={{alt:'uv', src:"icons/naw_icons/uv.svg",width: 25}}/>
                    <MenuItem title='Полиграфия' link='/polygraphy' img={{alt:'polygraphy', src:"icons/naw_icons/poligraphy.svg", width: 19 }}/>
                    <MenuItem title='Дизайн' link='/design' img={{alt:'design', src:"icons/naw_icons/design.svg", width: 26}}/>
                  </ul>
              </nav>
          </div>
      }
      {isOpen && 
      <div className="screen fadein" >
      {/* <div className="wide" onMouseLeave = {(e) => props.hideWide(e.target)}> */}
      <div className="wide" >
          <nav>
              <ul className="wide__list">
                  <li className="wide__item">
                      <Link href="/personal" className="wide__link-main">Личный кабинет</Link>
                  </li>
                  <li className="wide__item">
                      <Link href="/" className="wide__link-main mt-2" >Главная</Link>
                  </li>
                  <li className="wide__item">
                      <Link href="/signs" className="wide__link-main pb-0" >Вывески</Link>
                      <Link href="/signs" className="wide__link">Виды вывесок</Link>
                      <Link href="/signs" className="wide__link" >Онлайн калькулятор</Link>
                      <Link href="/signs" className="wide__link pb-3">Как заказть</Link>
                  </li>
                  <li className="wide__item">
                      <Link href="/uvprint" className="wide__link-main pb-0" >УФ печать</Link>
                      <Link href="/uvprint" className="wide__link">Продукция</Link>
                      <Link href="/uvprint" className="wide__link pb-3">Онлайн заказ</Link>
                  </li>
                  <li className="wide__item">
                      <Link href="/polygraphy" className="wide__link-main pb-0" >Полиграфия</Link>
                      <Link href="/polygraphy" className="wide__link">Виды продукции</Link>
                      <Link href="/polygraphy" className="wide__link pb-3">Онлайн заказ</Link>
                  </li>
                  <li className="wide__item">
                      <Link href="/design" className="wide__link-main pb-0" >Дизайн</Link>
                      <Link href="/design" className="wide__link">Виды услуг</Link>
                      <Link href="/design" className="wide__link pb-3">Чек-лист дизайнеру</Link>
                  </li>
                  <li className="wide__item">
                      <Link href="/cases" className="wide__link-main mt-2" >Кейсы</Link>
                  </li>
                  <li className="wide__item">
                      <Link href="/reviews" className="wide__link-main">Отзывы</Link>
                  </li>
  
              </ul>
          </nav>
      </div>
  </div>
      }
    </>
  )
}


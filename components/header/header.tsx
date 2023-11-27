import Link from 'next/link'
import React from 'react'
import './header.scss'
import { defaultData } from '@/config/defaultData'


export default function Header() {
  return (
    <header className="header">
        <div className="header__wrapper1">
            <div className="header__burger">
            {/* <div className="header__burger" onClick={props.onMenuChange}> */}
                <div className="header__burger-line"></div>
                <div className="header__burger-line"></div>
                <div className="header__burger-line"></div>
            </div>
            <div className="header__logo">
                <Link href="/">
                    <img className="header__logo-green" src="icons/main_logo.svg" alt="logo"/>
                    <img className="header__logo-white" src="icons/main_logo-white.svg" alt="logo"/>
                </Link>
            </div>
        </div>

        <div className="header__wrapper2">

            <form action="" method="get" className="header__search">
                <input name="s" className="header__search-form" placeholder="Поиск..." type="search"/>
                
            </form>
            

            <button type="button" className="header__contact">
                <a className="header__contact-maxi" href={defaultData.phone.href}>{defaultData.phone.label}</a>
                <a className="header__contact-mini" href={defaultData.phone.href}>
                {/* <a className="header__contact-maxi" href={`tel:${handlePhone().phoneWPlus}`}>{c.mainPhone}</a>
                <a className="header__contact-mini" href={`tel:${handlePhone().phoneWPlus}`}> */}
                    <img src="icons/phone-yellow.svg" alt="logo"/>
                </a>
            </button>
            <Link href="/personal" className="header__login">
                <div className="header__login-wrapper">
                    <div className="header__login-text">
                        войти
                        {/* {isAuth && name ? `${name}` : 'войти'} */}
                        </div>
                    {/* {isAuth ? <div onClick={() => {logout()}} className="header__login-text header__login-text_bold">выйти</div> : <></>} */}
                </div>
                <div className="header__login-block">
                    <img src="icons/log_in_icon.png" alt="logo"/>
                </div>
            </Link>
            <Link href="/personal" className="header__login-mini">
                <div className="header__login-block-mini">
                    <img src="icons/login-yellow.svg" alt="logo"/>
                </div>
            </Link>
        </div>
    </header>
  )
}

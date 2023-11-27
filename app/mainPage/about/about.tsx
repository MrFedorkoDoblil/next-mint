import Link from 'next/link'
import React from 'react'
import './about.scss'

export default function About() {
  return (
    <section className="about">
      <div className="container">
          <div className="services">
              <div className="services__item">
                  <Link href="/signs">
                      <div className="services__item-title">Объемные <br/> буквы</div>
                      <img src="img/letters.png" alt="" className="services__item-img"/>
                  </Link>
              </div>
              <div className="services__item">
                  <Link href="/uvprint">
                      <div className="services__item-title">УФ печать</div>
                      <div className="services__item-img"><img src="img/uv-printer.png" alt=""/></div>
                  </Link>
              </div>
              <div className="services__item">
                  <Link href="/polygraphy">
                      <div className="services__item-title">Полиграфия</div>
                      <div className="services__item-img"><img src="img/booklet.png" alt=""/></div>
                  </Link>
              </div>
              <div className="services__item">
                  <Link href="/design">
                      <div className="services__item-title">Дизайн</div>
                      <div className="services__item-img"><img src="img/lamp.png" alt=""/></div>
                  </Link>
              </div>
          </div>
      </div>
      <div className="container">
          <div className="why">
              <div className="why__title">Почему Мята?</div>
              <div className="why__wrapper">
                  
                  <div className="why__block">
                          Мы используем только качественные материалы, проверенные временем
                  </div>
                  <div className="why__block">
                          Цены на услуги ниже средних, гибкая система скидок
                  </div>
                  <div className="why__block">
                          Сострудничать с нами <br/> удобно и приятно,<br/>работаем без выходных  
                  </div>
              </div>
          </div>
      </div>
    
  </section>
  )
}

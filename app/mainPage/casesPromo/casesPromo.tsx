import Link from 'next/link'
import React from 'react'
import './casesPromo.scss'

export default function CasesPromo() {
  return (
    <section className="cases-promo">
      <div className="container">
          <div className="cases-promo__text">
              <h2 className="cases-promo__header">Интересно наглядно <br/>
                  посмотреть, <br/>
                  чем мы занимаемся?<br/>
                  Тогда Вам сюда!
              </h2>
              <img className="cases-promo__arrow" src="img/arrow.svg" alt="arrow"/>
          </div>

          <div className="cases-promo__link">
              <Link href="/cases">
                  <div className="cases-promo__link-title">Наши кейсы</div>
                  <div className="cases-promo__link-img"><img src="img/folder.png" alt=""/></div>
              </Link>
          </div>
      </div>
    </section>
  )
}

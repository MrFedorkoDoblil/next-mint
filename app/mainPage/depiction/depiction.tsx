import Link from 'next/link'
import React from 'react'
import './depiction.scss'

export default function Depiction() {
  return (
    <section className="depiction">
      <div className="container">
          <div className="depiction__cards">
              <div className="depiction__card">
                  <div className="depiction__title">Заказывайте товары и услуги прямо на сайте</div>
                  <div className="depiction__img"><img src="icons/basket.png" alt="basket"/></div>
              </div>
              <div className="depiction__card">
                  <div className="depiction__title">Следите за статусом заказа в личном кабинете</div>
                  <div className="depiction__img"><img src="icons/track.png" alt="track"/></div>
              </div>
              <div className="depiction__card">
                  <div className="depiction__title">Рассчитывайте стоимость любой услуги онлайн</div>
                  <div className="depiction__img"><img src="icons/calculate.png" alt="calculate"/></div>
              </div>
              <div className="depiction__card">
                  <div className="depiction__title">Чат поддержки 24/7</div>
                  <div className="depiction__img"><img src="icons/chat.png" alt="chat"/></div>
              </div>
              <div className="depiction__card">
                  <div className="depiction__title">Документооборот через личный кабинет</div>
                  <div className="depiction__img"><img src="icons/doc.png" alt="doc"/></div>
              </div>
              <div className="depiction__card">
                  <div className="depiction__title">Скидки при заказе через сайт</div>
                  <div className="depiction__img"><img src="icons/PRESENT.png" alt="present"/></div>
              </div>
          </div>
          <button className="depiction__button">
              <Link href="/">Сотрудничать</Link>
          </button>
      </div>
  </section>
  )
}

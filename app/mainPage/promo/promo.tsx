import React from 'react'
import './promo.scss'

export default function Promo() {
  return (
      <section className="promo">
        <div className="container">
            <div className="content">
                <div className="content__text">
                    <h1 className="content__title">Рекламно- производственная  компания  “Мята”</h1>
                    <div className="content__title-mini">РПК “Мята”</div>
                    <h2 className="content__subtitle">Каждый день работаем для Вас</h2>
                </div>
                <div className="content__img"><img src="img/hand.png" alt=""/></div>
            </div>

        </div>
      </section>
  )
}

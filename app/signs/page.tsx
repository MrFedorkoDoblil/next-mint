import React from 'react'
import '../sass/sassTemplates/hat.scss'
import Link from 'next/link'

export default function Signs() {
  return (
    <section className="hat">
      <div className="container">
          <div className="hat__header">
              <div className="hat__buttons">
                  <Link href="/signs/signsUseful"><button className="hat__button"> Полезная информация</button></Link>
                  <Link href="/signs/calc"><button className="hat__button"> Онлайн калькулятор</button></Link>
                  <button className="hat__button">Онлайн калькулятор</button>
                  <button className="hat__button">Как заказать</button>
              </div>
              <h1 className="hat__title">Вывески</h1>
          </div>
      </div>
    </section>
  )
}

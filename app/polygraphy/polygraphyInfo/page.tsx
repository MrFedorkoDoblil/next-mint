import React from 'react'
import './polygraphyInfo.scss'
import'../../sass/sassTemplates/info.scss'

export default function PolygraphyInfo() {
  return (
    <div className="polygraphy fadein">
        <div className='container'>
            <h3 className="info__subject">Полиграфия - это еще актуально</h3>
            <div className="info__wrapper">
                <div className="info__introduction">Предлагаем доступную, качественную офсетную печать и приемлимые сроки исполнения. Особенно выгодно печатать большие тиражи полиграфии. Чем больше тираж - тем ниже стоимость еденицы продукции. Заказать офсетную полиграфию можно на нашем сервисе в разделе "Заказ онлайн". Со своей стороны мы гарантируем качественное выполнение и доставку заказов и точно в срок. <br /> Ниже можно знакомиться, какая продукция доступна к заказу.</div>
                <img className="polygraphy__img" src="img/flayers.png" alt="flayers"/>
            </div>
            
            <div className="polygraphy__block">
                <h5 className="polygraphy__title">У нас можно заказать:</h5>
                <div className="polygraphy__wraper">
                    <div className="polygraphy__kind">
                        <div className="polygraphy__picture"><img src="img/polygraphy/card.png" alt="card"></img></div>
                        <div className="polygraphy__name">Визитные карточки</div>
                    </div>
                    <div className="polygraphy__kind">
                        <div className="polygraphy__picture"><img src="img/polygraphy/flyer.png" alt="flyer"></img></div>
                        <div className="polygraphy__name">Листовки</div>
                    </div>
                    <div className="polygraphy__kind">
                        <div className="polygraphy__picture"><img src="img/polygraphy/poster.png" alt="poster"></img></div>
                        <div className="polygraphy__name">Плакаты</div>
                    </div>
                    <div className="polygraphy__kind">
                        <div className="polygraphy__picture"><img  src="img/polygraphy/postcard.png" alt="postcard"></img></div>
                        <div className="polygraphy__name">Открытки</div>
                    </div>
                    <div className="polygraphy__kind">
                        <div className="polygraphy__picture"><img src="img/polygraphy/leaflet.png" alt="leaflet"></img></div>
                        <div className="polygraphy__name">Лифлеты</div>
                    </div>
                    <div className="polygraphy__kind">
                        <div className="polygraphy__picture"><img src="img/polygraphy/booklet.png" alt="booklet"></img></div>
                        <div className="polygraphy__name">Буклеты</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

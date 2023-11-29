import React from 'react'
import '../../sass/sassTemplates/info.scss'
import './designInfo.scss'

export default function DesignInfo() {
  return (
    <div className="design-info fadein">
        <div className="container">
            <h3 className="info__subject">С чего все начинается</h3>
            <div className="info__wrapper">
                <div className="info__introduction">Для создания рекламных материалов всегда необходимо наличие дизайн-макета. Вы можете предоставить свой макет, если же такового не имеется,  предлагаем воспользоваться услугами нашего опытного дизайнера. Обещаем индивидуальный подход и отличный результат сотрудничества!</div>
                <img className="design-info__pic" src="./img/laptop.png" alt="laptop"></img>
            </div>
            
            <div className="design-info__block">
                <h5 className="design-info__title">Создание простого макета</h5>
                <div className="design-info__group">
                    
                    <div className="design-info__descr">Вы предоставляете четкое техническое задание (точный текст, нужные изображения, необходимую компоновку на рекламном поле). Нет необходимосте в дополнительной подборке или обработке изображений.&shy;Как правило, это некий баннер или табличка, так назваемые "фон-буквы".
                    </div>
                    <div className="design-info__img">Пример<img src="img/designPrice/price1.jpg" alt="price1"></img></div>
                </div>
                <h5 className="design-info__price">300 ₽</h5>
            </div>

            <div className="design-info__block">
                <h5 className="design-info__title">Создание макета средней сложности</h5>
                <div className="design-info__group">
                    
                    <div className="design-info__descr">Вы предоставляете четкое техническое задание (текст, по возможности, изображения, пожелания по офрмлению). Включает в себя обработку картинок, стилизация шрифтов, компоновка объектов на макете.
                    </div>
                    <div className="design-info__img">Пример<img src="img/designPrice/price2.jpg" alt="price2"></img></div>
                </div>
                <h5 className="design-info__price">500-1000 ₽</h5>
            </div>

            <div className="design-info__block">
                <h5 className="design-info__title">Создание сложного макета</h5>
                <div className="design-info__group">
                    
                    <div className="design-info__descr">Четкое или размытое тз. Сложная задумка, множество элементов, возможны составление и редактирование текстов, ретушь фото.
                    </div>
                    <div className="design-info__img">Пример<img src="img/designPrice/price3.jpg" alt="price3"></img></div>
                </div>
                <h5 className="design-info__price">1000-3000 ₽</h5>
            </div>

            <div className="design-info__block">
                <h5 className="design-info__title">Создание фирменного стиля</h5>
                <div className="design-info__group">
                    
                    <div className='design-info__descr'> "С нуля" делаем брэнд-бук для Вашей компании. Создаем логотип, фирменный знак, составляем слоган, подбираем фирменный шрифт, цветовое решение и оформление рекламных продуктов. Предоставим все необходимые исходники для дальнейшего пользования.
                    </div>
                    <div className="design-info__img">Пример<img src="img/designPrice/price4.jpg" alt="price4"></img></div>
                </div>
                <h5 className="design-info__price">5000-130000 ₽</h5>
            </div>
            <div className="info__introduction info__introduction-vide">Чтобы заказать бренд-бук или макет у нашего опытного дизайнера, составьте техническое задание согласно "Чек-листу заказчика" и обратитесь по телефону +79524346863 или по email: <span className="useful__introduction-nowrap">design-belmint@mail.ru</span> </div>

        </div>

    </div>
  )
}
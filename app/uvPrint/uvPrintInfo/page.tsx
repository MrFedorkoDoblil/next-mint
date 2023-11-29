import React from 'react'
import'../../sass/sassTemplates/info.scss'
import './uvPrint.scss'

export default function UvPrintInfo() {
  return (
    <div className='container'>
      <h3 className="info__subject">Отличная печать за разумные деньги</h3>
      <div className="info__wrapper">
          <div className="info__introduction">К преимуществвам ультрафиолетоой печати можно отнести качественное, красочное изображение, не подвергается выцветанию, покрытие более износостойкое(по сравнению с сольвентной печатью), сжатые сроки готовности</div>
          <img className="uvprint__img" src="img/uv-printer.png" alt="UV printer"/>
      </div>

    </div>
  )
}

import React from 'react'

interface UsefulBlockProps {
    title: string;
    descr: string;
    image: {
        src: string;
        alt: string;
    };
    caseFn: (arg?: any) => void;
    orderFn: (arg?: any) => void;
}

export default function UsefulBlock(props: UsefulBlockProps) {
    
    const { caseFn, descr, image, orderFn, title } = props;
  
    return (
        <div className="useful__block">
        <h5 className="useful__title">{title}</h5>
        <div className="useful__group">
            <div className="useful__img"><img className="rounded float-start" src={image.src} alt={image.alt}></img></div>
            <div className="useful__descr"> 
                {descr}
            </div>

        </div>
        <div className="useful__btn-group">
            <button  type="button" className="useful__btn">Примеры работ</button>
            <button  type="button" className="useful__btn">Перейти в калькулятор</button>
            {/* <button onClick={caseFn} type="button" className="useful__btn">Примеры работ</button>
            <button onClick = {orderFn} type="button" className="useful__btn">Перейти в калькулятор</button> */}
        </div>
    </div>
  )
}

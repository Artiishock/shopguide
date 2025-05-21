import React from 'react'
import './styles/mainSection.css'

import "swiper/css";
import Arrow_down from './assets/images/arrow_down.svg'
import Like from "./assets/images/like.svg"
import Geo from "./assets/images/geo.svg"
import Sheet from "./assets/images/sheet.svg"
import Bell from "./assets/images/bell.svg"
import Phone_actions from "./assets/images/phone2_actions.jpg"
import Phone_subsribtions from "./assets/images/phone2_subsribtions.jpg"
import Phone_map from "./assets/images/phone2_map.jpg"
import Phone_list from "./assets/images/phone2_list.jpg"
import Phone_favorites from "./assets/images/phone2_favorites.jpg"
import Phone from "./assets/images/phone2.png"
import About_actions_phone1 from "./assets/images/_phone3_1.png"
import About_actions_phone2 from "./assets/images/_phone3_2.png"





const MainSection = () => {
 
  
  return (
    <section className='main'>
        <div className="main__button-down">
          <button>
            <p>Вниз</p>
            <img src={Arrow_down} alt="" />
            <p>Вниз</p>
          </button>
        </div>
    <div className="main__info-block">
      <div className="main__info-block__section">
        <img className='main__info-block__image' src={Like} alt="" />
        <h2 className="main__info-block__title">ТОЛЬКО ЛУЧШИЕ</h2>
        <p className="main__info-block__text">Всегда актуальные акции у вас в телефоне</p>
      </div>
      <div className="main__info-block__section">
        <img className='main__info-block__image' src={Geo} alt="" />
        <h2 className="main__info-block__title">ВСЕГДА РЯДОМ</h2>
        <p className="main__info-block__text">Находите ближайшие акции на карте рядом с вами</p>
      </div>
      <div className="main__info-block__section">
        <img className='main__info-block__image' src={Sheet} alt="" />
        <h2 className="main__info-block__title">УВЕДОМЛЕНИЯ</h2>
        <p className="main__info-block__text">Подписывайтесь только на то, что вас интересует и всегда будьте в курсе новых акций.</p>
      </div>
      <div className="main__info-block__section">
        <img className='main__info-block__image' src={Bell} alt="" />
        <h2 className="main__info-block__title">КАТАЛОГ</h2>
        <p className="main__info-block__text">Огромный каталог с информацией о математиках, брендах и ТЦ всегда под рукой.</p>
      </div>
    </div>
    
    <div className="main-content">
  <h3 className='opacity05 left_title'>Избранное</h3>
  <div className="phone">
    <img src={Phone} alt="Phone" className="phone__frame" />
    <img src={Phone_actions} alt="Content" className="phone__content" />
  </div>
  <div className="main-content__right">
    <div className="main-content__titles">
      <h3 className='activ'>Профиль акции</h3>
      <h3 className='opacity05'>Подписки</h3>
      <h3 className='opacity05'>Карта</h3>
      <h3 className='opacity05'>Моя лента</h3>
    </div>
    <hr className="main-content__hr" />
    <p>Вы всегда получите полную информацию об акции: подробное описание, бренд, магазины и торговые центры где походит акция.</p>
    <p>Также доступна возможность сразу перейти на сайт товара и купить в рамках действующей акции.</p>
  </div>
</div>

<div className="main__about-actions">
  <div className="main__about-actions__info">
    <h2 className="main__about-actions__title">Наши Акции</h2>
    <p className="main__about-actions__text">
      Каждый день в Москве проходят распродажи. В акциях и скидках дня могут
      принимать участие любые группы товаров. Особенно популярны распродажи
      одежды и обуви, распродажи мебели, распродажи сумок.
    </p>
  </div>
  <div className="main__about-actions__image">
    <img src={About_actions_phone1} alt="Phone 1" className="main__about-actions__phone main__about-actions__phone--left" />
    <img src={About_actions_phone2} alt="Phone 2" className="main__about-actions__phone main__about-actions__phone--right" />
  </div>
</div>
    </section>
  )
}

export default MainSection
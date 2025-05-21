import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles/partnersSection.css';
import Adidas from './assets/images/logos/logo_adidas.png';
import Carlo from './assets/images/logos/logo_carlo.png';
import Cym from './assets/images/logos/logo_cym.png';
import Gum from './assets/images/logos/logo_gum.png';
import Nike from './assets/images/logos/logo_nike.png';
import Prada from './assets/images/logos/logo_prada.png';
import Zara from './assets/images/logos/logo_zara.png';
import Arrow_left from './assets/images/arrow_left.svg';
import Arrow_right from './assets/images/arrow_right.svg';


const PartnersSection = () => {
  return (
    <section className="partners">
    <h2 className="partners__title">Наши партнёры</h2>
    <div className="partners__container">
    <Swiper
  modules={[Navigation]}
  spaceBetween={15}
  slidesPerView={7} // Количество слайдов по умолчанию
  loop={true} // Бесконечная прокрутка
  navigation={{
    nextEl: '.custom-next', 
    prevEl: '.custom-prev', 
  }}
  breakpoints={{
    // Настройки для экранов меньше 320px
    320: {
      slidesPerView: 1, // Один слайд на маленьких экранах
      spaceBetween: 10, // Расстояние между слайдами
    },
    // Настройки для экранов меньше 768px
    768: {
      slidesPerView: 2, // Два слайда на планшетах
      spaceBetween: 15,
    },
    // Настройки для экранов меньше 1024px
    1024: {
      slidesPerView: 4, // Четыре слайда на ноутбуках
      spaceBetween: 20,
    },
    // Настройки для экранов больше 1440px
    1440: {
      slidesPerView: 7, // Семь слайдов на больших экранах
      spaceBetween: 25,
    },
  }}
>
  <SwiperSlide>
    <img src={Prada} alt="Prada" className="partners__logo" />
  </SwiperSlide>
  <SwiperSlide>
    <img src={Nike} alt="Nike" className="partners__logo" />
  </SwiperSlide>
  <SwiperSlide>
    <img src={Cym} alt="Cym" className="partners__logo" />
  </SwiperSlide>
  <SwiperSlide>
    <img src={Adidas} alt="Adidas" className="partners__logo" />
  </SwiperSlide>
  <SwiperSlide>
    <img src={Gum} alt="Gum" className="partners__logo" />
  </SwiperSlide>
  <SwiperSlide>
    <img src={Zara} alt="Zara" className="partners__logo" />
  </SwiperSlide>
  <SwiperSlide>
    <img src={Carlo} alt="Carlo Pazolini" className="partners__logo" />
  </SwiperSlide>
</Swiper>
  
      {/* Кастомные стрелки для навигации */}
      <div className="custom-prev">
        <img src={Arrow_left} alt="Previous" />
      </div>
      <div className="custom-next">
        <img src={Arrow_right} alt="Next" />
      </div>
    </div>
  
    <div className="partners__offer">
      <p>Хотите стать партнёром?</p>
      <p>Напишите нам и про ваши акции узнают все.</p>
      <button className="partners__offer__btn">СТАТЬ ПАРТНЕРОМ</button>
    </div>
  </section>
  );
};

export default PartnersSection;
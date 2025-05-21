import React from 'react';
import "./styles/header.css"; 
import Icon_rect from '../components/assets/images/icon_rect.svg'
import Icon_vk from '../components/assets/images/icon_vk.svg'
import Icon_tw from '../components/assets/images/icon_tw.svg'
import Icon_ig from '../components/assets/images/icon_ig.svg'
import Icon_fb from '../components/assets/images/icon_fb.svg'
import Icon_ok from '../components/assets/images/icon_ok.svg'
import Download_ios from '../components/assets/images/download_ios.svg'
import Download_android from '../components/assets/images/download_android.svg'
import Header__phone from './assets/images/_phone1.png'
import Shopguide  from './assets/images/shopguide.svg'



const Header = () => {
  return (
    <header className="header">
      <div className="header__background">
        <nav className="header__social">
          <ul className="header__social-menu">
            <li><a href="#">
              <img src={Icon_rect} alt="" className='icon_rect' />
            <img src={Icon_vk} alt="" className='social__icon' /></a></li>
            <li><a href="#">
              <img src={Icon_rect} alt="" className='icon_rect' />
            <img src={Icon_tw} alt="" className='social__icon' /></a></li>
            <li><a href="#">
              <img src={Icon_rect} alt="" className='icon_rect' />
            <img src={Icon_ig} alt="" className='social__icon' /></a></li>
            <li><a href="#">
              <img src={Icon_rect} alt="" className='icon_rect' />
            <img src={Icon_fb} alt="" className='social__icon' /></a></li>
            <li><a href="#">
              <img src={Icon_rect} alt="" className='icon_rect' />
            <img src={Icon_ok} alt="" className='social__icon' /></a></li>
            <button className='btn btn__partner '>СТАТЬ ПАРТНЕРОМ</button>
          </ul>

        </nav>
        <div className="header__item">
          <div className="header__content">
            <div className="banner">
                <p className="banner__text">ТОЛЬКО ЛУЧШИЕ АКЦИИ</p>
            </div>
            <img src={Shopguide} className="header__title" />
            <p className="header__download-text">
              <hr className="header__hr" />загрузить<hr className="header__hr" />
            </p>
            <div className="header__buttons">
                <button className="banner__button banner__button--appstore">
                  <img src={Download_ios} alt="AppStore" />
                </button>
                <button className="banner__button banner__button--googleplay">
                  <img src={Download_android} alt="Google Play" />
                </button>
            </div>
          </div>
          <div className="header__phone">
            <img src={Header__phone} alt="" className='header__phone_img' /> 
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
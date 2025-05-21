import React from 'react'
import'./styles/footer.css'
import Contact from './assets/images/contact.svg'

const Footer = () => {
  return (
<section className="footer">
  <div className="footer__info">
    <h4>2016 © SHOPGUIDE</h4>
    <div className="footer__rule">
      <a href="#">Политика конфиденциальности</a>
      <a href="#">Правила пользования</a>
    </div>
  </div>
  <div className="footer__btn">
    <img src={Contact} alt="Contact" />
    <p>Связаться с нами</p>
  </div>
</section>
  )
}

export default Footer
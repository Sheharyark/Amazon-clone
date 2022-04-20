import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />

        <div className='home__row'>
          <Product
            id='12321341'
            title='boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor & 5 ATM Water Resistance(Pitch Black)'
            price={11.96}
            rating={5}
            image='https://m.media-amazon.com/images/I/61IMRs+o0iL._AC_UY218_.jpg'
          />
          <Product
            id='49538094'
            title='M7 Smart Watch For Men & Women Latest Bluetooth 1.3" LED with Daily Activity Tracker, Heart Rate Sensor, BP Monitor, Sports Gym Watch for All Boys & Girls - Black'
            price={239.0}
            rating={4}
            image='https://m.media-amazon.com/images/I/61vNo+aPWUL._SX466_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id='4903850'
            title='Mi Notebook Pro QHD+ IPS Anti Glare Display Intel Core i5-11300H'
            price={199.99}
            rating={3}
            image='https://images-eu.ssl-images-amazon.com/images/I/41Ix2JelnmL._AC_SR400,600_.jpg'
          />
          <Product
            id='23445930'
            title='Mi NoteBook Ultra 3.2K resolution display Intel Core i5-11300H 11th Gen 15.6-inch(39.62 cm) Thin & Light laptop(16GB/512GB SSD/Iris Xe Graphics/Win 11/MS Office 21/Backlit KB/Fingerprint sensor/1.7Kg)'
            price={98.99}
            rating={5}
            image='https://images-eu.ssl-images-amazon.com/images/I/41O7cCoUoVL._AC_SR400,600_.jpg'
          />
          <Product
            id='3254354345'
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
            price={598.99}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id='90829332'
            title="Striped Men's Sleeveless Round Neck Yellow Cotton Vest"
            price={1094.98}
            rating={4}
            image='https://images-eu.ssl-images-amazon.com/images/I/41+Acpk1SrL._AC_SR400,600_.jpg'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

// src =
//   'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg';

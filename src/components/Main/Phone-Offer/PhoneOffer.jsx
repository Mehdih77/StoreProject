import './phoneoffer.css'
import {Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from 'swiper/core';
import { useSelector } from 'react-redux';
import { allProducts } from '../../../redux/shopSlice';
SwiperCore.use([Navigation]);

export default function PhoneOffer() {

  const getAllProducts = useSelector(allProducts);
  
  const getPhones = getAllProducts.filter(p => p.category === 'phone');

  const phonesList = getPhones ? getPhones.map((phones) => {
    return (
      <SwiperSlide key={phones.id}>
       <Link to={`/phones/phone/${phones.id}`}>
          <div className="card phone-card-custom-style">
           <img src={phones.img} className="card-img-top phone-img" alt={phones.name}/>
             <div className="card-body">
                <h5 className="phone-card-title">{phones.name}</h5>
                <p className="phone-card-text">{phones.price}تومان</p>
             </div>
          </div>
        </Link>
      </SwiperSlide>
    )
  }) : null;

    return (
        <>
    <section className="container phone-offer">
        <div className="row">
        <h4 className="phone-offer-top-title">پرفروش ترین گوشی های موبایل</h4>
        <Swiper slidesPerView={1} spaceBetween={10} navigation={true} breakpoints={{
          "640": {
            "slidesPerView": 2,
            "spaceBetween": 20
          },
          "768": {
            "slidesPerView": 3,
            "spaceBetween": 40
          },
          "1024": {
            "slidesPerView": 4,
            "spaceBetween": 50
          }
        }} className="mySwiper">
          {phonesList}
        </Swiper>
        </div>
    </section>
    </>
    )
}

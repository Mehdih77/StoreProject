import React, { useEffect, useState} from 'react'
import './supermarket.css'
import { get } from '../../../Server/Axios'
import OfferTimer from '../../../components/OfferTimer'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from 'swiper/core';
SwiperCore.use([Navigation]);

export default function SuperMarket() {

  const [supermarket, setSupermarket] = useState('')
  const {hours, minutes, seconds} = OfferTimer();

  useEffect(() => {
    get('/supermarket').then(
      response => { setSupermarket(response.data)}
    )
  }, [])


  const supermarkets = supermarket ? supermarket.map((supermarket) => {
    return (
      <SwiperSlide key={supermarket.id}>
      <div className="card">
            <img src={supermarket.img} className="card-img-top" alt={supermarket.name}/>
      <div className="card-body">
          <h5 className="card-title">{supermarket.name}</h5>
          <p className="card-text">{supermarket.body} </p>
       <div className="card-time">
              <p className="card-offprice"><span className="card-off-tag">{supermarket.off}%</span><span className="old-price">{supermarket.old_price}</span></p>
                <p className="card-price">{supermarket.price} تومان</p>
                  <p className="card-clock"><span className="off-time">{hours}:{minutes}:{seconds}</span><i className="far fa-clock"></i></p>
       </div>
            <button onClick={() => onAdd(supermarket)} className="btn btn-supermarket">افزودن به سبد خرید</button>
        </div>
      </div>
</SwiperSlide>
    )
  }) : null;

    return (
        <section>
        <div className="container-fluid supermarket">
        <div className="container">
            <div className="row">
            <div className="col-md-3">
                <img className="top-offer-right w-100 my-5" src="image/supermarket.png" alt='supermarket' />
            </div>
            <div className="col-md-9">
            <Swiper slidesPerView={1} spaceBetween={15} navigation={true} breakpoints={{
                  "640": {          
                     "slidesPerView": 1,
                     "spaceBetween": 20
                          },
                  "768": {
                       "slidesPerView": 2,
                       "spaceBetween": 20
                           },
                   "1024": {
                        "slidesPerView": 3,
                        "spaceBetween": 10
                             }   
                       }} className="mySwiper swiper-top-offer my-4 ml-2">
                              {supermarkets}
             </Swiper></div>
               </div>
             </div>
        </div>
    </section>
    )
}

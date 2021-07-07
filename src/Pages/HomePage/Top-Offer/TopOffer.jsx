import React, { useEffect, useState } from 'react'
import './topoffer.css'
import { get } from '../../../Server/Axios'
import OfferTimer from '../../../components/OfferTimer'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from 'swiper/core';
SwiperCore.use([Navigation]);


export default function TopOffer({onAdd}) {

  const [offer, setOffer] = useState('')
  const {hours ,minutes , seconds} = OfferTimer();
 

  useEffect(() => {
    get('/offers').then( response => { 
      setOffer(response.data)
    })
  }, [])

  const offers = offer ? offer.map((offer) => {
    return (
      
            <SwiperSlide  key={offer.id} >
            <div className="card">
              <img src={offer.img} className="card-img-top" alt={offer.name}/>
                 <div className="card-body">
                <h5 className="card-title">{offer.name}</h5>
               <p className="card-text">{offer.body}</p>
                        <div className="card-time">
                        <p className="card-offprice"><span className="card-off-tag">{offer.off}%</span><span className="old-price">{offer.old_price}</span></p>
                            <p className="card-price">{offer.price} تومان</p>
                      <p className="card-clock"><span className="off-time">{hours}:{minutes}:{seconds}</span><i className="far fa-clock"></i></p>
                            </div>
                <button onClick={() => onAdd(offer)} className="btn btn-top-offer">افزودن به سبد خرید</button>
                 </div>
        </div>
              </SwiperSlide>

    )
  }) : null;

    return (
        <section>
            <div className="container-fluid top-offer">
            <div className="container">
                <div className="row">
                <div className="col-md-3">
                    <img className="top-offer-right w-100 my-5" src="image/7.png" alt='offers' />
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
                              {offers}
              </Swiper>
                    </div>
                </div>
               </div>
            </div>
        </section>
    )
}

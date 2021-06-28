import React from 'react'
import './topoffer.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from 'swiper/core';
SwiperCore.use([Navigation]);


export default function TopOffer() {
    return (
        <section>
            <div className="container-fluid top-offer">
            <div className="container">
                <div className="row">
                <div className="col-md-3">
                    <img className="top-offer-right w-100 my-5" src="image/7.png" />
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
  <SwiperSlide><div class="card">
  <img src="./image/k.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">کروسان</h5>
    <p class="card-text">کروسان کاکائو پچ پچ بسته 6 عددی
 با طعم کاکائو</p>
 <div className="card-time">
 <p className="card-offprice"><span className="card-off-tag">15%</span><span className="old-price">30,000</span></p>
 <p className="card-price">25,000 تومان</p>
 <p className="card-clock"><span className="off-time">21:25:45</span><i class="far fa-clock"></i></p>
 </div>
    <a href="#" class="btn btn-top-offer">افزودن به سبد خرید</a>
  </div>
</div></SwiperSlide>
  <SwiperSlide><div class="card">
  <img src="./image/esperi.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">اسپری خوشبو کننده</h5>
    <p class="card-text">اسپری خوشبو کننده بدن زنانه بیول مدل REMEMBER ME حجم 150 میلی لیتر
</p>
<div className="card-time">
 <p className="card-offprice"><span className="card-off-tag">15%</span><span className="old-price">30,000</span></p>
 <p className="card-price">25,000 تومان</p>
 <p className="card-clock"><span className="off-time">21:25:45</span><i class="far fa-clock"></i></p>
 </div>
    <a href="#" class="btn btn-top-offer">افزودن به سبد خرید</a>
  </div>
</div></SwiperSlide>
<SwiperSlide><div class="card">
  <img src="./image/phone.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">گوشی موبایل سامسونگ مدل Galaxy Z Fold2</h5>
    <p class="card-text">گوشی موبایل سامسونگ مدل Galaxy Z Fold2 LTE SM-F916B تک سیم‌کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت
</p>
<div className="card-time">
 <p className="card-offprice"><span className="card-off-tag">15%</span><span className="old-price">30,000</span></p>
 <p className="card-price">25,000 تومان</p>
 <p className="card-clock"><span className="off-time">21:25:45</span><i class="far fa-clock"></i></p>
 </div>
    <a href="#" class="btn btn-top-offer">افزودن به سبد خرید</a>
  </div>
</div></SwiperSlide>
<SwiperSlide><div class="card">
  <img src="./image/shoes.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">کفش پیاده روی زنانه</h5>
    <p class="card-text">کفش پیاده روی زنانه نیترو مدل PT کد 8050
</p>
<div className="card-time">
 <p className="card-offprice"><span className="card-off-tag">15%</span><span className="old-price">30,000</span></p>
 <p className="card-price">25,000 تومان</p>
 <p className="card-clock"><span className="off-time">21:25:45</span><i class="far fa-clock"></i></p>
 </div>
    <a href="#" class="btn btn-top-offer">افزودن به سبد خرید</a>
  </div>
</div></SwiperSlide>
<SwiperSlide><div class="card">
  <img src="./image/k.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">کروسان </h5>
    <p class="card-text">کروسان کاکائو پچ پچ بسته 6 عددی
 با طعم کاکائو</p>  
 <div className="card-time">
 <p className="card-offprice"><span className="card-off-tag">15%</span><span className="old-price">30,000</span></p>
 <p className="card-price">25,000 تومان</p>
 <p className="card-clock"><span className="off-time">21:25:45</span><i class="far fa-clock"></i></p>
 </div>
   <a href="#" class="btn btn-top-offer">افزودن به سبد خرید</a>
  </div>
</div></SwiperSlide>
<SwiperSlide><div class="card">
  <img src="./image/phone.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">گوشی موبایل سامسونگ مدل Galaxy Z Fold2</h5>
    <p class="card-text">گوشی موبایل سامسونگ مدل Galaxy Z Fold2 LTE SM-F916B تک سیم‌کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت
</p>
<div className="card-time">
 <p className="card-offprice"><span className="card-off-tag">15%</span><span className="old-price">30,000</span></p>
 <p className="card-price">25,000 تومان</p>
 <p className="card-clock"><span className="off-time">21:25:45</span><i class="far fa-clock"></i></p>
 </div>
    <a href="#" class="btn btn-top-offer">افزودن به سبد خرید</a>
  </div>
</div></SwiperSlide>
<SwiperSlide><div class="card">
  <img src="./image/esperi.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">اسپری خوشبو کننده</h5>
    <p class="card-text">اسپری خوشبو کننده بدن زنانه بیول مدل REMEMBER ME حجم 150 میلی لیتر
</p>
<div className="card-time">
 <p className="card-offprice"><span className="card-off-tag">15%</span><span className="old-price">30,000</span></p>
 <p className="card-price">25,000 تومان</p>
 <p className="card-clock"><span className="off-time">21:25:45</span><i class="far fa-clock"></i></p>
 </div>
    <a href="#" class="btn btn-top-offer">افزودن به سبد خرید</a>
  </div>
</div></SwiperSlide>
  </Swiper></div>
                </div>
            </div>
            </div>
        </section>
    )
}

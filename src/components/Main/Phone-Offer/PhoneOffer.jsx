import React from 'react'
import './phoneoffer.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from 'swiper/core';
SwiperCore.use([Navigation]);

export default function PhoneOffer() {
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
  <SwiperSlide>
  <div class="card phone-card-custom-style">
  <img src="./image/phone1.jpg" class="card-img-top phone-img" alt="phone"/>
  <div class="card-body">
    <h5 class="phone-card-title">گوشی موبایل سامسونگ مدل Galaxy A51 SM-A515F/DSN دو سیم کارت ظرفیت 128گیگابایت
</h5>
    <p class="phone-card-text">5,760,000تومان</p>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
  <div class="card phone-card-custom-style">
  <img src="./image/phone2.jpg" class="card-img-top phone-img" alt="phone"/>
  <div class="card-body">
    <h5 class="phone-card-title">گوشی موبایل سامسونگ مدل Galaxy A51 SM-A515F/DSN دو سیم کارت ظرفیت 128گیگابایت
</h5>
    <p class="phone-card-text">5,760,000تومان</p>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
  <div class="card phone-card-custom-style">
  <img src="./image/phone3.jpg" class="card-img-top phone-img" alt="phone"/>
  <div class="card-body">
    <h5 class="phone-card-title">گوشی موبایل سامسونگ مدل Galaxy A51 SM-A515F/DSN دو سیم کارت ظرفیت 128گیگابایت
</h5>
    <p class="phone-card-text">5,760,000تومان</p>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
  <div class="card phone-card-custom-style">
  <img src="./image/phone4.jpg" class="card-img-top phone-img" alt="phone"/>
  <div class="card-body">
    <h5 class="phone-card-title">گوشی موبایل سامسونگ مدل Galaxy A51 SM-A515F/DSN دو سیم کارت ظرفیت 128گیگابایت
</h5>
    <p class="phone-card-text">5,760,000تومان</p>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
  <div class="card phone-card-custom-style">
  <img src="./image/phone5.jpg" class="card-img-top phone-img" alt="phone"/>
  <div class="card-body">
    <h5 class="phone-card-title">گوشی موبایل سامسونگ مدل Galaxy A51 SM-A515F/DSN دو سیم کارت ظرفیت 128گیگابایت
</h5>
    <p class="phone-card-text">5,760,000تومان</p>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
  <div class="card phone-card-custom-style">
  <img src="./image/phone6.jpg" class="card-img-top phone-img" alt="phone"/>
  <div class="card-body">
    <h5 class="phone-card-title">گوشی موبایل سامسونگ مدل Galaxy A51 SM-A515F/DSN دو سیم کارت ظرفیت 128گیگابایت
</h5>
    <p class="phone-card-text">5,760,000تومان</p>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
  <div class="card phone-card-custom-style">
  <img src="./image/phone1.jpg" class="card-img-top phone-img" alt="phone"/>
  <div class="card-body">
    <h5 class="phone-card-title">گوشی موبایل سامسونگ مدل Galaxy A51 SM-A515F/DSN دو سیم کارت ظرفیت 128گیگابایت
</h5>
    <p class="phone-card-text">5,760,000تومان</p>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
  <div class="card phone-card-custom-style">
  <img src="./image/phone2.jpg" class="card-img-top phone-img" alt="phone"/>
  <div class="card-body">
    <h5 class="phone-card-title">گوشی موبایل سامسونگ مدل Galaxy A51 SM-A515F/DSN دو سیم کارت ظرفیت 128گیگابایت
</h5>
    <p class="phone-card-text">5,760,000تومان</p>
  </div>
</div>
</SwiperSlide>
  </Swiper>
        </div>
    </section>
    </>
    )
}

import React from 'react'
import './supermarket.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from 'swiper/core';
SwiperCore.use([Navigation]);

export default function SuperMarket() {
    return (
        <section>
        <div className="container-fluid supermarket">
        <div className="container">
            <div className="row">
            <div className="col-md-3">
                <img className="top-offer-right w-100 my-5" src="image/supermarket.png" />
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
<img src="./image/market-dogh.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">دوغ بدون گاز با طعم نعناع عالیس     
</h5>
<p class="card-text">دوغ بدون گاز با طعم نعناع عالیس مقدار 1.5 لیتر بسته 6 عددی

  </p>
<a href="#" class="btn btn-top-offer">افزودن به سبد خرید</a>
</div>
</div></SwiperSlide>
<SwiperSlide><div class="card">
<img src="./image/market-neskafe.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title"> قهوه فوری مخلوط 1 × 3 نسکافه بسته 20 عددی
 </h5>
<p class="card-text">قهوه فوری مخلوط 1 × 3 نسکافه بسته 20 عددی

</p>
<a href="#" class="btn btn-top-offer">افزودن به سبد خرید</a>
</div>
</div></SwiperSlide>
<SwiperSlide><div class="card">
<img src="./image/market-peril.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title"> مایع جلادهنده ماشین ظرفشویی پریل 
 </h5>
<p class="card-text">مایع جلادهنده ماشین ظرفشویی پریل مقدار 750 گرم

</p>
<a href="#" class="btn btn-top-offer">افزودن به سبد خرید</a>
</div>
</div></SwiperSlide>
<SwiperSlide><div class="card">
<img src="./image/market-mahi.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">  کنسرو ماهی تون در روغن آلیش وزن 180 گرم
 </h5>
<p class="card-text">کنسرو ماهی تون در روغن آلیش وزن 180 گرم
     
</p>
<a href="#" class="btn btn-top-offer">افزودن به سبد خرید</a>
</div>
</div></SwiperSlide>
<SwiperSlide><div class="card">
<img src="./image/market-neskafe.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title"> قهوه فوری مخلوط 1 × 3 نسکافه بسته 20 عددی
 </h5>
<p class="card-text">
قهوه فوری مخلوط 1 × 3 نسکافه بسته 20 عددی
  </p>    
<a href="#" class="btn btn-top-offer">افزودن به سبد خرید</a>
</div>
</div></SwiperSlide>
<SwiperSlide><div class="card">
<img src="./image/market-dogh.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">دوغ بدون گاز با طعم نعناع عالیس 
</h5>
<p class="card-text">دوغ بدون گاز با طعم نعناع عالیس مقدار 1.5 لیتر بسته 6 عددی
 
</p>
<a href="#" class="btn btn-top-offer">افزودن به سبد خرید</a>
</div>
</div></SwiperSlide>
<SwiperSlide><div class="card">
<img src="./image/market-mahi.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">کنسرو ماهی تون در روغن آلیش وزن 180 گرم
  </h5>
<p class="card-text"> کنسرو ماهی تون در روغن آلیش وزن 180 گرم

</p>
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

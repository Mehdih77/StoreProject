import React from 'react'
import './topoffer.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, { Pagination } from 'swiper/core';
SwiperCore.use([Pagination]);


export default function TopOffer() {
    return (
        <section>
            <div className="container-fluid top-offer">
            <div className="container">
                <div className="row">
                <div className="col-md-3">
                    <img className="top-offer-right" src="image/7.png" />
                </div>
                <div className="col-md-9">
                <Swiper slidesPerView={1} spaceBetween={15} pagination={{
  "clickable": true
}} breakpoints={{
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
    "spaceBetween": 0
  }
}} className="mySwiper">
  <SwiperSlide><div class="card">
  <img src="./image/3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></SwiperSlide>
  <SwiperSlide><div class="card">
  <img src="./image/3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></SwiperSlide>
<SwiperSlide><div class="card">
  <img src="./image/3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></SwiperSlide>
<SwiperSlide><div class="card">
  <img src="./image/3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></SwiperSlide>
<SwiperSlide><div class="card">
  <img src="./image/3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></SwiperSlide>
<SwiperSlide><div class="card">
  <img src="./image/3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></SwiperSlide>
<SwiperSlide><div class="card">
  <img src="./image/3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></SwiperSlide>
  </Swiper></div>
                </div>
            </div>
            </div>
        </section>
    )
}

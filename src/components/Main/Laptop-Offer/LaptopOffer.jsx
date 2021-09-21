import './LaptopOffer.css';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from 'swiper/core';
import { useSelector } from 'react-redux';
import { allProducts } from '../../../redux/shopSlice';
SwiperCore.use([Navigation]);

export default function LaptopOffer() {

  const getAllProducts = useSelector(allProducts);
  
  const getLaptops = getAllProducts.filter(p => p.category === 'laptop');

  const laptopsList = getLaptops ? getLaptops.map((laptops) => {
    return (
      <SwiperSlide key={laptops.id}>
       <Link to={`/goods/laptop/${laptops.id}`}>
          <div className="card laptop-card-custom-style">
           <img src={laptops.img} className="card-img-top laptop-img" alt={laptops.name}/>
             <div className="card-body">
                <h5 className="laptop-card-title">{laptops.name}</h5>
                <p className="laptop-card-text">{laptops.price}تومان</p>
             </div>
          </div>
        </Link>
      </SwiperSlide>
    )
  }) : null;

    return (
        <>
    <section className="container laptop-offer">
        <div className="row">
        <h4 className="laptop-offer-top-title">پرفروش ترین لپ تاپ ها</h4>
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
          {laptopsList}
        </Swiper>
        </div>
    </section>
    </>
    )
}

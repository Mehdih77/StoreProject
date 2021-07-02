import React from 'react'
import '../../Style/main-style.css'
import './shopbasketpage.css'
import ShopList from './ShopList/ShopList'
import Price from './Price/Price'
import ShopBasketBanners from './ShopBasketBanners/ShopBasketBanners'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function ShopBasketPage() {
    return (
        <>
        <div className='body-custom-back-color'>
        <Header />
            <div className='container my-5'>
                     <div className='shop-list-top-title'>
                            سبد خرید
                    </div>
            <div className='row'>
            
                <div className='col-md-8'>
                         <ShopList />
                </div>
                <div className='col-md-4'>
                        <Price />
                </div>
            </div>
        </div>

        {/* <div className='container my-5'>
                     <div className='shop-list-top-title'>
                            سبد خرید
                    </div>
            <div className='row shop-basket-empty'>
                    <img src='./image/shop-basket.png' />
                    <p>سبد خرید شما خالی است!</p>
             </div>
             </div> */}

             <ShopBasketBanners />

            <Footer />

        </div>    
        </>
    )
}

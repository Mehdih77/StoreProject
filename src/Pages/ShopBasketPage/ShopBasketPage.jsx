import React from 'react'
import '../../Style/main-style.css'
import './shopbasketpage.css'
import ShopList from './ShopList/ShopList'
import Price from './Price/Price'
import ShopBasketBanners from './ShopBasketBanners/ShopBasketBanners'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


export default function ShopBasketPage({cartItems,onAdd,onRemove}) {

    

    return (
        <>
        <div className='body-custom-back-color'>
        <Header cartItems={cartItems} />
            <div className='container my-5'>
                     <div className='shop-list-top-title'>
                            سبد خرید
                    </div>
            <div className='row'>
                <div className='col-md-8'>
                { cartItems.length !==0 && <ShopList cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />}
                </div>
                <div className='col-md-4'>
                { cartItems.length !== 0 && <Price cartItems={cartItems} />}
                </div>
            </div>
        </div>

        { cartItems.length === 0 && 
            <div className='container'>
            <div className='row shop-basket-empty'>
                    <img src='./image/shop-basket.png' />
                    <p>سبد خرید شما خالی است!</p>
             </div>
             </div>}

             <ShopBasketBanners />

            <Footer />

        </div>    
        </>
    )
}

import React from 'react'
import './shopbasketbanners.css'

const ShopBasketBanners = () => {
    return (
        <div className='container'>
            <div className='row my-4 shop-basket-banners'>
                <div className='col-6 col-md-3 my-1'>
                    <img className='img-fluid' src='./image/basket-banner-1.jpg' alt='banner' />
                </div>
                <div className='col-6 col-md-3 my-1'>
                    <img className='img-fluid' src='./image/basket-banner-3.jpg' alt='banner' />
                </div>
                <div className='col-6 col-md-3 my-1'>
                    <img className='img-fluid' src='./image/basket-banner-2.jpg' alt='banner'/>
                </div>
                <div className='col-6 col-md-3 my-1'>
                    <img className='img-fluid' src='./image/basket-banner-4.jpg' alt='banner' />
                </div>
            </div>
        </div>
    )
}

export default React.memo(ShopBasketBanners);
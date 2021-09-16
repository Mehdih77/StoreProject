import React from 'react';
import '../../Style/main-style.css';
import './shopbasketpage.css';
import ShopList from './ShopList/ShopList';
import Price from './Price/Price';
import ShopBasketBanners from './ShopBasketBanners/ShopBasketBanners';
import {useSelector} from 'react-redux';
import {getCurrentProducts} from '../../redux/shopSlice';

export default function ShopBasketPage() {

    const currentProducts = useSelector(getCurrentProducts)

    return (
        <> 
            <div className='body-custom-back-color'>
                <div className='container my-5'>
                    <div className='shop-list-top-title'>
                        سبد خرید
                    </div>
                    <div className='row'>
                        <div className='col-md-8'>
                            {currentProducts.length !== 0 && <ShopList currentProducts={currentProducts}/>}
                        </div>
                        <div className='col-md-4'>
                            {currentProducts.length !== 0 && <Price/>}
                        </div>
                    </div>
                </div>

                {currentProducts.length === 0 && <div className='container'>
                    <div className='row shop-basket-empty'>
                        <img src='./image/shop-basket.png'/>
                        <p>سبد خرید شما خالی است!</p>
                    </div>
                </div>
                }
                <ShopBasketBanners/>
            </div> 
        </>
    )
}
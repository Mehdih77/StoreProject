import React from 'react';
import { useSelector } from 'react-redux';
import { getTotalPrice } from '../../../redux/shopSlice';
import './price.css';

export default function Price() {

    const stateTotalPrice = useSelector(getTotalPrice);

    //Calculate the Price of Items AND separate 3 by 3
    const totalPrice = stateTotalPrice && Number(stateTotalPrice.toFixed(3)).toLocaleString().split(/\s/).join(',');
    const calcOfferPrice = Number((stateTotalPrice > 500000 ? 50000 : 0).toFixed(3)).toLocaleString().split(/\s/).join(',');
    const calcFinalPrice = stateTotalPrice && (stateTotalPrice > 500000 ? Number((stateTotalPrice- 50000).toFixed(3)).toLocaleString().split(/\s/).join(',') : totalPrice);
    
    return (
        <div className='shop-price'>
            <div className='item-price d-flex justify-content-between'>
                <p>قیمت کالاها</p>
                <p>{totalPrice} تومان</p>
            </div>
            <div className='off-price d-flex justify-content-between'>
                <p>تخفیف کالاها</p>
                <p>{calcOfferPrice} تومان</p>
            </div>
            <div className='total-price d-flex justify-content-between'>
                <p>جمع سبد خرید </p>
                <p>{calcFinalPrice} تومان</p>
            </div>
            <button onClick={() => alert('مبارکههههه') } className='shop-price-button w-100'>ادامه فرآیند خرید</button>
        </div>
    )
}

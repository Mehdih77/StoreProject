import React from 'react'
import './price.css'

export default function Price({cartItems}) {

    //Calculate the Price of Items
    const itemsPrice = cartItems.reduce((acc,curr) => acc + curr.price * curr.qty , 0)
    const offPrice = itemsPrice > 500000 ? 50000 : 0;
    const totalPrice = itemsPrice - offPrice;

    // to separate Price 3 by 3
    let resultItemPrice = Number(itemsPrice.toFixed(3)).toLocaleString().split(/\s/).join(',');
    let resultOffPrice = Number(offPrice.toFixed(3)).toLocaleString().split(/\s/).join(',');
    let resultTotalPrice = Number(totalPrice.toFixed(3)).toLocaleString().split(/\s/).join(',');





    return (

        <div className='shop-price'>

                <div className='item-price d-flex justify-content-between'>
                    <p>قیمت کالاها</p>
                    <p>{resultItemPrice} تومان</p>
                </div>
                <div className='off-price d-flex justify-content-between'>
                    <p>تخفیف کالاها</p>
                    <p>{resultOffPrice} تومان</p>
                </div>
                <div className='total-price d-flex justify-content-between'>
                <p>جمع سبد خرید </p>
                    <p>{resultTotalPrice} تومان</p>
                </div>

                <button onClick={() => alert('مبارکههههه') } className='shop-price-button w-100'>ادامه فرآیند خرید</button>


        </div>

    )
}

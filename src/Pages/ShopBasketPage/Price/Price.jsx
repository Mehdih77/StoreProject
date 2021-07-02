import React from 'react'
import './price.css'

export default function Price() {
    return (

        <div className='shop-price'>

                <div className='item-price d-flex justify-content-between'>
                    <p>قیمت کالاها</p>
                    <p>7,598,000 تومان</p>
                </div>
                <div className='off-price d-flex justify-content-between'>
                    <p>تخفیف کالاها</p>
                    <p>150,000 تومان</p>
                </div>
                <div className='total-price d-flex justify-content-between'>
                <p>جمع سبد خرید </p>
                    <p>7,448,000 تومان</p>
                </div>

                <button className='shop-price-button w-100'>ادامه فرآیند خرید</button>


        </div>

    )
}

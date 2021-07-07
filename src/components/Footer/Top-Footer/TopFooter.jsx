import React from 'react'
import './topfooter.css'

export default function TopFooter() {
    return (
        <>
        <div className="container">
                <h2 className='shop-name-footer'>فروشگاه آنلاین شاپ</h2>
                <p className='support-footer-text'>
                تلفن پشتیبانی : 34567 - 012
 | 
هفت روز هفته، 24 ساعت شبانه‌روز پاسخگوی شما هستیم.
</p>
        </div>

        <div className='container top-footer-icons'>
            <div className='row top-footer-line-separotor my-3'>
               
            <p><i className="fas fa-shipping-fast goods-icon"></i> <span>امکان تحویل اکسپرس</span>  </p>

            <p><i className="fab fa-cc-paypal goods-icon"></i> <span>امکان پرداخت در محل </span>  </p>

            <p><i className="fas fa-exchange-alt goods-icon"></i> <span>7روز ضمانت تعویض  </span>  </p>

            <p><i className="fas fa-gem goods-icon"></i> <span>ضمانت اصل بودن کالا  </span>  </p>

            <p><i className="fas fa-headset goods-icon"></i> <span> 7روز هفته، 24ساعته </span>  </p>


             </div>
        </div>
        </>
    )
}

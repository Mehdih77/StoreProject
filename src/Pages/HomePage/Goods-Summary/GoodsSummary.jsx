import React from 'react'
import './goodsummary.css'

export default function GoodsSummary() {
    return (
        <section className="container goods-summary my-3">
            <p className="goods-summary-title">بیش از ۲،۰۰۰،۰۰۰ کالا در دسته‌بندی‌های مختلف
            </p>
            <div className='row '>
                <a
                    href='#!'
                    className='col-6 col-md-2 d-flex flex-column align-items-center goods-main'>
                    <i className="fas fa-tshirt goods-icon"></i>
                    <p className="goods-title my-2">پوشاک</p>
                    <p className="goods-qty">+60000 کالا</p>
                </a>
                <a
                    href='#!'
                    className='col-6 col-md-2 d-flex flex-column align-items-center goods-main'>
                    <i className="fas fa-tools goods-icon"></i>
                    <p className="goods-title my-2">ابزار و تجهیزات</p>
                    <p className="goods-qty">+60000 کالا</p>
                </a>
                <a
                    href='#!'
                    className='col-6 col-md-2 d-flex flex-column align-items-center goods-main'>
                    <i className="fas fa-utensils goods-icon"></i>
                    <p className="goods-title my-2">خانه و آشپزخانه</p>
                    <p className="goods-qty">+60000 کالا</p>
                </a>
                <a
                    href='#!'
                    className='col-6 col-md-2 d-flex flex-column align-items-center goods-main'>
                    <i className="fas fa-heartbeat goods-icon"></i>
                    <p className="goods-title my-2">سلامتی و زیبایی</p>
                    <p className="goods-qty">+60000 کالا</p>
                </a>
                <a
                    href='#!'
                    className='col-6 col-md-2 d-flex flex-column align-items-center goods-main'>
                    <i className="fas fa-futbol goods-icon"></i>
                    <p className="goods-title my-2">ورزشی</p>
                    <p className="goods-qty">+60000 کالا</p>
                </a>
                <a
                    href='#!'
                    className='col-6 col-md-2 d-flex flex-column align-items-center goods-main'>
                    <i className="fas fa-laptop goods-icon"></i>
                    <p className="goods-title my-2">کالای دیجیتال</p>
                    <p className="goods-qty">+60000 کالا</p>
                </a>
            </div>
        </section>
    )
}

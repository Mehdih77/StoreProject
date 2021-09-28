import React from 'react';
import { Link } from 'react-router-dom';
import './bottomfooter.css';

export default function BottomFooter() {
    return (
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-6 col-md-3'>
                <h5 className='bottom-footer-title'> در آنلاین شاپ </h5>
                    <ul className='bottom-footer-list'>
                        <li> <a href='#!'> اتاق خبر </a> </li>
                        <li> <a href='#!'> نحوه فروش </a> </li>
                        <li> <a href='#!'>فرصت های شغلی </a> </li>
                        <li> <Link to='/contact'>تماس با ما </Link> </li>
                        <li> <Link to='/aboutus'> درباره ما</Link> </li>
                    </ul>
                </div>
                <div className='col-6 col-md-3'>
                <h5 className='bottom-footer-title'>خدمات مشتریان</h5>
                    <ul className='bottom-footer-list'>
                        <li> <a href='#!'>پاسخ به پرسش های متدوال</a> </li>
                        <li> <a href='#!'>رویه های بازگرداندن کالا</a> </li>
                        <li> <a href='#!'>شرایط استفاده</a> </li>
                        <li> <a href='#!'>حریم خصوصی</a> </li>
                        <li> <a href='#!'>گزارش باگ</a> </li>
                    </ul>
                </div>
                <div className='col-6 col-md-3'>
                <h5 className='bottom-footer-title'> راهنمای خرید</h5>
                    <ul className='bottom-footer-list'>
                        <li> <a href='#!'> نحوه ثبت سفارش</a> </li>
                        <li> <a href='#!'> رویه ارسال سفارش </a> </li>
                        <li> <a href='#!'>شیوه های پرداخت </a> </li>
                    </ul>
                </div>
                <div className='col-6 col-md-3'>
                <h5 className='bottom-footer-title'> با ما همراه باشید</h5>
                   <div className='bottom-footer-contact'>
                   <ul className='bottom-footer-social'>
                        <div>
                            <li> <a href='#!'><i className="fab fa-instagram"></i> </a> </li>
                            <li> <a href='#!'> <i className="fab fa-telegram-plane"></i></a> </li>
                        </div>
                        <div>
                            <li> <a href='#!'> <i className="fab fa-linkedin"></i></a> </li>
                            <li> <a href='#!'> <i className="fab fa-youtube"></i></a> </li>
                        </div>
                    </ul>
                    <h5 className='input-news-title d-none d-md-block'>از جدیدترین تخفیف‌ها باخبر شوید</h5>
                    <div className='input-news d-none d-md-flex'>
                        <input autoComplete='off' type='email' placeholder='ایمیل خود را وارد کنید' name='email' />
                        <button type='submit'>ثبت</button>
                    </div>
                   </div>
                </div>
            </div>
            
        </div>
    )
}

import {useEffect, useState, useRef} from 'react';
import './Filters.css';
import Accordion from '../../../HOC/Accordion/Accordion';

export default function Filter() {

    return ( 
    <> 
    <section className='phone-page-filter mt-4'>
        <div className='post-free phone-page-post-free'>
            <div>
                <div className='post-free-title'>
                    <i className="fas fa-truck"></i>ارسال رایگان سفارش
                    <p className='post-free-text'>اولین سفارش کاربران جدید</p>
                </div>
            </div>
            <img className='post-free-img' src='/image/post-free.png' alt='free-post'/>
        </div>
        <div  className='phone-page-search-input' >
            <p>جستجو در نتایج :</p>
            <hr />
            <div>
                <i className="fas fa-search"></i>
                <input type="search" placeholder='نام محصول یا برند مورد نظر را  بنویسید ...' />
            </div>
        </div>
        <Accordion title='برند'>
                <label>
                    <div>
                        <input type="checkbox" />
                        سامسونگ
                    </div>
                    <p>Samsung</p>
                </label>
        </Accordion>
        <Accordion title='برند'>
            <label>
                <div>
                    <input type="checkbox" />
                    سامسونگ
                </div>
                <p>Samsung</p>
            </label>
        </Accordion>
    </section> 
    </>
    )
}
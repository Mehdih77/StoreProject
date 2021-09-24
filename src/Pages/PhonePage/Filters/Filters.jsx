import {useEffect, useState, useRef} from 'react';
import './Filters.css';
import Accordion from '../../../HOC/Accordion/Accordion';
import ToggleButton from '../../../HOC/Input/ToggleButton/ToggleButton';
import CheckBox from '../../../HOC/Input/CheckBox/CheckBox';

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
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Samsung' />
                    <span>سامسونگ</span>
                </div>
                <p>Samsung</p>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Xiaomi' />
                    <span>شیائومی</span>
                </div>
                <p>Xiaomi</p>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Apple' />
                    <span>شیائومی</span>
                </div>
                <p>Apple</p>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Nokia' />
                    <span>نوکیا</span>
                </div>
                <p>Nokia</p>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Motorola' />
                    <span>موتورولا</span>
                </div>
                <p>Motorola</p>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Honor' />
                    <span>آنر</span>
                </div>
                <p>Honor</p>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='LG' />
                    <span>ال جی</span>
                </div>
                <p>LG</p>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='HTC' />
                    <span>اچ تی سی</span>
                </div>
                <p>HTC</p>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Google' />
                    <span>گوگل</span>
                </div>
                <p>Google</p>
            </label>
        </Accordion>
        <Accordion title='فروشنده'>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='DigiKala' />
                    <span>دیجی کالا</span>
                </div>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='OfficialSeller' />
                    <span>فروشنده رسمی</span>
                </div>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='TopSeller' />
                    <span>فروشنده برگزیده</span>
                </div>
            </label>
        </Accordion>
        <div className='phone-page-toggle my-2'>
            <ToggleButton id='digiplus'>
               فقط کالاهای <img className='digiplus' src="/image/digiplus.svg" alt="digiplus digikala digi" /> 
            </ToggleButton>
        </div>
        <div className='phone-page-toggle sendBySeller my-2'>
            <div>
                <i className="fas fa-user-tie"></i>
                <p>با خرید از کالاهایی با امکان ارسال توسط فروشنده سفارش خود را زودتر تحویل بگیرید</p>
            </div>
            <ToggleButton id='sendBySeller'>
                امکان ارسال توسط فروشنده
            </ToggleButton>
        </div>
        <div className='phone-page-toggle my-2'>
            <ToggleButton id='immediateSending'>
                فقط ارسال فوری
            </ToggleButton>
        </div>
        <div className='phone-page-toggle my-2'>
            <ToggleButton id='availableGoods'>
                فقط کالاهای موجود
            </ToggleButton>
        </div>
        <div className='phone-page-toggle my-2'>
            <ToggleButton id='availableGoodsInStore'>
                فقط کالاهای موجود در انبار آنلاین شاپ
            </ToggleButton>
        </div>
    </section> 
    </>
    )
}
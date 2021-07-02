import React from 'react'
import './shoplist.css'

export default function ShopList() {
    return (
      <>
        <div className='shop-list'>
            <div class="card shop-list-card mb-3" >
  <div class="row">
    <div class="col-md-3">
      <img src="./image/phone2.jpg" class="card-img shop-list-img" alt="shop-img" />
    </div>
    <div class="col-md-9">
      <div class="card-body">
        <h5 class="card-title shop-list-card-title"> گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG دو سیم‌ کارت ظرفیت 256 گیگابایت و 8 گیگابایت رم</h5>
        <div class="card-text shop-list-card-body">
            <p> <i class="fas fa-award"></i> گارانتی اصالت و سلامت فیزیکی کالا</p>
            <p> <i class="fas fa-store"></i> آنلاین شاپ </p>
            <p> <i class="fas fa-shipping-fast"></i> ارسال توسط آنلاین شاپ </p>
        </div>
      </div>
      <div className='shop-list-qty'>
            <button className='shop-list-qty-add'>+</button>
                <p className='shop-list-qty-number'>1</p>
            <button className='shop-list-qty-remove'>-</button>
      </div>
      <div className='shop-list-price'>
            <p>۶,۷۹۹,۰۰۰ تومان</p>
      </div>
    </div>
  </div>
</div>
        </div>
        <div className='shop-list'>
            <div class="card shop-list-card mb-3" >
  <div class="row">
    <div class="col-md-3">
      <img src="./image/shoes.jpg" class="card-img shop-list-img" alt="shop-img" />
    </div>
    <div class="col-md-9">
      <div class="card-body">
        <h5 class="card-title shop-list-card-title"> کفش پیاده روی زنانه نیترو مدل PT کد 8050</h5>
        <div class="card-text shop-list-card-body">
            <p> <i class="fas fa-award"></i> گارانتی اصالت و سلامت فیزیکی کالا</p>
            <p> <i class="fas fa-store"></i> آنلاین شاپ </p>
            <p> <i class="fas fa-shipping-fast"></i> ارسال توسط آنلاین شاپ </p>
        </div>
      </div>
      <div className='shop-list-qty'>
            <button className='shop-list-qty-add'>+</button>
                <p className='shop-list-qty-number'>2</p>
            <button className='shop-list-qty-remove'>-</button>
      </div>
      <div className='shop-list-price'>
            <p>۷۹۹,۰۰۰ تومان</p>
      </div>
    </div>
  </div>
</div>
        </div>
    </>
    )
}

import React from 'react'
import './shoplist.css'

export default function ShopList() {
    return (
        
        <div className='shop-list'>
            <div class="card shop-card mb-3" >
  <div class="row">
    <div class="col-md-3">
      <img src="./image/phone2.jpg" class="card-img" alt="shop-img" />
    </div>
    <div class="col-md-9">
      <div class="card-body">
        <h5 class="card-title shop-card-title"> گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG دو سیم‌ کارت ظرفیت 256 گیگابایت و 8 گیگابایت رم</h5>
        <div class="card-text shop-card-body">
            <p> <i class="fas fa-award"></i> گارانتی اصالت و سلامت فیزیکی کالا</p>
            <p> <i class="fas fa-store"></i> آنلاین شاپ </p>
            <p> <i class="fas fa-shipping-fast"></i> ارسال توسط آنلاین شاپ </p>
        </div>
      </div>
      <div className='shop-qty'>
            <button className='shop-qty-add'>+</button>
                <p>2</p>
            <button className='shop-qty-remove'>-</button>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

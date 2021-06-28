import React from 'react'
import './maindetails.css'

export default function MainDetails() {
    return (
      <section className='container-fluid MainDetails-goodspage'>
            <section className='container my-4'>
           <div className='row'>
           <div className='col-6 col-md-1 goodspage-icons'>
                <ul>
                    <li><i title='افزودن به علاقه مندی ها' class="far fa-heart"></i></li>
                    <li><i title='اشتراک گذاری' class="fas fa-share-alt"></i></li>
                    <li><i title='اطلاع رسانی' class="far fa-bell"></i></li>
                    <li><i title='نمودار قیمت' class="far fa-chart-bar"></i></li>
                </ul>
            </div>
            <div className='col-6 col-md-3'>
                <img className='img-fluid img-detail' src='./image/phone2.jpg' />
            </div>
            <div className='col-md-5'>
                <h1 className='goods-name'> گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG دو سیم‌ کارت ظرفیت 256 گیگابایت و 8 گیگابایت رم
</h1>
                <p className='goods-like'> <i class="far fa-thumbs-up"></i>۸۶٪ (۵۷۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند.
  </p>
                <ul className='goods-detail-summary'>
                <p>ویژگی های محصول:</p>
                    <li><i class="fas fa-circle"></i>حافظه داخلی: 128 گیگابایت</li>
                    <li><i class="fas fa-circle"></i>شبکه های ارتباطی: 4G، 3G، 2G</li>
                    <li><i class="fas fa-circle"></i>دوربین‌های پشت گوشی: 3 ماژول دوربین</li>
                    <li><i class="fas fa-circle"></i>سیستم عامل: Android</li>
                    <li><i class="fas fa-circle"></i>توضیحات سیم کارت: سایز نانو (8.8 × 12.3 میلی‌متر)</li>
                </ul>
            
            <p className='goods-warning'><i class="fas fa-exclamation-circle"></i>هشدار سامانه همتا: حتما در زمان تحویل دستگاه، به کمک کد فعال‌سازی چاپ شده روی جعبه یا کارت گارانتی، دستگاه را از طریق #7777*، برای سیم‌کارت خود فعال‌سازی کنید. آموزش تصویری در آدرس اینترنتی hmti.ir/05</p>
            
            <div className='post-free'>
                <div>
                    <p className='post-free-title'><i class="fas fa-truck"></i>ارسال رایگان سفارش
                    <p className='post-free-text'>اولین سفارش کاربران جدید</p></p>
                    
                </div>
                <img className='post-free-img' src='./image/post-free.png' />
            </div>

            </div>

            <div className='col-md-3 goodspage-buy'>
                <p className='shop-title'>فروشنده</p>
                <div>
                <p className='shop-name'><i class="fas fa-store"></i>آنلاین شاپ</p>
                <p className='shop-like'><span>100% </span>رضایت خریداران | عملکرد <span>عالی</span></p>
                </div>
                <div className='shop-guaranty'>
                    <p><i class="fas fa-award"></i>گارانتی 18 ماهه آنلاین شاپ</p>
                </div>
                <div className='shop-post'>
                    <p><i class="fas fa-shipping-fast"></i>موجود در انبار فروشنده</p>
                </div>
                <p className='goods-price'>
                    <p className='goods-price-1'>قیمت فروشنده</p>
                    <p className='goods-price-2'>3,849,000 تومان</p>
                </p>
                <button className='shop-buy-button'>افزودن به سبد خرید</button>
            </div>
           </div>
        </section>
      </section>
    )
}

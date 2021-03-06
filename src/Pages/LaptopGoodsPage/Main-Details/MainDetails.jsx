import './maindetails.css';
import { useDispatch} from "react-redux";
import { addToBasket} from "../../../redux/shopSlice";
import { toast } from 'react-toastify';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import SwiperCore, {Navigation, Thumbs} from 'swiper/core';
import GoodsPageIcons from "../../../components/GoodPageIcons/GoodsPageIcons";
import PhotoGallery from "../../../components/PhotoGallery/PhotoGallery";
SwiperCore.use([Navigation, Thumbs]);

export default function MainDetails({getCurrentProducts}) {

    const dispatch = useDispatch();
    const hanldeAddItemToBasket = (items) => {
        dispatch(addToBasket(items));
        toast.success(`${getCurrentProducts?.name} .به سبد خرید افزوده شد`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }


    const itemPrice = getCurrentProducts && Number((getCurrentProducts.price).toFixed(3)).toLocaleString().split(/\s/).join(',');

    return (
        <section className='container-fluid MainDetails-goodspage'>
            <section className='container my-4'>
                <div className='row'>
                    <GoodsPageIcons getCurrentProducts={getCurrentProducts} />
                    <div className='col-6 col-md-3'>
                        <img className='img-fluid img-detail' src={getCurrentProducts?.img} alt={getCurrentProducts?.name}/>
                        <PhotoGallery getCurrentProducts={getCurrentProducts} />
                    </div>
                    <div className='col-md-5'>
                        <h1 className='goods-name'>
                            {getCurrentProducts?.name}
                        </h1>
                        <p className='goods-like'>
                            <i className="far fa-thumbs-up"></i>۸۹٪ (۴۷۴ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند.
                        </p>
                        <ul className='goods-detail-summary'>
                            <p>ویژگی های کالا:</p>
                            <li>
                                <i className="fas fa-circle"></i>اندازه صفحه نمایش: {getCurrentProducts?.screenSize}</li>
                            <li>
                                <i className="fas fa-circle"></i>سری پردازنده: {getCurrentProducts?.processor}
                            </li>
                            <li>
                                <i className="fas fa-circle"></i>ظرفیت حافظه RAM: {getCurrentProducts?.ramSize}</li>
                            <li>
                                <i className="fas fa-circle"></i>نوع حافظه RAM: {getCurrentProducts?.ramType}</li>
                            <li>
                                <i className="fas fa-circle"></i>سازنده پردازنده گرافیکی: {getCurrentProducts?.graphic}</li>
                        </ul>

                        <p className='goods-warning'>
                            <i className="fas fa-exclamation-circle"></i>
                            امکان برگشت کالا در گروه لپ تاپ با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمپ کالا باز نشده باشد.
                        </p>

                        <div className='post-free'>
                            <div>
                                <div className='post-free-title'>
                                    <i className="fas fa-truck"></i>ارسال رایگان سفارش
                                    <p className='post-free-text'>اولین سفارش کاربران جدید</p>
                                </div>
                            </div>
                            <img className='post-free-img' src='/image/post-free.png' alt='free-post'/>
                        </div>
                    </div>
                    <div className='col-md-3 goodspage-buy'>
                        <p className='shop-title'>فروشنده</p>
                        <div className='shop-hover'>
                            <div className='shop-rating'>
                                <p className='shop-rating-name'>
                                    <i className="fas fa-store shop-rating-icon"></i>آنلاین شاپ</p>
                                <div>
                                    <p className='shop-rating-top-total-percent'>95.9%</p>
                                    <p className='shop-rating-top-title'>رضایت خریداران از کیفیت کالا</p>
                                    <p className='shop-rating-total'>از مجموع 35 نفر</p>
                                    <div className="progress shop-rating-progress">
                                        <div
                                            className="progress-bar"
                                            style={{
                                            width: '60%'
                                        }}
                                            role="progressbar"
                                            aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                        <div
                                            className="progress-bar"
                                            style={{
                                            width: '30%'
                                        }}
                                            role="progressbar"
                                            aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                        <div
                                            className="progress-bar"
                                            style={{
                                            width: '10%'
                                        }}
                                            role="progressbar"
                                            aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                    </div>
                                    <p className='shop-rating-progress-1'>کاملا راضی</p>
                                    <p className='shop-rating-progress-2'>بدون نظر</p>
                                    <div className='shop-rating-bottom'>
                                        <p className='shop-rating-bold-vote'>عالی</p>
                                        <p className='shop-rating-total-percent'>عملکرد کلی فروشنده</p>
                                        <div className='shop-rating-percent'>
                                            <div>
                                                <p className='shop-rating-percent-1'>99.6%</p>
                                                <p className='shop-rating-percent-2'>تامین به موقع</p>
                                            </div>
                                            <div>
                                                <p className='shop-rating-percent-1'>100%</p>
                                                <p className='shop-rating-percent-2'>تعهد ارسال
                                                </p>
                                            </div>
                                            <div>
                                                <p className='shop-rating-percent-1'>99.7%</p>
                                                <p className='shop-rating-percent-2'>
                                                    بدون ثبت مرجوعی
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='shop-name'>
                                <i className="fas fa-store"></i>آنلاین شاپ</p>
                            <p className='shop-like'>
                                <span>100%
                                </span> رضایت خریداران | عملکرد
                                <span> عالی</span>
                            </p>
                        </div>
                        <div className='shop-guaranty'>
                            <p>
                                <i className="fas fa-award"></i>گارانتی 24 ماهه آنلاین شاپ</p>
                        </div>
                        <div className='shop-post'>
                            <p>
                                <i className="fas fa-shipping-fast"></i>موجود در انبار فروشنده</p>
                        </div>
                        <div className='goods-price'>
                            <p className='goods-price-1'>قیمت فروشنده</p>
                            <p className='goods-price-2'>{itemPrice} تومان</p>
                        </div>
                        <button onClick={() => hanldeAddItemToBasket(getCurrentProducts)} className='shop-buy-button'>افزودن به سبد خرید</button>
                    </div>
                </div>
            </section>
        </section>
    )
}

import React, {useState} from "react";
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import './maindetails.css';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import SwiperCore, {Navigation, Thumbs} from 'swiper/core';
import { useDispatch} from "react-redux";
import { addToBasket} from "../../../redux/shopSlice";
import { useSelector } from "react-redux";
import { addFavorite, removeFavorite, selectAllFavorite } from "../../../redux/favoriteSlice";
import { addNotice, removeNotice, selectAllNotice } from "../../../redux/noticeSlice";
SwiperCore.use([Navigation, Thumbs]);

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const {
        children,
        classes,
        onClose,
        ...other
    } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose
                ? (
                    <IconButton
                        aria-label="close"
                        className={classes.closeButton}
                        onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>
                )
                : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);

export default function MainDetails({getCurrentProducts}) {

    // gallery modal
    const [thumbsSwiper,setThumbsSwiper] = useState(null);
    const [open,setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();
    const hanldeAddItemToBasket = (items) => {
        dispatch(addToBasket(items));
    }

    const allFavorite = useSelector(selectAllFavorite);
    const allNotice = useSelector(selectAllNotice);
    // add & remove favorite item 
    const existFavorite = getCurrentProducts && allFavorite.findIndex(item => item.id === getCurrentProducts.id);
    const handleFavorite = () => {
        if (existFavorite >= 0) {
            dispatch(removeFavorite(getCurrentProducts.id))
        } else {
            dispatch(addFavorite(getCurrentProducts))
        }
    }
    // add & remove notice item 
    const existNotice = getCurrentProducts && allNotice.findIndex(item => item.id === getCurrentProducts.id);
    const handleNotice = () => {
        if (existNotice >= 0) {
            dispatch(removeNotice(getCurrentProducts.id))
        } else {
            dispatch(addNotice(getCurrentProducts))
        }
    }
    

    const itemPrice = getCurrentProducts && Number((getCurrentProducts.price).toFixed(3)).toLocaleString().split(/\s/).join(',');

    return (
        <section className='container-fluid MainDetails-goodspage'>
            <section className='container my-4'>
                <div className='row'>
                    <div className='col-6 col-md-1 goodspage-icons'>
                        <ul>
                            <li>
                                {existFavorite >= 0 ? <i onClick={handleFavorite} class="fas fa-heart active-favorite"></i>
                                : <i onClick={handleFavorite} title='افزودن به علاقه مندی ها' className="far fa-heart"></i>
                                }
                            </li>
                            <li>
                                <i title='اشتراک گذاری' className="fas fa-share-alt"></i>
                            </li>
                            <li>
                                {existNotice >= 0 ? <i onClick={handleNotice} title='حذف از اطلاع رسانی' class="fas fa-bell active-notice"></i>
                                : <i onClick={handleNotice} title='افزودن به اطلاع رسانی' className="far fa-bell"></i>
                                }
                            </li>
                            <li>
                                <i title='نمودار قیمت' className="far fa-chart-bar"></i>
                            </li>
                        </ul>
                    </div>
                    <div className='col-6 col-md-3'>
                        <img className='img-fluid img-detail' src={getCurrentProducts?.img} alt={getCurrentProducts?.name}/>
                        <div>
                            <Button onClick={handleClickOpen}>
                                <p className='gallery-button'>گالری تصاویر</p>
                            </Button>
                            <Dialog
                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={open}>
                                <DialogTitle
                                    id="customized-dialog-title"
                                    className='customized-dialog-title-goodspage'
                                    onClose={handleClose}></DialogTitle>
                                <DialogContent dividers>
                                    <Swiper
                                        style={{
                                        '--swiper-navigation-color': '#fff',
                                        '--swiper-pagination-color': '#fff'
                                    }}
                                        spaceBetween={10}
                                        navigation={true}
                                        thumbs={{
                                        swiper: thumbsSwiper
                                    }}
                                        className="mySwiper2">
                                        <SwiperSlide><img className='img-fluid' src={getCurrentProducts?.img_1} alt={getCurrentProducts?.name}/></SwiperSlide>
                                        <SwiperSlide><img className='img-fluid' src={getCurrentProducts?.img_2} alt={getCurrentProducts?.name}/></SwiperSlide>
                                        <SwiperSlide><img className='img-fluid' src={getCurrentProducts?.img_3} alt={getCurrentProducts?.name}/></SwiperSlide>
                                        <SwiperSlide><img className='img-fluid' src={getCurrentProducts?.img_4} alt={getCurrentProducts?.name}/></SwiperSlide>
                                    </Swiper>
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesVisibility={true}
                                        watchSlidesProgress={true}
                                        className="mySwiper">
                                        <SwiperSlide><img className='img-fluid' src={getCurrentProducts?.img_1} alt={getCurrentProducts?.name}/></SwiperSlide>
                                        <SwiperSlide><img className='img-fluid' src={getCurrentProducts?.img_2} alt={getCurrentProducts?.name}/></SwiperSlide>
                                        <SwiperSlide><img className='img-fluid' src={getCurrentProducts?.img_3} alt={getCurrentProducts?.name}/></SwiperSlide>
                                        <SwiperSlide><img className='img-fluid' src={getCurrentProducts?.img_4} alt={getCurrentProducts?.name}/></SwiperSlide>
                                    </Swiper>
                                </DialogContent>
                            </Dialog>
                        </div>
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

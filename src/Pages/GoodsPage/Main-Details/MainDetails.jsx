import React, { useState } from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import './maindetails.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import SwiperCore, {
  Navigation,Thumbs
} from 'swiper/core';
SwiperCore.use([Navigation,Thumbs]);

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
  


export default function MainDetails() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
                <div>
      <Button className='gallery-button' onClick={handleClickOpen}>
گالری تصاویر
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        </DialogTitle>
        <DialogContent dividers>
        <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
  <SwiperSlide><img className='img-fluid' src="./image/phone-21.jpg" /></SwiperSlide>
  <SwiperSlide><img className='img-fluid' src="./image/phone-22.jpg" /></SwiperSlide>
  <SwiperSlide><img className='img-fluid' src="./image/phone-23.jpg" /></SwiperSlide>
  <SwiperSlide><img className='img-fluid' src="./image/phone-24.jpg" /></SwiperSlide>
  <SwiperSlide><img className='img-fluid' src="./image/phone-25.jpg" /></SwiperSlide>
  <SwiperSlide><img className='img-fluid' src="./image/phone-26.jpg" /></SwiperSlide>
  </Swiper>
  <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true} className="mySwiper">
  <SwiperSlide><img className='img-fluid' src="./image/phone-21.jpg" /></SwiperSlide>
  <SwiperSlide><img className='img-fluid' src="./image/phone-22.jpg" /></SwiperSlide>
  <SwiperSlide><img className='img-fluid' src="./image/phone-23.jpg" /></SwiperSlide>
  <SwiperSlide><img className='img-fluid' src="./image/phone-24.jpg" /></SwiperSlide>
  <SwiperSlide><img className='img-fluid' src="./image/phone-25.jpg" /></SwiperSlide>
  <SwiperSlide><img className='img-fluid' src="./image/phone-26.jpg" /></SwiperSlide>
   </Swiper>
        </DialogContent>
      </Dialog>
    </div>
            </div>




            <div className='col-md-5'>
                <h1 className='goods-name'> گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG دو سیم‌ کارت ظرفیت 256 گیگابایت و 8 گیگابایت رم
</h1>
                <p className='goods-like'> <i class="far fa-thumbs-up"></i>۸۶٪ (۵۷۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند.
  </p>
                <ul className='goods-detail-summary'>
                <p>ویژگی های محصول:</p>
                    <li><i class="fas fa-circle"></i>حافظه داخلی: 256 گیگابایت</li>
                    <li><i class="fas fa-circle"></i>شبکه های ارتباطی: 4G، 3G، 2G</li>
                    <li><i class="fas fa-circle"></i>دوربین‌های پشت گوشی: 4 ماژول دوربین</li>
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
                <div className='shop-hover'>
                <div className='shop-rating'>
                    <p className='shop-rating-name'><i class="fas fa-store shop-rating-icon"></i>آنلاین شاپ</p>
                    <div>
                    <p className='shop-rating-top-total-percent'>92.7%</p>
                        <p className='shop-rating-top-title'>رضایت خریداران از کیفیت کالا</p>
                        <p className='shop-rating-total'>از مجموع 20 نفر</p>
                        <div class="progress shop-rating-progress">
                                                <div class="progress-bar" style={{width:'60%'}} role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                                <div class="progress-bar" style={{width:'30%'}} role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                                <div class="progress-bar" style={{width:'10%'}} role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                                <p className='shop-rating-progress-1'>کاملا راضی</p>
                                <p className='shop-rating-progress-2'>بدون نظر</p>
                                    <div className='shop-rating-bottom'>
    <p className='shop-rating-bold-vote'>عالی</p>
    <p className='shop-rating-total-percent'>عملکرد کلی فروشنده</p>
    <div className='shop-rating-percent'>
        <div>
            <p className='shop-rating-percent-1'>100%</p>
            <p className='shop-rating-percent-2'>تامین به موقع</p>
        </div>
        <div>
            <p className='shop-rating-percent-1'>98%</p>
            <p className='shop-rating-percent-2'>تعهد ارسال </p>
        </div>
        <div>
            <p className='shop-rating-percent-1'>99.9%</p>
            <p className='shop-rating-percent-2'> بدون ثبت مرجوعی </p>
        </div>
    </div>
</div>
                    </div>
                </div>
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
                    <p className='goods-price-2'>۶,۷۹۹,۰۰۰ تومان</p>
                </p>
                <button className='shop-buy-button'>افزودن به سبد خرید</button>
            </div>
           </div>
        </section>
      </section>
    )
}

import React from 'react';
import './aboutuspage.css';
import '../../Style/main-style.css';

export default function AboutUsPage() {
    return (
        <>
            <section className='aboutUs'>
                <div className='container-fluid aboutUs-header my-4'>
                    <div className="container">
                        <div className="row">
                            <div className="aboutUs-header-title col-md-5">
                                <p>آنلاین شاپ</p>
                                <p>اولین مقصد خرید آنلاین در ایران</p>
                                <p>می‌خواستیم یک بازار مدرن بر پایه تکنولوژی بسازیم که اولین مرجع آنلاین و مورداعتماد «شما» باشد.</p>
                            </div>
                            <div className="col-md-7">
                                <img className='img-fluid' src="image/aboutus-1.png" alt="aboutsus" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container aboutUs-business my-2'>
                    <p className='aboutUs-business-top-title'>حرفی برای گفتن در تجارت الکترونیک</p>
                    <p className='aboutUs-business-bottom-title'>در سال ۱۳۸۵ با سرمایه اندکی شروع کردیم و حالا این عددها، سهم بزرگ ما از بازار تجارت الکترونیک را نشان می‌دهد.</p>
                    <div className='aboutUs-business-topics pb-3'>
                        <div className='aboutUs-business-topics-single'>
                            <i className="fas fa-store"></i>
                            <p>۱۵۰،۰۰۰+</p>
                            <p>کسب‌و‌کار و فروشنده</p>
                            <a href="#!">فروشنده شوید <span>{`>`}</span></a>
                        </div>
                        <div className='aboutUs-business-topics-single'>
                            <i className="fas fa-clipboard-check"></i>
                            <p>۴،۵۰۰،۰۰۰+</p>
                            <p>تنوع کالایی</p>
                            <a href="#!"> کالاها را ببینید <span>{`>`}</span></a>
                        </div>
                        <div className='aboutUs-business-topics-single'>
                            <i className="fas fa-users"></i>
                            <p>۳۰،۰۰۰،۰۰۰+</p>
                            <p>بازدید یکتای ماهانه</p>
                            <a href="#!"> عضو دیجی کالا شوید <span>{`>`}</span></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


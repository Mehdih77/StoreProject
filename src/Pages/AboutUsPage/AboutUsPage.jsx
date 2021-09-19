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
                <div className='container aboutUs-goals my-2'>
                    <div className="row">
                        <div className="aboutUs-goals-top-right">
                           <div>
                            <p>چشم‌اندازمان کجاست؟</p>
                            <p>چشم‌اندازمان این است که در صنعت تجارت الکترونیک، بهترین پلتفرم در خاورمیانه باشیم.</p>
                           </div>
                        </div>
                        <div className="aboutUs-goals-top-left">
                            <div>
                            <p>ماموریتمان چیست؟</p>
                            <p>استفاده از فناوری برای خلق تجربه خوشایند خرید برای مشتریان، توانمندسازی کسب‌وکارهای ایرانی و کمک به گذار آن‌ها به اقتصاد دیجیتال برای دستیابی به بازاری به‌وسعت ایران و خاورمیانه. همچنین رشد شایستگی‌های حرفه‌ای کارکنان مجموعه یکی از ماموریت‌های ماست.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="aboutUs-goals-bottom my-2">
                            <p className="aboutUs-goals-bottom-title">ارزش‌هایمان کدام است؟</p>
                            <div className='aboutUs-goals-bottom-subjects'>
                                <div>
                                    <p>مشتری‌محوری</p>
                                    <p>کنارتان هستیم، نه مقابلتان. فقط به فکر سود نیستیم. شما همیشه اولویت دارید.</p>
                                </div>
                                <div>
                                    <p>شفافیت</p>
                                    <p>همه‌چیز را صادقانه منعکس می‌کنیم تا با دیدی باز و آگاهانه تصمیم‌گیری کنید.</p>
                                </div>
                                <div>
                                    <p>مسئولیت‌ پذیری</p>
                                    <p>مسئولیت تمام کارهایمان را می‌پذیریم. اگر اشتباه کنیم، عذرخواهی و جبران می‌کنیم.</p>
                                </div>
                                <div>
                                    <p>چابکی</p>
                                    <p>سرعت، ویژگی اصلی کار ماست. چون وقت عزیز است و تنها یک بار زندگی می‌کنیم.</p>
                                </div>
                                <div>
                                    <p>نوآفرینی</p>
                                    <p>برخی از نوآوری‌های ما، برای خودمان هم تازگی دارد و در کنار شما تازه تجربه می‌کنیم.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container aboutUs-wlcbazzar py-4'>
                    <div className="row">
                        <img className='img-fluid col-md-5' src="image/aboutus-5.png" alt="bazzar welcome" />
                        <div className='col-md-7 aboutUs-wlcbazzar-text'>
                            <p>به بازارگاه خوش آمدید!</p>
                            <p>در ۱۰ سال اول، فقط به شکل خرده‌فروشی آنلاین فعالیت می‌کردیم و دیجی‌کالا تنها فروشنده در وب‌سایت خود بود. اما از سال ۱۳۹۶ مدل کسب‌وکارمان را به بازارگاه (Marketplace) تغییر دادیم. حالا دیجی‌کالا هیچ تفاوتی با ۱۵۰ هزار فروشنده دیگر در این وب‌سایت ندارد و همه در کنار هم فعالیت می‌کنند. در آینده می‌خواهیم یک میلیون کسب‌وکار ایرانی را به بازار ۲۰۰ میلیون‌ نفری منطقه وصل کنیم.</p>
                            <button>فروشنده دیجی کالا شوید!</button>
                        </div>
                    </div>
                </div>
                <div className='container aboutUs-store'>
                    <p>یک زمین به اندازه یک سرزمین</p>
                    <p>دیجی‌کالا در زمینه انبارداری، در خاورمیانه حرفی برای گفتن دارد. این انبارها با مساحتی معادل ۹۵ هزار مترمربع، می‌توانند «۶ میلیون کالا» را در خود جای دهند و روزانه «۸۵۰ هزار کالا» را پردازش کنند. پراکندگی این انبارها در تمام استان‌های ایران باعث شده تا همه به صورت برابر امکان استفاده از دیجی‌کالا را داشته باشند. افتتاح مراکز جدید پردازش سفارش، دیجی‌کالا را به یکی از ظرفیت‌های بزرگ پردازش سفارش کالا در خاورمیانه تبدیل کرده است.</p>
                </div>
            </section>
        </>
    )
}


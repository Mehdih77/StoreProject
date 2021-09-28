import React from 'react';
import './contactpage.css';

export default function ContactPage() {
    return (
        <>
        <section className='contactPage-body' >
                <div className='container my-4'>
                    <div className='contactus-form'>
                        <div className='contactus-title'>
                            <p className='contactus-title-header'> تماس با آنلاین شاپ</p>
                            <div className='contactus-title-footer'>
                                <p>لطفاً پیش از ارسال ایمیل یا تماس تلفنی، ابتدا پرسش‌های متداول را مشاهده کنید</p>
                                <button>پرسش های متداول</button>
                            </div>
                        </div>
                        <hr />
                        <p className='contactus-inputs-title'>برای پیگیری یا سوال درباره سفارش و ارسال پیام بهتر است از فرم زیر استفاده کنید.</p>
                        <div className='col-12'>
                            <label className='col-md-6'>
                                <p>موضوع</p>
                                <select className='w-100' >
                                    <option value="">-- انتخاب موضوع --</option>
                                    <option value="">پیشنهاد</option>
                                    <option value="">انتقاد یا شکایت</option>
                                    <option value="">خدمات پس از فروش</option>
                                    <option value="">استعلام گارانتی</option>
                                </select>
                            </label>
                            <label className='col-md-6'>
                                <p>نام و نام خانوادگی</p>
                                <input className='w-100' type="text" />
                            </label>
                        </div>
                        <div className='col-12'> 
                            <label className='col-md-6 w-100'>
                                <p>ایمیل</p>
                                <input className='w-100' type="email" />
                            </label>
                            <label className='col-md-6 w-100'>
                                <p>تلفن تماس</p>
                                <input className='w-100' type="text" />
                            </label>
                        </div>
                        <div className='col-12'>
                            <label className='col-md-12'>
                                <p>متن پیام</p>
                                <input className='w-100 input-text-form' type="text" />
                            </label>
                        </div>
                        <div className='contactus-submit-form-btn'>
                            <button>ثبت و ارسال</button>
                        </div>
                        </div>
                    <div className='contactus-holiday my-4'>
                        <p className='contactus-holiday-title'>تعطیلات آنلاین شاپ</p>
                        <div className='contactus-holiday-details'>
                            <p>روزهایی که به دلیل تعطیلی رسمی، دیجی‌کالا هیچ‌گونه پاسخگویی، سرویس‌دهی و خدماتی ندارد، در سال ۱۴۰۰ به شرح زیر است:</p>
                            <div className='contactus-holiday-dates'>
                                <div className='contactus-holiday-dates-g'>
                                    <div className='contactus-holiday-dates-d'>
                                        <p>۱۳</p>
                                        <p>فروردین</p>
                                        <hr />
                                        <p>روز طبیعت</p>
                                    </div>
                                    <div className='contactus-holiday-dates-d'>
                                        <p>۱۴</p>
                                        <p>خرداد</p>
                                        <hr />
                                        <p>رحلت امام خمینی(ره) </p>
                                    </div>
                                    <div className='contactus-holiday-dates-d'>
                                        <p>۲۷</p>
                                        <p>مرداد</p>
                                        <hr />
                                        <p>تاسوعا</p>
                                    </div>
                                    <div className='contactus-holiday-dates-d'>
                                        <p>۲۸</p>
                                        <p>مرداد</p>
                                        <hr />
                                        <p>عاشورا</p>
                                    </div>
                                </div>
                                <div className='contactus-holiday-dates-g'>
                                <div className='contactus-holiday-dates-d'>
                                        <p>۵</p>
                                        <p>مهر</p>
                                        <hr />
                                        <p>اربعین حسینی</p>
                                    </div>
                                    <div className='contactus-holiday-dates-d'>
                                        <p>۱۳</p>
                                        <p>مهر</p>
                                        <hr />
                                        <p>رحلت حضرت رسول اکرم</p>
                                    </div>
                                    <div className='contactus-holiday-dates-d'>
                                        <p>۲۲</p>
                                        <p>بهمن</p>
                                        <hr />
                                        <p>سالگرد پیروزی انقلاب اسلامی</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contactus-details'>
                        <p className='contactus-details-title'>اطلاعات آنلاین شاپ</p>
                        <div className='contactus-details-address col-md-12'>
                            <div className="row">
                            <div className='contactus-details-addresses col-md-6'>
                                <div>
                                    <p>دفتر مرکزی</p>
                                    <p>استان تهران - شهر تهران - خیابان گاندی جنوبی - نبش خیابان ۲۱ - پلاک ۲۸</p>
                                </div>
                                <div>
                                    <p>مراکز امور مشتریان</p>
                                    <p>تهران، شهرک غرب، بلوار فرحزادی، نبش سیمای ایران، مرکز خرید پلاتین طبقه اول، پلاک ۱۰۷ (شنبه تا جمعه ۱۰ الی ۲۱ به جز ایام تعطیل رسمی)</p>
                                    <p>تهران، بزرگراه رسالت شرق به غرب بعد از خیابان حیدرخانی،روبروی خیابان رودباری (مهر) پلاک ۵۴۹ (شنبه تا جمعه ۱۰ الی ۲۱ به جز ایام تعطیل رسمی)</p>
                                    <p>تهران، فلکه دوم صادقیه، بلوار آیت الله کاشانی، نرسیده به پمپ بنزین، جنب داروخانه‌ی دکتر اصفهانی پلاک ۱۵ (شنبه تا جمعه ۱۰ الی ۲۱ به جز ایام تعطیل رسمی)</p>
                                </div>
                                <div>
                                    <p>خدمات پس از فروش</p>
                                    <p>لطفاً کالا را برای بازگرداندن و ارسال آن به خدمات پس از فروش دیجی‌کالا از طریق پست، تنها به صندوق پستی 6789-12345 ارسال کنید. (شما می‌توانید از طریق بخش سفارش‌های من اقدام به بازگردانی کالا کنید)</p>
                                </div>
                            </div>
                            <div className='contactus-details-address-map col-md-6'>
                             <img className='' src="https://i.stack.imgur.com/yEshb.gif" alt="map address" />
                            </div>
                            </div>
                        </div>
                        <hr />
                        <div className='contactus-details-phones'>
                            <p><i className="fas fa-phone"></i> تلفن تماس و فکس<span> ۶۱۹۳۰۰۰۰ - ۰۲۱</span></p>
                            <p><i className="fas fa-envelope"></i> ایمیل سازمانی <span>mehdi.havaei77@gmail.com</span></p>
                            <p><i className="far fa-clock"></i> پاسخگویی ۲۴ ساعته و ۷ روز هفته</p>
                        </div>
                        <hr />
                        <div className='contactus-details-info'>
                            <p><i className="fas fa-info-circle"></i>توجه داشته باشید که 300061930007 ، 300061930000 ، 1000619300 و 100061930000 تنها شماره‌هایی هستند که دیجی‌کالا از طریق آن برای کاربران و مشتریان خود پیامک (اس ام اس) ارسال می‌کند. بنابراین ارسال هرگونه پیامک تحت عنوان دیجی‌کالا، با هر شماره دیگری تخلف و سوء استفاده از نام دیجی‌کالا است. در صورت دریافت چنین پیامکی، لطفاً جهت پیگیری قانونی آن را به <strong>mehdi.havaei77@gmail.com</strong> اطلاع دهید.
                            قابل ذکر است که این شماره‌ها تنها سامانه ارسال پیامک هستند و وضعیت پردازش سفارشات مشتریان، رویدادها، خدمات و سرویس‌های ویژه دیجی‌کالا را به اطلاع کاربران می‌رسانند. لطفاً توجه داشته باشید که امکان دریافت و رسیدگی به پیام‌های شما از طریق این شماره‌ها وجود ندارد.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

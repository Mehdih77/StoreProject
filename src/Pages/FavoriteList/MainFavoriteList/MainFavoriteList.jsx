import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainFavoriteList.css';

export default function MainFavoriteList() {

    const [activeTabA, setActiveTabA] = useState(true);
    const [activeTabB, setActiveTabB] = useState(false);
    const [activeTabC, setActiveTabC] = useState(false);
    const handleActiveTabA = () => {
        setActiveTabB(false);
        setActiveTabC(false);
        setActiveTabA(true);
    }
    const handleActiveTabB = () => {
        setActiveTabA(false);
        setActiveTabC(false);
        setActiveTabB(true);
    }
    const handleActiveTabC = () => {
        setActiveTabA(false);
        setActiveTabB(false);
        setActiveTabC(true);
    }

    return (
    <section className='MainFavoriteList'>
        <ul className="nav nav-tabs favoritelist-nav-tabs" id="myTab" role="tablist">
            <li onClick={handleActiveTabA} className={`nav-item ${activeTabA ? "activeTab" : ''}`} role="presentation">
                <a

                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true">کالاهای مورد علاقه</a>
            </li>
            <li onClick={handleActiveTabB} className={`nav-item ${activeTabB ? "activeTab" : ''}`} role="presentation">
                <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false">لیست های عمومی</a>
            </li>
            <li onClick={handleActiveTabC} className={`nav-item ${activeTabC ? "activeTab" : ''}`} role="presentation">
                <a
                    className="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#contact"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false">اطلاع رسانی ها</a>
            </li>
        </ul>
        <div className="tab-content" id="myTabContent">
            <div
                className="tab-pane fade show active favoritelist-tab-pane"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab">
                <div className="row">

                    <div className='empty-list'>
                        <img src="/image/empty-favoritelist.svg" alt="empty-list" />
                        <p>لیست علاقه‌مندی‌های شما خالی است.</p>
                    </div>

                {/* <div className='col-md-6 favoritelist-detail'>
                    <img className='img-fluid' src="/image/laptop1.jpg" alt="favorite digikala" />
                    <div>
                        <div>
                            <div className='favoritelist-detail-name'>
                                <p>لپ تاپ 15 اینچی ایسوس مدل VivoBook R521JA-BQ083</p>
                                <button><i className="far fa-trash-alt"></i></button>
                            </div>
                            <div className='favoritelist-detail-price'>
                                <p>13,990,000 تومان</p>
                            </div>
                        </div>
                        <Link className='favoritelist-detail-link'>مشاهده محصول<i className='fas fa-chevron-down'></i></Link>
                    </div>
                </div>
                <div className='col-md-6 favoritelist-detail'>
                    <img className='img-fluid' src="/image/laptop1.jpg" alt="favorite digikala" />
                    <div>
                        <div>
                            <div className='favoritelist-detail-name'>
                                <p>لپ تاپ 15 اینچی ایسوس مدل VivoBook R521JA-BQ083</p>
                                <button><i className="far fa-trash-alt"></i></button>
                            </div>
                            <div className='favoritelist-detail-price'>
                                <p>13,990,000 تومان</p>
                            </div>
                        </div>
                        <Link className='favoritelist-detail-link'>مشاهده محصول<i className='fas fa-chevron-down favoritelist-detail-icon'></i></Link>
                    </div>
                </div>
                <div className='col-md-6 favoritelist-detail'>
                    <img className='img-fluid' src="/image/laptop1.jpg" alt="favorite digikala" />
                    <div>
                        <div>
                            <div className='favoritelist-detail-name'>
                                <p>لپ تاپ 15 اینچی ایسوس مدل VivoBook R521JA-BQ083</p>
                                <button><i className="far fa-trash-alt"></i></button>
                            </div>
                            <div className='favoritelist-detail-price'>
                                <p>13,990,000 تومان</p>
                            </div>
                        </div>
                        <Link className='favoritelist-detail-link'>مشاهده محصول<i className='fas fa-chevron-down favoritelist-detail-icon'></i></Link>
                    </div>
                </div> */}
                </div>
            </div>
            <div
                className="tab-pane fade generallist-detail"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab">
                <div className='generallist-detail-top'>
                    <p>اینجا می‌توانید مجموعه‌ای از محصولات را با هر کسی به اشتراک بگذارید.</p>
                    <button>
                        <span>+</span>
                        لیست جدید
                    </button>
                </div>
                <div className='generallist-detail-middle'>
                    <img className='img-fluid mt-3' src="/image/generallist-middle.png" alt="generallist idea list" />
                    <p>هنوز هیچ لیستی نساخته‌اید!</p>
                    <h5>برای شروع میتوانید از این ایده‌ها استفاده کنید:</h5>
                </div>
                <div className="generallist-detail-bottom">
                        <div className="generallist-detail-bottom-content">
                            <img className='img-fluid' src="/image/generallist-bottom-1.svg" alt="generallist-detail-bottom-content" />
                            <p>پیشنهاد به دوستان</p>
                            <span>کالا‌های مورد‌ نظرتان را به دوستان پیشنهاد کنید. </span>
                        </div>
                        <div className="generallist-detail-bottom-content">
                            <img className='img-fluid' src="/image/generallist-bottom-2.svg" alt="generallist-detail-bottom-content" />
                            <p>خرید روزانه</p>
                            <span>خریدهای روزانه و مورد نیاز خانه را یکجا ثبت کنید.</span>
                        </div>
                        <div className="generallist-detail-bottom-content">
                            <img className='img-fluid' src="/image/generallist-bottom-3.svg" alt="generallist-detail-bottom-content" />
                            <p>هدیه ها</p>
                            <span>برای هدیه خریدن، از قبل ایده هایتان را جمع کنید.</span>
                        </div>
                        <div className="generallist-detail-bottom-content">
                            <img className='img-fluid' src="/image/generallist-bottom-4.svg" alt="generallist-detail-bottom-content" />
                            <p>آرزو ها</p>
                            <span>کالاهایی که دوست دارید در آینده داشته باشید.</span>
                        </div>
                </div>
            </div>
            <div
                className="tab-pane fade noticeslist-detail"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab">
                <div className="row">
                    <div className='empty-list'>
                        <img src="/image/empty-noticeslist-detail.svg" alt="emptylist" />
                        <p>کالایی جهت اطلاع‌رسانی وجود ندارد.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
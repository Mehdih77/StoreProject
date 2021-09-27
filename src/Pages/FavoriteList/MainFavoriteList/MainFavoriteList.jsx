import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite, selectAllFavorite } from '../../../redux/favoriteSlice';
import { removeNotice, selectAllNotice } from '../../../redux/noticeSlice';
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

    const allFavoriteItem = useSelector(selectAllFavorite);
    const allNoticeItem = useSelector(selectAllNotice);
    const dispatch = useDispatch();

    // remove Favorite items
    const handleRemoveFavorite = (id) => {
        dispatch(removeFavorite(id))
    }

    // remove Notice items
    const handleRemoveNotice = (id) => {
        dispatch(removeNotice(id))
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
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab">
                <div className="row">
                    {allFavoriteItem.length > 0 ? allFavoriteItem.map(item => (
                        <div className='col-md-6 favoritelist-detail'>
                            <div className='favoritelist-detail-img'>
                                <img className='img-fluid' src={item.img} alt="favorite digikala" />
                            </div>
                            <div className='favoritelist-detail-content'>
                                <div>
                                    <div className='favoritelist-detail-name'>
                                        <p>{item.name}</p>
                                        <button onClick={() => handleRemoveFavorite(item.id)}><i className="far fa-trash-alt"></i></button>
                                    </div>
                                </div>
                                <div className='favoritelist-detail-price'>
                                <p>{item.price} تومان</p>
                            </div>
                                <Link to={`/phones/${item.id}`} className='favoritelist-detail-link'>مشاهده محصول<i className='fas fa-chevron-down'></i></Link>
                            </div>
                        </div>
                    )) 
                    : <div className='empty-list'>
                        <img src="/image/empty-favoritelist.svg" alt="empty-list" />
                        <p>لیست علاقه‌مندی‌های شما خالی است.</p>
                    </div>}
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
                {allNoticeItem.length > 0 ? allNoticeItem.map(item => (
                        <div className='col-md-6 noticeslist-detail'>
                            <div className='noticeslist-detail-img'>
                                <img className='img-fluid' src={item.img} alt="notice digikala" />
                            </div>
                            <div className='noticeslist-detail-content'>
                                <div>
                                    <div className='noticeslist-detail-name'>
                                        <Link to={`/phones/${item.id}`}>{item.name}</Link>
                                        <button onClick={() => handleRemoveNotice(item.id)}><i className="far fa-trash-alt"></i></button>
                                    </div>
                                </div>
                                <div className='noticeslist-detail-alarm'>
                                    <p><i className="far fa-bell"></i> شگفت‌انگیز شدن</p>
                                </div>
                            </div>
                        </div>
                    )) 
                    : <div className='empty-list'>
                        <img src="/image/empty-noticeslist-detail.svg" alt="emptylist" />
                        <p>کالایی جهت اطلاع‌رسانی وجود ندارد.</p>
                    </div>}
                    
                </div>
            </div>
        </div>
    </section>
    )
}
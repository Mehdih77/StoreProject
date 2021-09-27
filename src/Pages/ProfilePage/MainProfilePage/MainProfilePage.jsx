import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../ContextApi/AuthProvider';
import { removeFavorite, selectAllFavorite } from '../../../redux/favoriteSlice';
import './MainProfilePage.css';

export default function MainProfilePage() {

    const {currentUser} = useAuth();

    const allFavoriteItem = useSelector(selectAllFavorite);
    const dispatch = useDispatch();

    const handleRemoveFavorite = (id) => {
        dispatch(removeFavorite(id))
    }

    return (
        <>
        <section>
            <div className="row p-1">
                <div className="col-md-6">
                    <div className='secret-info-header'>
                        <span>اطلاعات شخصی</span>
                    </div>
                    <div className='secret-info-body'>
                        <div className='secret-info-body-row'>
                            <div className='secret-info-body-col'>
                                <p>
                                    <span>نام و نام خانوادگی:</span>
                                    کاربر سایت
                                </p>
                            </div>
                            <div className='secret-info-body-col'>
                                <p>
                                    <span>پست الکترونیک:</span>
                                    {currentUser && currentUser.email}
                                </p>
                            </div>
                        </div>
                        <div className='secret-info-body-row'>
                            <div className='secret-info-body-col'>
                                <p>
                                    <span>شماره تلفن همراه:</span>
                                    80*****0937
                                </p>
                            </div>
                            <div className='secret-info-body-col'>
                                <p>
                                    <span>کد ملی:</span>
                                    1234567890
                                </p>
                            </div>
                        </div>
                        <div className='secret-info-body-row'>
                            <div className='secret-info-body-col'>
                                <p>
                                    <span>دریافت خبرنامه:</span>
                                    خیر
                                </p>
                            </div>
                            <div className='secret-info-body-col'>
                                <p>
                                    <span>روش بازگشت وجه:</span>
                                    -
                                </p>
                            </div>
                        </div>
                        <div className='secret-info-body-bottom'>
                            <Link><i className="fas fa-pencil-alt"></i>ویرایش اطلاعات شخصی</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className='favorite-list-header'>
                        <span>لیست آخرین علاقه‌مندی‌ها</span>
                    </div>
                    <div className='favorite-list-body'>
                        {allFavoriteItem.length > 0 ? allFavoriteItem.slice(0,3).map(item => (<div className='favorite-list-body-row'>
                            <div className='favorite-list-body-col'>
                                <div className='favorite-list-body-col-img'>
                                    <img className='img-fluid' src={item.img} alt="favorite-list-img" />
                                </div>
                                <div className='favorite-list-body-col-detail'>
                                    <Link>
                                        <p>{item.name}</p>
                                        <p>{item.price} تومان</p>
                                    </Link>
                                </div>
                                <button onClick={() => handleRemoveFavorite(item.id)}><i className="far fa-trash-alt"></i></button>
                            </div>
                        </div>)) : ""} 
                        <div className='favorite-list-body-bottom'>
                            <Link to='/profile/favorite' href='/profile/favorite'><i className="fas fa-pencil-alt"></i>مشاهده و ویرایش لیست مورد علاقه</Link>
                        </div>
                    </div></div>
            </div>
        </section>
        <h5 className='tabel-orders-title'>آخرین سفارش ها</h5>
        <div className="container tabel-orders my-3">
            <div className="row tabel-orders-header">
                <div className="col-1">#</div>
                <div className="col-2">شماره سفارش</div>
                <div className="col-2">تاریخ ثبت سفارش</div>
                <div className="col-2">مبلغ قابل پرداخت</div>
                <div className="col-2">مبلغ کل</div>
                <div className="col-2">عملیات پرداخت</div>
                <div className="col-1">جزییات</div>
            </div>
            <div className="row tabel-orders-body">
                    <div className="col-1">۱</div>
                    <div className="col-2">DKC-123456789</div>
                    <div className="col-2">۴ اردیبهشت ۱۴۰۰</div>
                    <div className="col-2">۰</div>
                    <div className="col-2">۸۳,۵۰۰ تومان</div>
                    <div className="col-2 payment-status-fail">پرداخت ناموفق</div>
                    <div className="col-1"><i className='fas fa-chevron-down icon-more-detail'></i></div>
                </div>
            <div className="row tabel-orders-body">
                <div className="col-1">۲</div>
                <div className="col-2">DKC-987654321</div>
                <div className="col-2">۲۶ دی ۱۳۹۹</div>
                <div className="col-2">۰</div>
                <div className="col-2">۲۵۹,۹۸۰ تومان</div>
                <div className="col-2 payment-status-ok">پرداخت موفق</div>
                <div className="col-1"><i className='fas fa-chevron-down icon-more-detail'></i></div>
            </div>
            <div className="row tabel-orders-body">
                <div className="col-1">۳</div>
                <div className="col-2">DKC-135798642</div>
                <div className="col-2">۱ آذر ۱۳۹۹</div>
                <div className="col-2">۰</div>
                <div className="col-2">۳۰,۵۹۹,۰۰۰ تومان</div>
                <div className="col-2 payment-status-ok">پرداخت موفق</div>
                <div className="col-1"><i className='fas fa-chevron-down icon-more-detail'></i></div>
            </div>
            <div className="row tabel-orders-body">
                <div className="col-1">۴</div>
                <div className="col-2">DKC-246813578</div>
                <div className="col-2">۱۶ آبان ۱۳۹۹</div>
                <div className="col-2">۰</div>
                <div className="col-2">۳۱۰,۰۰۰ تومان</div>
                <div className="col-2 payment-status-fail">پرداخت ناموفق</div>
                <div className="col-1"><i className='fas fa-chevron-down icon-more-detail'></i></div>
            </div>
            <div className="row tabel-orders-body">
                <div className="col-1">۵</div>
                <div className="col-2">DKC-156784356</div>
                <div className="col-2">۱۳ آبان ۱۳۹۹</div>
                <div className="col-2">۰</div>
                <div className="col-2">۵۹,۱۳۲,۰۰۰ تومان</div>
                <div className="col-2 payment-status-ok">پرداخت موفق</div>
                <div className="col-1"><i className='fas fa-chevron-down icon-more-detail'></i></div>
            </div>
            <div className="row tabel-orders-body">
                <div className="col-1">۶</div>
                <div className="col-2">DKC-135567849</div>
                <div className="col-2">۱۳ آبان ۱۳۹۹</div>
                <div className="col-2">۰</div>
                <div className="col-2">۵۵,۶۱۹,۵۰۰ تومان</div>
                <div className="col-2 payment-status-cancel">لغو شده</div>
                <div className="col-1"><i className='fas fa-chevron-down icon-more-detail'></i></div>
            </div>
            <Link to='/shopbasket' href="/shopbasket" className='row tabel-orders-bottom'>
                    مشاهده لیست سفارش‌ها
                </Link>
        </div>
        </>
    )
}

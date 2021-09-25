import { Link } from 'react-router-dom';
import { useAuth } from '../../../ContextApi/AuthProvider';
import './MainProfilePage.css';

export default function MainProfilePage() {

    const {currentUser} = useAuth();

    return (
        <div className='container-fluid'>
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
                        <div className='favorite-list-body-row'>
                            <div className='favorite-list-body-col'>
                                <div className='favorite-list-body-col-img'>
                                    <img className='img-fluid' src="/image/laptop2.jpg" alt="favorite-list-img" />
                                </div>
                                <div className='favorite-list-body-col-detail'>
                                    <p>لپ تاپ 15.6 اينچی دل مدل Alienware M15 R3 GAMING - CTO - K</p>
                                    <p>103,000,000 تومان</p>
                                </div>
                                <button><i className="far fa-trash-alt"></i></button>
                            </div>
                        </div>
                        <div className='favorite-list-body-row'>
                            <div className='favorite-list-body-col'>
                                <div className='favorite-list-body-col-img'>
                                    <img className='img-fluid' src="/image/laptop2.jpg" alt="favorite-list-img" />
                                </div>
                                <div className='favorite-list-body-col-detail'>
                                    <p>لپ تاپ 15.6 اينچی دل مدل Alienware M15 R3 GAMING - CTO - K</p>
                                    <p>103,000,000 تومان</p>
                                </div>
                                <button><i className="far fa-trash-alt"></i></button>
                            </div>
                        </div>  
                        <div className='favorite-list-body-row'>
                            <div className='favorite-list-body-col'>
                                <div className='favorite-list-body-col-img'>
                                    <img className='img-fluid' src="/image/laptop2.jpg" alt="favorite-list-img" />
                                </div>
                                <div className='favorite-list-body-col-detail'>
                                    <p>لپ تاپ 15.6 اينچی دل مدل Alienware M15 R3 GAMING - CTO - K</p>
                                    <p>103,000,000 تومان</p>
                                </div>
                                <button><i className="far fa-trash-alt"></i></button>
                            </div>
                        </div>  
                        
                        <div className='favorite-list-body-bottom'>
                            <Link><i className="fas fa-pencil-alt"></i>مشاهده و ویرایش لیست مورد علاقه</Link>
                        </div>
                    </div></div>
            </div>
            
        </div>
    )
}

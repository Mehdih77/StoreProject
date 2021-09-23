import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allProducts } from '../../../redux/shopSlice';
import './PhoneItems.css';

export default function PhoneItems() {

    const getAllProducts = useSelector(allProducts);
  
    const getPhones = getAllProducts.filter(p => p.category === 'phone');

    const showPhoneProcuts = getPhones && getPhones.map(phone => (
            <div className="col-4 col-md-3 phone-card">
            <Link to={`/phones/${phone.id}`}>
                <img className='img-fluid' src={phone.img} alt={phone.eng_name} />
                <p className='phone-card-name'>{phone.name}</p>
                <div className='phone-card-info'>
                    <p><i class="fas fa-archive"></i>موجود در انبار</p>
                    <p><span>(1401)</span>4.3<i class="fas fa-star"></i></p>
                </div>
                <p className='phone-card-price'>{phone.price}<span>تومان</span></p>
                <div className='phone-card-bottom'>
                    <p><i class="fas fa-store"></i>فروشنده: <span>آنلاین شاپ</span> </p>
                </div>
            </Link>
            </div>
    ))

    return ( 
        <>
        <div className="container">
            <div className='phone-items-breadcrumb'>
                <a href="/">فروشگاه اینترنتی آنلاین شاپ </a>
                / <a href="#!">کالای دیجیتال </a>
                / <a href="/phones">موبایل </a>
            </div>
            <div className="row phone-items-filters">
                    <p><i class="fas fa-stream"></i>مرتب سازی براساس :</p>
                    <button className='active-phone-items-filters'>پربازدیدترین</button>
                    <button>پرفروش‌ترین‌</button>
                    <button>محبوب‌ترین</button>
                    <button>گران‌ترین</button>
                    <button>ارزان‌ترین</button>
            </div>
            <div className="row">
                {showPhoneProcuts}
            </div>
        </div>
        </>
    )
}

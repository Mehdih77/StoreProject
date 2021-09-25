import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allProducts } from '../../../redux/shopSlice';
import './PhoneItems.css';

export default function PhoneItems() {

    const getAllProducts = useSelector(allProducts);
    const getPhones = getAllProducts.filter(p => p.category === 'phone');

    const [sortPhones, setSortPhones] = useState();

    const showPhoneProcuts = getPhones && getPhones.map(phone => {
        const price = phone.price && Number(phone.price.toFixed(3)).toLocaleString().split(/\s/).join(',');
        return (
            <div className="col-4 col-md-3 phone-card">
            <Link to={`/phones/${phone.id}`}>
                <img className='img-fluid' src={phone.img} alt={phone.eng_name} />
                <p className='phone-card-name'>{phone.name}</p>
                <div className='phone-card-info'>
                    <p><i class="fas fa-archive"></i>موجود در انبار</p>
                    <p><span>(1401)</span>4.3<i class="fas fa-star"></i></p>
                </div>
                <p className='phone-card-price'>{price}<span>تومان</span></p>
                <div className='phone-card-bottom'>
                    <p><i class="fas fa-store"></i>فروشنده: <span>آنلاین شاپ</span> </p>
                </div>
            </Link>
            </div>
    )
    });


    const handleSortPhone = (value) => {
        switch (value) {
            case "asc-name":
                const an = getPhones.sort((a,b) => {
                    const aName = a.eng_name.toLowerCase();
                    const bName = b.eng_name.toLowerCase();
                    return aName > bName ? 1 : -1
                });
                setSortPhones(an.map(phone => {
                    const price = phone.price && Number(phone.price.toFixed(3)).toLocaleString().split(/\s/).join(',');
                    return (
                        <div className="col-4 col-md-3 phone-card">
                        <Link to={`/phones/${phone.id}`}>
                            <img className='img-fluid' src={phone.img} alt={phone.eng_name} />
                            <p className='phone-card-name'>{phone.name}</p>
                            <div className='phone-card-info'>
                                <p><i class="fas fa-archive"></i>موجود در انبار</p>
                                <p><span>(1401)</span>4.3<i class="fas fa-star"></i></p>
                            </div>
                            <p className='phone-card-price'>{price}<span>تومان</span></p>
                            <div className='phone-card-bottom'>
                                <p><i class="fas fa-store"></i>فروشنده: <span>آنلاین شاپ</span> </p>
                            </div>
                        </Link>
                        </div>
                )
                }))
            break;
            case "desc-name":
                const dn = getPhones.sort((a,b) => {
                    const aName = a.eng_name.toLowerCase();
                    const bName = b.eng_name.toLowerCase();
                    return aName < bName ? 1 : -1
                });
                setSortPhones(dn.map(phone => {
                    const price = phone.price && Number(phone.price.toFixed(3)).toLocaleString().split(/\s/).join(',');
                    return (
                        <div className="col-4 col-md-3 phone-card">
                        <Link to={`/phones/${phone.id}`}>
                            <img className='img-fluid' src={phone.img} alt={phone.eng_name} />
                            <p className='phone-card-name'>{phone.name}</p>
                            <div className='phone-card-info'>
                                <p><i class="fas fa-archive"></i>موجود در انبار</p>
                                <p><span>(1401)</span>4.3<i class="fas fa-star"></i></p>
                            </div>
                            <p className='phone-card-price'>{price}<span>تومان</span></p>
                            <div className='phone-card-bottom'>
                                <p><i class="fas fa-store"></i>فروشنده: <span>آنلاین شاپ</span> </p>
                            </div>
                        </Link>
                        </div>
                )
                }))
            break;
            case "asc-price":
                const ap = getPhones.sort((a,b) => {
                    return b.price - a.price
                });
                setSortPhones(ap.map(phone => {
                    const price = phone.price && Number(phone.price.toFixed(3)).toLocaleString().split(/\s/).join(',');
                    return (
                        <div className="col-4 col-md-3 phone-card">
                        <Link to={`/phones/${phone.id}`}>
                            <img className='img-fluid' src={phone.img} alt={phone.eng_name} />
                            <p className='phone-card-name'>{phone.name}</p>
                            <div className='phone-card-info'>
                                <p><i class="fas fa-archive"></i>موجود در انبار</p>
                                <p><span>(1401)</span>4.3<i class="fas fa-star"></i></p>
                            </div>
                            <p className='phone-card-price'>{price}<span>تومان</span></p>
                            <div className='phone-card-bottom'>
                                <p><i class="fas fa-store"></i>فروشنده: <span>آنلاین شاپ</span> </p>
                            </div>
                        </Link>
                        </div>
                )
                }))
            break;
            case "desc-price":
                const dp = getPhones.sort((a,b) => {
                    return a.price - b.price
                });
                setSortPhones(dp.map(phone => {
                    const price = phone.price && Number(phone.price.toFixed(3)).toLocaleString().split(/\s/).join(',');
                    return (
                        <div className="col-4 col-md-3 phone-card">
                        <Link to={`/phones/${phone.id}`}>
                            <img className='img-fluid' src={phone.img} alt={phone.eng_name} />
                            <p className='phone-card-name'>{phone.name}</p>
                            <div className='phone-card-info'>
                                <p><i class="fas fa-archive"></i>موجود در انبار</p>
                                <p><span>(1401)</span>4.3<i class="fas fa-star"></i></p>
                            </div>
                            <p className='phone-card-price'>{price}<span>تومان</span></p>
                            <div className='phone-card-bottom'>
                                <p><i class="fas fa-store"></i>فروشنده: <span>آنلاین شاپ</span> </p>
                            </div>
                        </Link>
                        </div>
                )
                }))
            break;
        }
    }

    return ( 
        <>
        <div className="container phone-items-phone-page">
            <div className='phone-items-breadcrumb'>
                <a href="/">فروشگاه اینترنتی آنلاین شاپ </a>
                / <a href="#!">کالای دیجیتال </a>
                / <a href="/phones">موبایل </a>
            </div>
            <div className="row phone-items-filters">
                    <p><i class="fas fa-stream"></i>مرتب سازی براساس :</p>
                    <button value='asc-name' onClick={(e) => handleSortPhone(e.target.value)}>پربازدیدترین</button>
                    <button value='desc-name' onClick={(e) => handleSortPhone(e.target.value)}>پرفروش‌ترین‌</button>
                    <button value='asc-name' onClick={(e) => handleSortPhone(e.target.value)}>محبوب‌ترین</button>
                    <button value='asc-price' onClick={(e) => handleSortPhone(e.target.value)}>گران‌ترین</button>
                    <button value='desc-price' onClick={(e) => handleSortPhone(e.target.value)}>ارزان‌ترین</button>
            </div>
            <div className="row">
                {sortPhones ? sortPhones : showPhoneProcuts}
            </div>
        </div>
        </>
    )
}

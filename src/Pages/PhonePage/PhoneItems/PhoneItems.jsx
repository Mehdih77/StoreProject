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
                <p>{phone.name}</p>
                <p><span>(1401)</span>4.3<i class="fas fa-star"></i></p>
                <p>{phone.price}تومان</p>
                <div>
                    <p><i class="fas fa-store"></i>فروشنده : آنلاین شاپ</p>
                </div>
            </Link>
        </div>
    ))

    return ( 
        <>
        <div className="container">
            <div className="row">
                {showPhoneProcuts}
            </div>
        </div>
        </>
    )
}

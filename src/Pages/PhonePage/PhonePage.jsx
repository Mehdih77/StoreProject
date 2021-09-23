import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../redux/shopSlice';
import './PhonePage.css';
import Banner from './Banner/Banner';
import Filters from './Filters/Filters';
import PhoneItems from './PhoneItems/PhoneItems';

export default function PhonePage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])


    return (
        <>
        <div className='container my-4'>
            <div className="row">
                <div className='col-md-3'>
                    <Filters />
                </div>
                <div className='col-md-9'>
                     <PhoneItems /> 
                </div>
            </div>
        </div>
        <div className="container phone-page-banners my-3">
            <div className="row">
                <Banner />
            </div>
        </div>
        </>
    )
}

import MainDetails from './Main-Details/MainDetails';
import MoreDetails from './More_Details/MoreDetails';
import '../../Style/main-style.css';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { get } from '../../Server/Axios';

export default function PhoneGoodsPage() {

    // Params came from App.js ~ Use for better Nameing >
    // slug is set( phone ) then after that id came...
    const {id} = useParams();

    const [getCurrentProducts, setGetCurrentProducts] = useState();
    
    const getProduct = useCallback( async () => {
        return await get(`/products/${id}`).then(res => setGetCurrentProducts(res.data));
    },[id]);

    useEffect(() => {
        getProduct();
    }, [getProduct])

    return (
        <>
            <MainDetails getCurrentProducts={getCurrentProducts} id={id} />
            <MoreDetails getCurrentProducts={getCurrentProducts} id={id} />
        </>
    )
}

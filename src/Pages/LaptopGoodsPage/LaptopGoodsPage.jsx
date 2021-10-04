import { useCallback, useEffect, useState } from 'react';
import '../../Style/main-style.css';
import { get } from '../../Server/Axios';
import { useParams } from 'react-router-dom';
import MainDetails from './Main-Details/MainDetails';
import MoreDetails from './More_Details/MoreDetails';

export default function LaptopGoodsPage() {

    // Params came from App.js ~ Use for better Nameing
    // slug is set(laptop) then after that id came...
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
            <MainDetails getCurrentProducts={getCurrentProducts} />
            <MoreDetails getCurrentProducts={getCurrentProducts} id={id} />
        </>
    )
}

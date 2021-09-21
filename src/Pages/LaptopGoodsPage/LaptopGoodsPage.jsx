import MainDetails from './Main-Details/MainDetails';
import MoreDetails from './More_Details/MoreDetails';
import '../../Style/main-style.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { get } from '../../Server/Axios';

export default function LaptopGoodsPage() {

    // Params came from App.js ~ Use for better Nameing >
    // slug is set( phone ) then after that id came...
    const {id} = useParams();

    const [getCurrentProducts, setGetCurrentProducts] = useState();
    
    const getProduct = () => {
        return get(`/products/${id}`).then(res => setGetCurrentProducts(res.data));
    }
    useEffect(() => {
        getProduct();
    }, [])

    return (
        <>
            <MainDetails getCurrentProducts={getCurrentProducts} />
            <MoreDetails getCurrentProducts={getCurrentProducts} id={id} />
        </>
    )
}

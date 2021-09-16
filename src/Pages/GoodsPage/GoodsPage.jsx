import MainDetails from './Main-Details/MainDetails';
import MoreDetails from './More_Details/MoreDetails';
import '../../Style/main-style.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { allProducts } from '../../redux/shopSlice';

export default function GoodsPage() {

    // Params came from App.js ~ Use for better Nameing >
    // slug is set( phone ) then after that id came...
    const {id} = useParams();

    

    const getAllProducts = useSelector(allProducts);

    const phone = getAllProducts.filter(p => p.id === id)

    console.log(phone);

    return (
        <>
        <MainDetails phone={phone} id={id} />
        <MoreDetails id={id} />
    </>
    )
}

import MainDetails from './Main-Details/MainDetails';
import MoreDetails from './More_Details/MoreDetails';
import '../../Style/main-style.css';
import { useParams } from 'react-router-dom';

export default function GoodsPage() {

    // Params came from App.js ~ Use for better Nameing >
    // slug is set( phone ) then after that id came...
    const {id} = useParams();

    return (
        <>
            <MainDetails id={id} />
            <MoreDetails id={id} />
        </>
    )
}

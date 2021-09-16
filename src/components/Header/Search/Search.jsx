import React, {useState} from 'react';
import './search.css';
import { Link } from '@material-ui/core';
import { useSelector } from 'react-redux';




export default function Search() {

    const [input, setInput] = useState('');

    const filterNames = useSelector(state => state.shop.products);

    const searching = filterNames.filter(f => {
        if( f.name.toLowerCase().includes(input.toLowerCase())) {
            return f;
        }
    }).map(m => {
        return (
            <Link id='search-items' to={`/goods/phone/${m.id}`}>
                <button className='search-items'>
                <i className="fas fa-search-plus"></i>
                 {m.name}
                </button>
            </Link>
        )
    });
    
    return (
        <>
        <form className="form-inline search-form my-2 my-lg-0">
            <input onChange={(e) => setInput(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="جستجوی محصول در آنلاین شاپ ..." aria-label="Search" />
            <button className="btn" type="submit"><i className="fas fa-search"></i></button>
            <ul className={`search-list-bottom ${input.length > 1 ? 'd-block' : 'd-none'}`}>
                    {input.length > 1 && searching}
            </ul>
          </form>
        </>
    )
}



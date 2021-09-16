import React, { useState , useEffect} from 'react'
import './search.css'
import {get} from '../../../Server/Axios'
import Datas from '../../../data.json'
import { Link } from '@material-ui/core'




export default function Search() {

    //const [search, setSearch] = useState('')
    const [input, setInput] = useState('')


    const searching = Datas.phone.filter(f => {
        if(
            f.name.toLowerCase().includes(input.toLowerCase())
        ){
            return f;
        }
    }).map(m => {
        //console.log(m.id);
     return <Link id='search-items' to={`/goods/phone/${m.id}`}>
         <button className='search-items'>
         <i className="fas fa-search-plus"></i>
         {m.name}
         </button>
     </Link>
    })
    


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



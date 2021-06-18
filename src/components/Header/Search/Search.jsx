import React from 'react'
import './search.css'

export default function Search() {
    return (
        <>
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="جستجوی محصول در آنلاین شاپ ..." aria-label="Search" />
            <button className="btn" type="submit"><i className="fas fa-search"></i></button>
          </form>
        </>
    )
}

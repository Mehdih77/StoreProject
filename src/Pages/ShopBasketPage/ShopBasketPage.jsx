import React from 'react'
import '../../Style/main-style.css'
import ShopList from './ShopList/ShopList'
import Price from './Price/Price'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function ShopBasketPage() {
    return (
        <>
            <Header />
            <div className='container my-5'>
            <div className='row'>
                <div className='col-md-8'>
                         <ShopList />
                </div>
                <div className='col-md-4'>
                        <Price />
                </div>
            </div>
        </div>
            <Footer />
        </>
    )
}

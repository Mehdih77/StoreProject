import React from 'react'
import Header from '../../components/Header/Header'
import MainDetails from './Main-Details/MainDetails'
import MoreDetails from './More_Details/MoreDetails'
import Footer from '../../components/Footer/Footer'
import '../../Style/main-style.css'
import { useParams } from 'react-router-dom'

export default function GoodsPage({cartItems,onAdd}) {

    // Params came from App.js ~ Use for better Nameing >
    // slug is set( phone ) then after that id came...
    const {id} = useParams();

    return (
        <>
        <Header cartItems={cartItems} />
        <MainDetails onAdd={onAdd} id={id} />
        <MoreDetails id={id} />
        <div className='footer-in-goods-page'>
        <Footer/>
        </div>
    </>
    )
}

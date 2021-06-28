import React from 'react'
import Header from '../../components/Header/Header'
import MainDetails from './Main-Details/MainDetails'
import MoreDetails from './More_Details/MoreDetails'
import Footer from '../../components/Footer/Footer'
import '../../Style/main-style-GoodsPage.css'

export default function GoodsPage() {
    return (
        <>
        <Header />
        <MainDetails />
        <MoreDetails />
        <Footer />
    </>
    )
}

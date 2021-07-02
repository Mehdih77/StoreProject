import React from 'react'
import Header from '../../components/Header/Header'
import TopBanner from './Top-Banner/TopBanner'
import TopOffer from '../../Pages/HomePage/Top-Offer/TopOffer'
import AdBanner from './Ad-banner/AdBanner'
import SuperMarket from './SuperMarket/SuperMarket'
import GoodsSummary from './Goods-Summary/GoodsSummary'
import PhoneOffer from '../../components/Main/Phone-Offer/PhoneOffer'
import BigBanner from './Big-Banner-bottom/BigBanner'
import Footer from '../../components/Footer/Footer'
import '../../Style/main-style.css'

export default function HomePage() {
    return (
        <>
                    <div className='body-custom-back-color '>
            <Header />
            <TopBanner />
            <TopOffer />
            <AdBanner />
            <SuperMarket />
            <AdBanner />
            <PhoneOffer />
            <GoodsSummary />
            <PhoneOffer />
            <BigBanner />
            <Footer />
            </div>

        </>
    )
}

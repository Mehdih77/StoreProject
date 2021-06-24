import React from 'react'
import TopBanner from './Top-Banner/TopBanner'
import TopOffer from './Top-Offer/TopOffer'
import AdBanner from './Ad-banner/AdBanner'
import SuperMarket from './SuperMarket/SuperMarket'
import GoodsSummary from './Goods-Summary/GoodsSummary'
import PhoneOffer from './Phone-Offer/PhoneOffer'
import BigBanner from './Big-Banner-bottom/BigBanner'

export default function Main() {
    return (
        <>
            <TopBanner />
            <TopOffer />
            <AdBanner />
            <SuperMarket />
            <AdBanner />
            <PhoneOffer />
            <GoodsSummary />
            <PhoneOffer />
            <BigBanner />

        </>
    )
}

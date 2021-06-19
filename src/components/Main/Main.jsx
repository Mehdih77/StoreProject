import React from 'react'
import TopBanner from './Top-Banner/TopBanner'
import TopOffer from './Top-Offer/TopOffer'
import AdBanner from './Ad-banner/AdBanner'
import SuperMarket from './SuperMarket/SuperMarket'
import GoodsSummary from './Goods-Summary/GoodsSummary'

export default function Main() {
    return (
        <>
            <TopBanner />
            <TopOffer />
            <AdBanner />
            <SuperMarket />
            <AdBanner />
            <GoodsSummary />

        </>
    )
}

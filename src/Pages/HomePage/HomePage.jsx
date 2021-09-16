import React, { useEffect } from 'react'
import TopBanner from './Top-Banner/TopBanner'
import TopOffer from '../../Pages/HomePage/Top-Offer/TopOffer'
import AdBanner from './Ad-banner/AdBanner'
import SuperMarket from './SuperMarket/SuperMarket'
import GoodsSummary from './Goods-Summary/GoodsSummary'
import PhoneOffer from '../../components/Main/Phone-Offer/PhoneOffer'
import BigBanner from './Big-Banner-bottom/BigBanner'
import '../../Style/main-style.css'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../redux/shopSlice'

export default function HomePage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    return ( 
    <> 
    <div className='body-custom-back-color '>
        <TopBanner/>
        <TopOffer/>
        <AdBanner/>
        <SuperMarket/>
        <AdBanner/>
        <PhoneOffer/>
        <GoodsSummary/>
        <PhoneOffer/>
        <BigBanner/>
    </div> 
    </>
    )
}
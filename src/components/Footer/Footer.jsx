import React from 'react'
import TopFooter from './Top-Footer/TopFooter'
import BottomFooter from './Bottom-Footer/BottomFooter'
import './footerstyle.css'

export default function Footer() {
    return (
        <>
        <footer className='container-fluid footer'>
           <TopFooter />
          <BottomFooter />
        </footer>
        </>
        )
}

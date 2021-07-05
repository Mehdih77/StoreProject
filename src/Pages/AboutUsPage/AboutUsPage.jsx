import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './aboutuspage.css'
import '../../Style/main-style.css'

export default function AboutUsPage() {
    return (
        <>
        <Header/>
            <section>
                <div className='container my-4'>
                    <div className='row contact-custom-style'>
                    <h5 className='contact-title'> بـــا مـــا همراه بـــــــــــــــــــاشید</h5>
                   <div className='contact'>
                   <ul className='contact-social'>
                        <li> <a href='https://www.instagram.com/frontend.plus/' target='_blank'><i class="fab fa-instagram"></i> </a> </li>
                        <li> <a href='#'> <i class="fab fa-telegram-plane"></i></a> </li>
                        <li> <a href='#'> <i class="fab fa-linkedin"></i></a> </li>
                        <li> <a href='#'> <i class="fab fa-youtube"></i></a> </li>
                    </ul>
                    </div>
                    </div>
                </div>
            </section>
        <Footer/>
        </>
    )
}

import React from 'react'
import './topbanner.css'

export default function TopBanner() {
    return (
        <>
 <div className="container mt-3">
        <img className="w-100 top-banner" src="./image/5.jpg" alt="banner" />
    </div>
    <section className="container">
        <div className="row my-3">
            <div className="col-lg-8 mt-1 large-banner-top">
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="4000">
                            <img src="./image/topbanner1.jpg" className="w-100 d-block" alt="laptop" />
                        </div>
                        <div className="carousel-item" data-interval="4000">
                            <img src="./image/topbanner2.gif" className="w-100 d-block" alt="camera" />
                        </div>
                        <div className="carousel-item" data-interval="4000">
                            <img src="./image/topbanner3.jpg" className="w-100 d-block" alt="camera" />
                        </div>
                        <div className="carousel-item" data-interval="4000">
                            <img src="./image/topbanner4.jpg" className="w-100 d-block" alt="camera" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="row small-banner-top">
                    <div className="col-6 col-md-12">
                        <img className="small-banner-top-1 w-100" src="./image/gifff.gif" alt="banner" />
                    </div>
                    <div className="col-6 col-md-12">
                        <img className="small-banner-top-1 w-100" src="./image/4.jpg" alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

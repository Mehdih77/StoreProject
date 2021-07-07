import React from 'react'
import "./adbanner.css"

export default function AdBanner() {
    return (
        <section className="container ad-banner my-2">
            <div className="row">
                <div className="col-md-6 my-2">
                    <img className="img-fluid" src="./image/banner-1.jpg" alt='banner' />
                </div>
                <div className="col-md-6 my-2">
                <img className="img-fluid" src="./image/banner-2.jpg" alt='banner' />
                </div>
            </div>
        </section>
    )
}

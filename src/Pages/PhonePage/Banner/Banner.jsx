import './Banner.css';

export default function Banner() {
    return (
        <>
        <div className='col-6 col-md-3'>
            <img className='img-fluid' src="/image/phone-page-banner-1.jpg" alt="banner" />
        </div>
        <div className='col-6 col-md-3'>
            <img className='img-fluid' src="/image/phone-page-banner-2.jpg" alt="banner" />
        </div>
        <div className='col-6 col-md-3 my-2'>
            <img className='img-fluid' src="/image/phone-page-banner-3.jpg" alt="banner" />
        </div>
        <div className='col-6 col-md-3 my-2'>
            <img className='img-fluid' src="/image/phone-page-banner-4.jpg" alt="banner" />
        </div>
        </>
    )
}

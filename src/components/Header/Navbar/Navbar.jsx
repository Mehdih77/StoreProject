import React from 'react'
import Search from '../Search/Search'
import './navbar.css'

export default function Navbar() {
    return (
        <>
<a className="navbar-brand" href="#"><img src="image/logo.png" alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-2">
            <li className="nav-item">
              <a className="nav-link" href="#">سوپر مارکت </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                تخفیف ها و پیشنهادات
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">لوازم الکترونیکی</a>
                <a className="dropdown-item" href="#"> لوازم خانگی</a>
                <a className="dropdown-item" href="#"> لوازم آرایشی</a>
                <a className="dropdown-item" href="#"> پوشاک</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">دیگر محصولات</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">تماس با ما</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" tabindex="-1">درباره ما</a>
            </li>
          </ul>
          <Search />
          <div className="navbar-left d-flex ml-auto">
        <div className="store-shop"><i class="fas fa-shopping-cart"><span className="qty-shop">3</span></i></div>
        <div className="line-user-shop">|</div>
        <div className="user-icon"><i class="fas fa-user"></i></div>
        </div>
        </div>
        
        </>
    )
}

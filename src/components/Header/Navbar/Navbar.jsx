import {useEffect, useState} from 'react';
import Search from '../Search/Search';
import './navbar.css';
import {Link, useHistory} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { calcTotal, getCurrentProducts, getTotoalQty } from '../../../redux/shopSlice';
import { useAuth } from '../../../ContextApi/AuthProvider';

export default function Navbar() {

  const dispatch = useDispatch();
  const currentProducts = useSelector(getCurrentProducts);
  const totoalQty = useSelector(getTotoalQty);
  const history = useHistory()
  const {curretnUser,logOut} = useAuth();

  async function hanldeLogOut(e) {
    e.preventDefault();
    try {
      await logOut();
      history.push('/')
    } catch {
      alert('خطا در خروج از حساب کاربری!');
    }
  }

  useEffect(() => {
    dispatch(calcTotal());
  }, [currentProducts,dispatch])

  const [openSubMenu, setOpenSubMenu] = useState(false)
  const handleOpenCloseSubMenu = (e) => {
    setOpenSubMenu(!openSubMenu);
  }

  return (
    <>
      <Link to='/' className="navbar-brand d-md-none"><img src="/image/home.svg" alt="logo" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>

      <nav className="collapse navbar-collapse caustom-navbar" id="navbarSupportedContent">
      <div className="navbar-top">
        <Link to='/' className="navbar-logo d-none d-md-block"><img src="/image/home.svg" alt="logo" /></Link>
        <div className='navbar-search'>
          <Search />
        </div>
      <div className="navbar-left d-flex ml-auto">
          {curretnUser ? 
          <button className="user-profile-btn">
          <div onClick={handleOpenCloseSubMenu} className='open-sub-menu-hover'>
          <i className="fas fa-user"></i><i className="fas fa-angle-profile-bottom fa-angle-right"></i>
          </div>
          <div className={openSubMenu ? "user-profile-sub-menu d-block" : "user-profile-sub-menu d-none"}>
            <div className='user-profile-sub-menu-top'>
              <Link>
              <div className='user-profile-sub-menu-top-info1'>
                <div className='user-profile-sub-menu-img'>
                  <img src="/image/user-profile-img.png" alt="userphoto" />
                </div>
                <div>
                  <p>{curretnUser.email}</p>
                  <a href='#!'>مشاهده حساب کاربری <i className="fas fa-angle-left"></i></a>
                  <div className='user-profile-sub-menu-top-active-money'>فعالسازی کیف پول</div>
                  <div className='user-profile-sub-menu-top-digiclub'> دیجی کلاب <span><strong>291</strong> امتیاز</span> </div>
                </div>
              </div>
              </Link>
            </div>
            <div className='user-profile-sub-menu-bottom'>
              <div className='user-profile-sub-menu-bottom-my-order'>
                <a href="#!"><i className="fas fa-file-invoice"></i>سفارش های من</a>
              </div>
              <div className='user-profile-sub-menu-bottom-prize'>
                <a href="#!"><i className="fas fa-award"></i>جوایز دیجی کلاب</a>
              </div>
              <div className='user-profile-sub-menu-bottom-logout'>
                <a href="#!"><i className="fas fa-sign-out-alt"></i>خروج از حساب کاربری</a>
              </div>
            </div>
          </div>
          </button> 
          : <Link to='/login'><button className="user-login-btn"><i className="fas fa-user"></i>ورود به حساب کاربری </button></Link>}
          <div className="line-user-shop">|</div>
          <Link to='/shopbasket' className="store-shop">
            <i className="fas fa-shopping-cart">
              <span className="qty-shop">{totoalQty}</span>
            </i>
          </Link>
        </div>
      </div>
        <ul className="navbar-nav navbar-bottom mr-2">
            <li className="nav-item">
              <a className="nav-link" href="#!">سوپر مارکت </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                تخفیف ها و پیشنهادات
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#!">لوازم الکترونیکی</a>
                <a className="dropdown-item" href="#!"> لوازم خانگی</a>
                <a className="dropdown-item" href="#!"> لوازم آرایشی</a>
                <a className="dropdown-item" href="#!"> پوشاک</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#!">دیگر محصولات</a>
              </div>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link" href="#">تماس با ما</Link>
            </li>
            <li className="nav-item">
              <Link to='/aboutus' className="nav-link " href="#" tabIndex="-1">درباره ما</Link>
            </li>
          </ul>
        
      </nav>
    </>
    )
}

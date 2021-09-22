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

  // logout
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
  const handleOpenCloseSubMenu = () => {
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
              <div onClick={hanldeLogOut} className='user-profile-sub-menu-bottom-logout'>
                <a href="#!"><i className="fas fa-sign-out-alt"></i>خروج از حساب کاربری</a>
              </div>
            </div>
          </div>
          </button> 
          : 
          <Link to='/login'><button className="user-login-btn"><i className="fas fa-user"></i>ورود به حساب کاربری </button></Link>
          }
          <Link to='/shopbasket' className="store-shop">
            <i className="fas fa-shopping-cart">
              <span className="qty-shop">{totoalQty}</span>
            </i>
          </Link>
        </div>
      </div>
        <ul className="navbar-nav navbar-bottom mr-2">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-bars"></i>دسته بندی کالاها
              </a>
              <div className="dropdown-menu all-goods-submenu container" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#!">لوازم الکترونیکی</a>
                <a className="dropdown-item" href="#!"> لوازم خانگی</a>
                <a className="dropdown-item" href="#!"> لوازم آرایشی</a>
                <a className="dropdown-item" href="#!"> پوشاک</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#!">دیگر محصولات</a>
              </div>
            </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-percentage"></i>تخفیف ها و پیشنهادها
              </a>
              <div className="dropdown-menu off-order-submenu container" aria-labelledby="navbarDropdown">
                <div className="row">
                <div className="col-md-4 off-order-submenu-right">
                <a href="#!">مشاهده همه تخفیف ها و پیشنهادها<i className="fas fa-angle-left"></i></a>
                  <a href="#!">کالاهای شگفت انگیز</a>
                  <a href="#!">شگفت انگیز سوپرمارکتی</a>
                  <a href="#!">فروش ویژه</a>
                  <a className='d-none d-md-block' href="#!">کالای دیجیتال</a>
                  <a className='d-none d-md-block' href="#!">خودرو، ابزار و تجهیزات صنعتی</a>
                  <a className='d-none d-md-block' href="#!">مد و پوشاک</a>
                  <a className='d-none d-md-block' href="#!">اسباب بازی،کودک و نوزاد</a>
                  <a className='d-none d-md-block' href="#!">کالاهای سوپرمارکتی</a>
                  <a className='d-none d-md-block' href="#!">زیبایی و سلامت</a>
                  <a className='d-none d-md-block' href="#!">خانه و آشپزخانه</a>
                  <a className='d-none d-md-block' href="#!">کتاب، لوازم التحریر و هنر</a>
                  <a className='d-none d-md-block' href="#!">ورزش و سفر</a>
                </div>
                <div className="col-md-4 off-order-submenu-middle">
                  <a className='off-order-submenu-middle-traditional' href="#!">محصولات بومی و محلی</a>
                  <a className='d-none d-md-block' href="#!"><i className="fas fa-circle"></i>حشره کش و سوسک کش تا 70درصد تخفیف</a>
                  <a className='d-none d-md-block' href="#!"><i className="fas fa-circle"></i>عطر کمتر از 99هزار تومان</a>
                  <hr/>
                  <div>
                  <a href="#!"><i className="fas fa-fire"></i>پرفروش ترین کالاها</a>
                  <a href="#!"><i className="fas fa-gift"></i>با هر خرید هدیه بگیرید!</a>
                  <a href="#!"><i className="fas fa-tag"></i>تخفیف پایان فصل</a>
                  <a href="#!"><i className="far fa-credit-card"></i>کارت هدیه خرید از دیجی کالا</a>
                  <a href="#!"><i className="fas fa-gifts"></i>تازه های فروشنده جدید</a>
                  </div>
                </div>
                <div className="col-md-4 off-order-submenu-left">
                  <img className='img-fluid d-none d-md-block' src="/image/off-order-submenu-img.png" alt="off-order-submenu-img" />
                </div>
                </div>
              </div>
            </li>
          <li className="nav-item">
              <Link to='/contact' className="nav-link" href="#">تماس با ما</Link>
            </li>
          <li className="nav-item">
              <Link to='/aboutus' className="nav-link " href="#" tabIndex="-1">درباره ما</Link>
            </li>
          <li className="nav-item">
              <Link to='/' className="nav-link " href="#" tabIndex="-1"><i className="far fa-check-circle"></i>دیجی کالای من</Link>
            </li>
          <li className="nav-item">
              <Link to='/' className="nav-link " href="#" tabIndex="-1"><i className="fas fa-plus-circle"></i>دیجی پلاس</Link>
            </li>
          <li className="nav-item">
              <Link to='/contact' className="nav-link " href="#" tabIndex="-1">سوالی دارید؟</Link>
            </li>
          <li className="nav-item">
              <Link to='/' className="nav-link " href="#" tabIndex="-1">فروشنده شوید</Link>
            </li>
        </ul> 
      </nav>
    </>
    )
}

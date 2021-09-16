import {useEffect} from 'react';
import Search from '../Search/Search';
import './navbar.css';
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { calcTotal, getCurrentProducts, getTotoalQty } from '../../../redux/shopSlice';

export default function Navbar() {

  const dispatch = useDispatch();
  const currentProducts = useSelector(getCurrentProducts);
  const totoalQty = useSelector(getTotoalQty);

  useEffect(() => {
    dispatch(calcTotal());
  }, [currentProducts,dispatch])

  return (
    <>
      <Link to='/' className="navbar-brand"><img src="/image/logo.png" alt="logo" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>

      <nav className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-2">
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
        <Search />
        <div className="navbar-left d-flex ml-auto">
          <Link to='/shopbasket' className="store-shop">
            <i className="fas fa-shopping-cart">
              <span className="qty-shop">{totoalQty}</span>
            </i>
          </Link>
            <div className="line-user-shop">|</div>
             <div className="user-icon"><i className="fas fa-user" ></i>
             </div>
        </div>
      </nav>
    </>
    )
}

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../ContextApi/AuthProvider';
import './NavProfilePage.css';

export default function NavProfilePage() {

  const {currentUser,logOut} = useAuth();
  const history = useHistory();

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

  return (
    <>
      <Link to='/profile'><img className='img-fluid img-invite-friends mb-2' src="/image/invite-friends.jpg" alt="prodile invite-friends" /></Link>
      <div className='nav-profile-page'>
        <div className='nav-profile-page-top-info'>
          <div className='nav-profile-page-img'>
            <img src="/image/user-profile-img.png" alt="userphoto" />
          </div>
          <div>
            <p>{currentUser && currentUser.email}</p>
            <p className='nav-profile-page-number'>80*****0937</p>
            <div className='nav-profile-page-top-active-money'>فعالسازی کیف پول</div>
            <div className='nav-profile-page-top-digiclub'> دیجی کلاب <span><strong>291</strong> امتیاز</span> </div>
          </div>
        </div>
        <div className='nav-profile-page-bottom'>
          <div className='nav-profile-page-bottom-my-order'>
            <Link to='/shopbasket' href="/shopbasket"><i className="fas fa-file-invoice"></i>سفارش های من</Link>
          </div>
          <div>
            <Link to='/profile/favorite' href="/profile/favorite"><i className="far fa-heart"></i>لیست ها</Link>
          </div>
          <div>
            <a href="#!"><i className="far fa-comment"></i>نظرات</a>
          </div>
          <div>
            <a href="#!"><i className="fas fa-map-marked-alt"></i>نشانی ها</a>
          </div>
          <div>
            <a href="#!"><i className="far fa-credit-card"></i>کارت های هدیه</a>
          </div>
          <div>
            <a href="#!"><i className="far fa-envelope"></i>پیغام ها</a>
          </div>
          <div>
            <a href="#!"><i className="far fa-clock"></i>بازدید های اخیر</a>
          </div>
          <div>
            <Link to='/profile/update-profile' href="/profile"><i className="far fa-user"></i>اطلاعات حساب</Link>
          </div>
          <div onClick={hanldeLogOut} className='nav-profile-page-bottom-logout'>
            <Link href='/' to="/"><i className="fas fa-sign-out-alt"></i>خروج</Link>
          </div>
        </div>
      </div>
    </>
    )
}

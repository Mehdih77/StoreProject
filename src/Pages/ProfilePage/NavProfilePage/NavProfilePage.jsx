import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../ContextApi/AuthProvider';
import './NavProfilePage.css';


export default function NavProfilePage() {

    const {curretnUser,logOut} = useAuth();
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
            <img className='img-fluid mb-3' src="/image/invite-friends.jpg" alt="prodile invite-friends" />
            <div className='nav-profile-page'>
              <div className='nav-profile-page-top-info'>
                <div className='nav-profile-page-img'>
                  <img src="/image/user-profile-img.png" alt="userphoto" />
                </div>
                <div>
                  <p>{curretnUser.email}</p>
                  <p className='nav-profile-page-number' href='#!'>80*****0937</p>
                  <div className='nav-profile-page-top-active-money'>فعالسازی کیف پول</div>
                  <div className='nav-profile-page-top-digiclub'> دیجی کلاب <span><strong>291</strong> امتیاز</span> </div>
                </div>
              </div>
            <div className='nav-profile-page-bottom'>
              <div className='nav-profile-page-bottom-my-order'>
                <Link href="#!"><i className="fas fa-file-invoice"></i>سفارش های من</Link>
              </div>
              <div>
                <a href="#!"><i className="fas fa-award"></i>لیست ها</a>
              </div>
              <div>
                <a href="#!"><i className="fas fa-award"></i>نظرات</a>
              </div>
              <div>
                <a href="#!"><i className="fas fa-award"></i>نشانی ها</a>
              </div>
              <div>
                <a href="#!"><i className="fas fa-award"></i>کارت های هدیه</a>
              </div>
              <div>
                <a href="#!"><i className="fas fa-award"></i>پیغام ها</a>
              </div>
              <div>
                <a href="#!"><i className="fas fa-award"></i>بازدید های اخیر</a>
              </div>
              <div>
                <a href="#!"><i className="fas fa-award"></i>اطلاعات حساب</a>
              </div>
              <div onClick={hanldeLogOut} className='nav-profile-page-bottom-logout'>
                <Link href='/' to="/"><i className="fas fa-sign-out-alt"></i>خروج</Link>
              </div>
            </div>
            </div>
        </>
    )
}

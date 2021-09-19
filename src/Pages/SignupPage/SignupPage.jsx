import { Link } from 'react-router-dom';
import './SignupPage.css';

export default function SignupPage() {
    return (
      <div className='sign-up-wrapper'>
        <div className="form-wrapper">
        <form className='form-style'>
          <Link to='/'><img className='digikala-img' src="image/home.svg" alt="home digikala onlineshop" /></Link>
          <h1>ساخت حساب کاربری</h1>
          <div className="social-wrapper">
            <a href="#!" className='social'><i className="fab fa-facebook-f"></i></a>
            <a href="#!" className='social'><i className="fab fa-google-plus-g"></i></a>
            <a href="#!" className='social'><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>یا با استفاده از ایمیل</span>
          <input type="text" placeholder='نام کاربری' />
          <input type="email" placeholder='ایمیل' />
          <input type="password" placeholder='رمز عبور' />
          <button className='form-btn'>ساخت حساب کاربری</button>
          <Link to='/login'><a className='a-login'>حساب کاربری دارید؟ ورود به حساب کاربری</a></Link>
        </form>
      </div>
      </div>
    )
}

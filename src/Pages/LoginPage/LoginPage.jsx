import { Link } from 'react-router-dom';
import './LoginPage.css';

export default function LoginPage() {


  return (
    <div className="wrapper login-wrapper" id='wrapper'>
      
      <div className="form-wrapper sign-in-wrapper">
        <form className='form-style'>
          <h1>ورود به حساب کاربری</h1>
          <div className="social-wrapper">
            <a href="#!" className='social'><i className="fab fa-facebook-f"></i></a>
            <a href="#!" className='social'><i className="fab fa-google-plus-g"></i></a>
            <a href="#!" className='social'><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>یا با استفاده از ایمیل</span>
          <input type="email" placeholder='ایمیل' />
          <input type="password" placeholder='رمز عبور' />
          <button className='form-btn'>ورود به آنلاین شاپ</button>
          <Link to='/signup'><a className='create-account'>حساب کاربری ندارید؟ ساخت حساب کاربری</a></Link>
          <a className='forgot-password' href="#!">رمز عبور خود را فراموش کرده اید؟</a>
        </form>
      </div>
      
    </div>
    )
}

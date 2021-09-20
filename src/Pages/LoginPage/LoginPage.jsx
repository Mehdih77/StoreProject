import { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../ContextApi/AuthProvider';
import './LoginPage.css';

export default function LoginPage() {

  const {logIn} = useAuth();
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogIn(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('خطا در ورود به حساب کاربری');
    }
    setLoading(false);
  }

  return (
    <div className="login-wrapper">
      <div className="form-wrapper">
        <form onSubmit={handleLogIn} className='form-style'>
        <Link to='/'><img className='digikala-img' src="image/home.svg" alt="home digikala onlineshop" /></Link>
          <h1>ورود به حساب کاربری</h1>
          <div className="social-wrapper">
            <a href="#!"><i className="fab fa-facebook-f"></i></a>
            <a href="#!"><i className="fab fa-google-plus-g"></i></a>
            <a href="#!"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>یا با استفاده از ایمیل</span>
          {error && <p className='error-alert'><i className='fas fa-info-circle'></i>{error}</p>}
          <input type="email" ref={emailRef} placeholder='ایمیل' required/>
          <input type="password" ref={passwordRef} placeholder='رمز عبور' required/>
          <button disabled={loading} type='submit' className='form-btn'>ورود به آنلاین شاپ</button>
          <Link to='/signup'><a className='create-account'>حساب کاربری ندارید؟ ساخت حساب کاربری</a></Link>
          <Link to='/forgotpass'><a className='forgot-password' href="#!">رمز عبور خود را فراموش کرده اید؟</a></Link>
        </form>
      </div>
    </div>
    )
}

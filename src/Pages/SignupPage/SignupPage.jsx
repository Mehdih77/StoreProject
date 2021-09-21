import {useState, useRef} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../../ContextApi/AuthProvider';
import './SignupPage.css';

export default function SignupPage() {

  const {signUp} = useAuth();
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignUp(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("رمز عبور مشترک نیست!")
    }

    try {
      setError('');
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push('/login');
    } catch {
      setError('خطا در ساخت حساب کاربری');
    }
    setLoading(false);
  }

    return (
      <div className='sign-up-wrapper'>
        <div className="form-wrapper">
        <form onSubmit={handleSignUp} className='form-style'>
          <Link to='/'><img className='digikala-img' src="image/home.svg" alt="home digikala onlineshop" /></Link>
          <h1>ساخت حساب کاربری</h1>
          <div className="social-wrapper">
            <a href="#!" className='social'><i className="fab fa-facebook-f"></i></a>
            <a href="#!" className='social'><i className="fab fa-google-plus-g"></i></a>
            <a href="#!" className='social'><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>یا با استفاده از ایمیل</span>
          {error && <p className='error-alert'><i className='fas fa-info-circle'></i>{error}</p>}
          {/* <input type="text" placeholder='نام کاربری' /> */}
          <input type="email" ref={emailRef} placeholder='ایمیل' required />
          <input type="password" ref={passwordRef} placeholder='رمز عبور' required />
          <input type="password" ref={passwordConfirmRef} placeholder='تکرار رمز عبور' required />
          <button type='submit' disabled={loading} className='form-btn'>ساخت حساب کاربری</button>
          <Link to='/login'><a href='/login' className='a-login'>حساب کاربری دارید؟ ورود به حساب کاربری</a></Link>
        </form>
      </div>
      </div>
    )
}

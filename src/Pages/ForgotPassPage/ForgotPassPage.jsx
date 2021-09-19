import { Link } from 'react-router-dom';
import './ForgotPassPage.css';

export default function ForgotPassPage() {

    return (
        <div className="forgotpass-wrapper">
            <div className="form-wrapper">
                <form className='form-style'>
                    <Link to='/'><img
                        className='digikala-img'
                        src="image/home.svg"
                        alt="home digikala onlineshop"/></Link>
                    <h1>بازیابی رمز عبور</h1>
                    <input type="email" placeholder=' ایمیل خود را وارد کنید'/>
                    <button className='form-btn'>بازیابی رمز عبور</button>
                    <Link to='/login'>
                        <a className='back-to-login'>بازگشت به صفحه ورود</a>
                    </Link>
                </form>
            </div>
        </div>
    )
}

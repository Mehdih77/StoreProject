import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loader/Loading';
import { useAuth } from '../../ContextApi/AuthProvider';
import './ForgotPassPage.css';

export default function ForgotPassPage() {

    const {resetPassword} = useAuth();
    const emailRef = useRef();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleResetPassword(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('ایمیل خود را چک کنید');
        } catch {
            setError('خطا در بازیابی رمز عبور!');
        }
        setLoading(false);
    }

    return (
        <div className="forgotpass-wrapper">
            {loading && <div className='modal-loading'>
                <Loading/>
            </div>}
            <div className="form-wrapper">
                <form onSubmit={handleResetPassword} className='form-style'>
                    <Link to='/'><img
                        className='digikala-img'
                        src="image/home.svg"
                        alt="home digikala onlineshop"/></Link>
                    <h1>بازیابی رمز عبور</h1>
                    {error && <p className='error-alert'><i className='fas fa-info-circle'></i>{error}</p>}
                    {message && <p className='message-alert'><i className="fas fa-check-circle"></i>{message}</p>}
                    <input type="email" ref={emailRef} placeholder=' ایمیل خود را وارد کنید'/>
                    <button disabled={loading} type='submit' className='form-btn'>بازیابی رمز عبور</button>
                    <Link to='/login' href='/login' className='back-to-login'>
                        بازگشت به صفحه ورود
                    </Link>
                </form>
            </div>
        </div>
    )
}

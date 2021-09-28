import { useState, useRef } from 'react';
import { useHistory } from 'react-router';
import './MainUpdateProfile.css';
import { useAuth } from '../../../ContextApi/AuthProvider';

export default function MainUpdateProfile() {

    const {currentUser,updateEmail,updatePassword} = useAuth();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const history = useHistory();

    function handleUpdateProfile(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("رمز عبور مشترک نیست!");
        }

        const promises = [];
        setLoading(true);
        setError("");
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));  
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then( () => {
            history.push('/profile/update-profile');
        }).catch(() => {
            setError("خطا در بروز رسانی!");
        }).finally(() => {
            setLoading(false);
        })
    }


    return (
        <form onSubmit={handleUpdateProfile} autoComplete='off' className='MainUpdateProfile col-12'>
            <h3>بروز رسانی اطلاعات حساب</h3>
            {error && <span>{error}</span>}
            <label className='update-profile-email'>ایمیل</label>
            <input type="text" ref={emailRef} defaultValue={currentUser && currentUser.email} required />
            <label className='update-profile-password'>رمز عبور</label>
            <input type="password" ref={passwordRef} placeholder='اگر قصد تغییر ندارید این قسمت را خالی بگذارید...'  />
            <label className='update-profile-password2'>تایید رمز عبور</label>
            <input type="password" ref={passwordConfirmRef} placeholder='اگر قصد تغییر ندارید این قسمت را خالی بگذارید...' />
            <button disabled={loading} type='submit'>بروز رسانی</button>
        </form>
    )
}

export default function SignupPage() {
    return (
        <div className="form-wrapper sign-up-wrapper">
        <form className='form-style'>
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
        </form>
      </div>
    )
}

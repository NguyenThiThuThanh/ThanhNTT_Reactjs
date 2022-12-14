import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="p-login container">
      <div className="c-account">
        <div className="c-account__header">
          <h1 className="txt-title">Đăng nhập tài khoản</h1>
          <p className="txt-small">Nhập email và mật khẩu của bạn</p>
        </div>
        <div className="c-account__inner">
          <div className="c-account__form">
            <form>
              <div className="c-account__form__input">
                <input type="email" name="customer[email]" placeholder="Email" required />
              </div>
              <div className="c-account__form__input">
                <input type="password" name="customer[password]" placeholder="Mật khẩu" required />
                <div className="txt-recaptcha">
                  This site is protected by reCAPTCHA and the Google
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>
                  and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
                </div>
              </div>
              <div className="c-account__form__submit">
                <button type="submit" className="c-account__form__btn">Đăng nhập</button>
              </div>
            </form>
          </div>
          <div className="c-account__action">
            <p>Khách hàng mới? 
              <Link to="/dang-ky" className='link'>Tạo tài khoản</Link>
            </p>
            <p>Quên mật khẩu? 
              <a href="/" className="link">Khôi phục mật khẩu</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
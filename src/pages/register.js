import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="p-login container">
      <div className="c-account">
        <div className="c-account__header">
          <h1 className="txt-title">Tạo tài khoản</h1>
        </div>
        <div className="c-account__inner">
          <div className="c-account__form">
            <form>
              <div className="c-account__form__input">
                <input type="text" name="customer[surname]" placeholder="Họ" required />
              </div>
              <div className="c-account__form__input">
                <input type="text" name="customer[name]" placeholder="Name" required />
              </div>
              <div className='c-account__form__sex'>
                <input type="radio" value="female" name="gender"/> Nữ
                <span>&ensp;</span>
                <input type="radio" value="male" name="gender"/> Nam
              </div>
              <div className="c-account__form__input">
                <input type="date" name="customer[birthday]" placeholder="mm/dd/yyyy" required />
              </div>
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
                <button type="submit" className="c-account__form__btn">Đăng ký</button>
              </div>
            </form>
          </div>
          <div className="c-account__action">
            <p>Đã có tài khoản? 
              <Link to="/dang-nhap" className='link'>Đăng nhập</Link>
            </p>
            <p> 
              <Link to="/trang-chu" className="link">Quay lại trang chủ</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
import React from "react";
import { Link } from 'react-router-dom';

function Nav({ isOpen }) {
  return (
    <div className={`navbar ${isOpen ? 'show' : ''}`}>
      <div className="navbar__inner">
        <div className="navbar__content">
          <div className="navbar__content__ttl">
            <Link to="/trang-chu"><i className="fal fa-home-alt"></i></Link>
          </div>
          <div className="navbar__content__block">
            <ul className="list-parents">
              <li className="list-item">
                <div className="txt-box">
                  <a href="/" className="link-parent">Đang khuyến mãi</a>
                </div>
              </li>
              <li className="list-item">
                <div className="txt-box">
                  <a href="/" className="link-parent">Thực phẩm tươi sống</a>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <ul className="list-child">
                  <li>
                    <div className="txt-box">
                      <a href="/">Thịt - trứng - hải sản</a>
                      <i className="fas fa-chevron-down"></i>
                    </div>
                    <ul className="list-supchild">
                      <li><a href="/">Thịt</a></li>
                      <li><a href="/">Trứng</a></li>
                      <li><a href="/">Hải sản</a></li>
                    </ul>
                  </li>
                  <li>
                    <div className="txt-box">
                      <a href="/">Rau - củ - quả</a>
                      <i className="fas fa-chevron-down"></i>
                    </div>
                    <ul className="list-supchild">
                      <li><a href="/">Rau</a></li>
                      <li><a href="/">Củ</a></li>
                      <li><a href="/">Quả</a></li>
                    </ul>
                  </li>
                  <li><a href="/">Trái cây</a></li>
                  <li><a href="/">Thực phẩm chế biến</a></li>
                </ul>
              </li>
              <li className="list-item"><a href="/" className="link-parent">Thực phẩm công nghệ</a></li>
            </ul>
            <div className="navbar__help">
              <p className="help-title">Bạn cần hỗ trợ</p>
              <div className="help-item">
                <a className="help-item--link" href="tel:0919439489" rel="nofollow"><i className="fal fa-phone-alt"></i>0919.439.489</a>
              </div>
              <div className="help-item">
                <a className="help-item--link" href="mailto:osifoodos99@gmail.com" rel="nofollow">
                  <i className="fal fa-envelope-open-text"></i>
                  osifoodos99@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;
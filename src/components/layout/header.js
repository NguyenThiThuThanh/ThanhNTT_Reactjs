import React, { useState } from "react";
import Nav from "./nav";
import { Link } from 'react-router-dom';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  
  return (
    <header className="mainHeader">
      <div className="mainHeader__inner">
        <div className="container mainHeader__container">
          <div className="mainHeader__left">
            <button className="mainHeader__iconav" onClick={toggleMenu}>
              { !openMenu ? <i className="fal fa-bars"></i> : <i className="fal fa-times"></i> }<span>menu</span>
            </button>
            <div className="mainHeader__logo">
              <a href="https://osifood.vn">
                <img
                  alt="OsiFood"
                  src="/images/logo.webp"
                />
              </a>
            </div>
            <Nav isOpen={openMenu}/>
          </div>
          <div className="mainHeader__middle">
            <div className="mainHeader__search">
              <label htmlFor="search-form">
                <input type="search" name="search-form" className="search-form" placeholder="Tìm kiếm sản phẩm..." />
              </label>
              <button className="search-btn"><i className="fal fa-search"></i></button>
            </div>
          </div>
          <div className="mainHeader__right">
            <div className="mainHeader__action">
              <div href="/" className="mainHeader__action__link">
                <span className="txtnw">Giao hoặc đến lấy tại <i className="fal fa-angle-down"></i></span>
                <div className="mainHeader__action__address">288 Phan Văn Trị, Phường 11, Quận Bình Thạnh</div>
              </div>
              <div className="mainHeader__action__user">
                <Link to="/dang-nhap"><i className="fal fa-user"></i><span>Tài khoản</span></Link>
                {/* <a href="/"><i className="fal fa-user"></i><span>Tài khoản</span></a>   */}
              </div>
              <div className="mainHeader__action__cart">
                <a href="/"><i className="fal fa-shopping-cart"></i><span>Giỏ hàng</span><span className="count">0</span></a>  
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainHeader__groupmenu">
        <div className="container">
          <div className="mainHeader__categories">
            <a href="https://osifood.vn"><i className="fal fa-home-alt"></i></a>
            <ul className="mainHeader__menulist">
              {
                [
                  { name: 'Trang chủ', route: '/trang-chu'},
                  { name: 'Giới thiệu', route: '/gioi-thieu'},
                  { name: 'Sản phẩm', route: '/san-pham'},
                  { name: 'Bài viết', route: '/bai-viet'},
                  { name: 'Liên hệ', route: '/lien-he'},
                  { name: 'Tuyển dụng', route: '/tuyen-dung'},
                ].map((el, index) =>
                  <li key={index}><Link to={el.route}>{el.name}</Link></li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
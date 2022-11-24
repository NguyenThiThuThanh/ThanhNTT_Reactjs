function Header() {
  return (
    <header className="mainHeader">
      <div className="mainHeader__inner">
        <div className="container mainHeader__container">
          <div className="mainHeader__left">
            <div className="mainHeader__iconav">
              <i class="fal fa-bars"></i><span>menu</span>
            </div>
            <div className="mainHeader__logo">
              <a href="https://osifood.vn">
                <img
                  alt="OsiFood"
                  src="/images/logo.webp"
                />
              </a>
            </div>
          </div>
          <div className="mainHeader__middle">
            <div className="mainHeader__search">
              <label htmlFor="search-form">
                <input type="search" name="search-form" className="search-form" placeholder="Tìm kiếm sản phẩm..." />
              </label>
              <button className="search-btn"><i class="fal fa-search"></i></button>
            </div>
          </div>
          <div className="mainHeader__right">
            <div className="mainHeader__action">
              <div className="mainHeader__action__address">288 Phan Văn Trị, Phường 11, Quận Bình Thạnh</div>
              <div className="mainHeader__action__user">
                <a href="/"><i class="fal fa-user"></i><span>Tài khoản</span></a>  
              </div>
              <div className="mainHeader__action__cart">
                <a href="/"><i class="fal fa-shopping-cart"></i><span>Giỏ hàng</span><span className="count">0</span></a>  
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainHeader__groupmenu">
        <div className="container">
          <div className="mainHeader__categories">
            <a href="https://osifood.vn"><i class="fal fa-home-alt"></i></a>
            <ul className="mainHeader__menulist">
              <li className="active"><a href="/" title="Trang chủ">Trang chủ</a></li>
              <li><a href="/" title="Trang chủ">Giới thiệu</a></li>
              <li><a href="/" title="Trang chủ">Sản phẩm</a></li>
              <li><a href="/" title="Trang chủ">Bài viết</a></li>
              <li><a href="/" title="Trang chủ">Liên hệ</a></li>
              <li><a href="/" title="Trang chủ">Tuyển dụng</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
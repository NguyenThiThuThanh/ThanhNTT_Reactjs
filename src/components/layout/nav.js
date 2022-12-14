import React from "react";
import { Link } from 'react-router-dom';

function Nav({ isOpen }) {
  const menuItems = [
    {
      title: 'Đang khuyến mãi',
      url: '/khuyen-mai'
    },
    {
      title: 'Thực phẩm tươi sống',
      url: '/thuc-pham-tuoi-song',
      submenu: [
        {
          title: 'Thịt - trứng - hải sản',
          url: 'thit-trung-haisan',
          submenu: [
            {
              title: 'Thịt',
              url: 'thit'
            },
            {
              title: 'Trứng',
              url: 'trung'
            }
          ]
        },
        {
          title: 'Rau - củ - quả',
          url: 'rau-cu-qua',
          submenu: [
            {
              title: 'Rau',
              url: '/rau'
            },
            {
              title: 'Củ',
              url: '/cu'
            },
            {
              title: 'Quả',
              url: '/qua'
            }
          ]
        },
        {
          title: 'Trái cây',
          url: '/trai-cay'
        },
        {
          title: 'Thực phẩm chế biến',
          url: 'thuc-pham-che-bien'
        }
      ]
    },
    {
      title: 'Thực phẩm công nghệ',
      url: '/thuc-pham-cong-nghe'
    }
  ]

  return (
    <div className={`navbar ${isOpen ? 'show' : ''}`}>
      <div className="navbar__inner">
        <div className="navbar__content">
          <div className="navbar__content__ttl">
            <Link to="/trang-chu"><i className="fal fa-home-alt"></i></Link>
          </div>
          <div className="navbar__content__block">
            <ul className="list-parents">
              {
                menuItems.map((el, index) =>
                <li className="list-item" key={index}>
                  <div className="txt-box">
                    <Link to={el.url} className="link-parent">{el.title}</Link>
                    { el.submenu && <i className="fas fa-chevron-up"></i> }
                  </div>
                  {
                    el.submenu && (
                      <ul className="list-child">
                        {
                          el.submenu.map((sub, index) =>
                            <li key={index}>
                              <div className="txt-box">
                                <Link to={sub.url}>{sub.title}</Link>
                                { sub.submenu && <i className="fas fa-chevron-up"></i> }
                              </div>
                              {
                                sub.submenu && (
                                  <ul className="list-supchild">
                                    {
                                      sub.submenu.map((supcd, index) =>
                                        <li key={index}><Link to={supcd.url}>{supcd.title}</Link></li>
                                      )
                                    }
                                  </ul>
                                )
                              }
                            </li>
                          )
                        }
                      </ul>
                    )
                  }
                </li>
                )
              }
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
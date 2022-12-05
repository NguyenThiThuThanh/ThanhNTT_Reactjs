import React from "react";

function Nav({isOpen}) {
  return (
    <div className={`navbar ${isOpen ? 'show' : ''}`}>
      <div className="navbar__inner">
        <div>
          <ul>
            <li><a href="/">Đang khuyến mãi</a></li>
            <li>
              <a href="/">Thực phẩm tươi sống</a>
              <ul>
                <li><a href="/">Thịt-trứng-hải sản</a></li>
                <li><a href="/">Rau-củ-quả</a></li>
                <li><a href="/">Trái cây</a></li>
                <li><a href="/">Thực phẩm chế biến</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav;
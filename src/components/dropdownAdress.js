import React from "react";

function DropdownAdress({isOpen}) {
  return (
    <div className={`c-dropdown c-dropdown--adress ${isOpen ? 'show' : ''}`}>
      <div className="c-dropdown__content">
        <div className="txt-title">
          <p>Khu vực mua hàng</p>
        </div>
        <div className="content-detail">
          <div className="box-address">Giao hoặc đến lấy tại:<span>288 Phan Văn Trị, Phường 11, Quận Bình Thạnh</span></div>
          <div className="txt-prov">Chọn cửa hàng gần bạn nhất để tối ưu chi phí giao hàng. Hoặc đến lấy hàng</div>
          <ul>
            {
              [ 
                {name: "OsiFood Bình Hòa", address: "288 Phan Văn Trị, Phường 11, Quận Bình Thạnh"},
                {name: "OsiFood Nguyễn Khoái", address: "84 - 86 Nguyễn Khoái, Phường 02, Quận 4"},
                {name: "OsiFood Sky9", address: "S010-011 block CT1, chung cư Sky 09, đường số 1, Khu phố 2, Phường Phú Hữu, Thành phố Thủ Đức"},
              ].map((el, index) => 
                <li key={index}>
                  <span className="icmap"><i className="fal fa-map-marker-alt"></i></span>
                  <span className="address-name">{el.name}</span>
                  <span>{el.address}</span>
                </li>
                )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DropdownAdress;
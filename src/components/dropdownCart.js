import React from "react";

function DropdownCart({isOpen}) {
  return (
    <div className={`c-dropdown c-dropdown--cart ${isOpen ? 'show' : ''}`}>
      <div className="c-dropdown__content">
        <div className="txt-title">
          <p>Giỏ hàng</p>
        </div>
        <div className="content-detail">
          <div className="mini-cart">
            <div className="mini-cart__item">
              <div className="mini-cart__left">
                <a href='/products/cahu'>
                  <div className='mini-cart__left__inner' style={{ backgroundImage: `url(https://product.hstatic.net/200000459373/product/tai_xuong__9__e20bf99465594802829fb0178e95d85d_large.jpg)` }}></div>
                </a>
              </div>
              <div className="mini-cart__right">
                <p className="mini-cart__title">	
                  <a className="mnc-title mnc-link" href="/products/cahu" title="/products/canh-bi-do-tron-do-tron-thit">Cá hú tươi 500g</a>
                  <span className="mnc-variant">500g</span>	
                </p>
                <div className="mini-cart__quantity">
                  <div className="quantity-selector">
                    <button className="qty-btn mnc-minus">
                      <i className="fal fa-minus"></i>
                    </button>
                    <input className="qty-value mnc-value" type="text" readOnly name="mnc-quantity" value="2" />
                    <button className="qty-btn mnc-plus">
                      <i className="fal fa-plus"></i>
                    </button>
                  </div>			
                  <div className="mini-cart__price"><span className="mnc-price">29,000₫</span></div>
                </div>				
                <div className="mini-cart__remove">
                  <button>
                    <i className="fal fa-times"></i>
                  </button>
                </div>	
              </div>
            </div>
          </div>
        </div>
        <div className="content-total">
          <div className="mini-cart__total">
            <div className="mnc-total mnc-total-text">TỔNG TIỀN:</div>
            <div className="mnc-total mnc-total-price">329,500₫</div>
          </div>
          <div className="mini-cart__btn">
            <a href="/gio-hang" className="linktocart">Xem giỏ hàng</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropdownCart;
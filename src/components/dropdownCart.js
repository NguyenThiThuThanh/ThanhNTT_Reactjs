import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCart, IncreaseQuantity, DecreaseQuantity } from '../redux/cart/actions';

function DropdownCart({isOpen}) {
  const redux = useSelector((state) => state);
  const dispatch = useDispatch();
  let TotalCart=0;
  let ListCart = [];
  Object.keys(redux.Carts).forEach(function(item){
    TotalCart+=redux.Carts[item].quantity * redux.Carts[item].price;
    ListCart.push(redux.Carts[item]);
  });
  const remoteCartClick = product => {
    dispatch(DeleteCart(product));
    console.log(product);
  }
  const DecreaseQuantityClick = product => {
    dispatch(DecreaseQuantity(product));
  }
  const IncreaseQuantityClick = product => {
    dispatch(IncreaseQuantity(product));
  }
  function TotalPrice(price,quantity){
    return Number(price * quantity).toLocaleString('en-US');
  }

  return (
    <div className={`c-dropdown c-dropdown--cart ${isOpen ? 'show' : ''}`}>
      <div className="c-dropdown__content">
        <div className="txt-title">
          <p>Giỏ hàng</p>
        </div>
        <div className="content-detail">
          <div className="mini-cart">
            {
              ListCart.map((prod, index) =>
              <div className="mini-cart__item" key={index}>
                <div className="mini-cart__left">
                  <a href='/products/cahu'>
                    <div className='mini-cart__left__inner' style={{ backgroundImage: `url(${prod.image})` }}></div>
                  </a>
                </div>
                <div className="mini-cart__right">
                  <p className="mini-cart__title">	
                    <a className="mnc-title mnc-link" href="/products/cahu" title="/products/canh-bi-do-tron-do-tron-thit">{prod.name}</a>
                    <span className="mnc-variant">{prod.variant}</span>	
                  </p>
                  <div className="mini-cart__quantity">
                    <div className="quantity-selector">
                      <button className="qty-btn mnc-minus" onClick={()=>DecreaseQuantityClick(index)}>
                        <i className="fal fa-minus"></i>
                      </button>
                      <input className="qty-value mnc-value" type="text" readOnly name="mnc-quantity" value={prod.quantity} />
                      <button className={`qty-btn mnc-plus ${prod.quantity < prod.quantity_prod ? '' : 'disable'}`} onClick={()=>IncreaseQuantityClick(index)}>
                        <i className="fal fa-plus"></i>
                      </button>
                    </div>			
                    <div className="mini-cart__price"><span className="mnc-price">{TotalPrice(prod.price,prod.quantity)}</span></div>
                  </div>				
                  <div className="mini-cart__remove">
                    <button onClick={()=>remoteCartClick(index)}>
                      <i className="fal fa-times"></i>
                    </button>
                  </div>	
                </div>
              </div>
              )
            }
          </div>
        </div>
        <div className="content-total">
          <div className="mini-cart__total">
            <div className="mnc-total mnc-total-text">TỔNG TIỀN:</div>
            <div className="mnc-total mnc-total-price">{Number(TotalCart).toLocaleString('en-US')}₫</div>
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
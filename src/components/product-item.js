import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AddCart, IncreaseQuantity, DecreaseQuantity } from '../redux/cart/actions';

function ProductItem(props) {
  const {data= {
    name: "Chưa có tên",
    img: "",
    price: 0,
    vendors: ""
  }} = props;

  const [show, setShow] = useState(false);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const redux = useSelector((state) => state);

  

  const addCartClick = product => {
    dispatch(AddCart(product));
    setValue(value + 1);
    if(value >= 0) {
      setShow(true);
    }
  }
  const plusValue = product => {
    if(value < data.quantity) {
      dispatch(AddCart(product));
      setValue(value + 1);
    }
  }
  const minusValue = product => {
    dispatch(DecreaseQuantity(0));
    // console.log(product);
    if (value >= 1) {
      setValue(value - 1);
    } 
    if (value <= 1) {
      setShow(false);
    }
  }
  useEffect(() => {
    if(redux.CartRemove === data.id) {
      setValue(0);
      setShow(false);
    }
  },[redux.Carts])
  

  return (
    <div className='productItem'>
      <div className='productItem__inner'>
        <div className='productItem__img'>
          <a href='/products/cahu'>
            <div className='productItem__img__inner' style={{ backgroundImage: `url(${data.img})` }}></div>
          </a>
          {data.quantity <= 0 && <div className="pro-soldout"><span>Tạm hết hàng</span></div>}
        </div>
        <div className='productItem__detail'>
          <p className='productItem__detail__vendor'><a href='/colections/osifood'>{data.vendors}</a></p>
          <h3 className='productItem__detail__name'><a href='/products/cahu'>{data.name}</a></h3>
          <p className='productItem__detail__price'>{Number(data.price).toLocaleString('en-US')}₫</p>
          <div className="productItem__detail__action">
            {data.quantity > 0 && <div className='productItem__detail__addcart' onClick={() => addCartClick(data)}><i className="fal fa-shopping-bag"></i><span>Chọn mua</span></div>}
            {data.quantity <= 0 && <div className='productItem__detail__addcart soldout'><span>Tạm hết hàng</span></div> }
            { show && 
              <div className="productItem__detail__quantity">
                <div className="boxqty">
                  <button onClick={() => minusValue(data)}><i className="fal fa-minus"></i></button>
                  <input type="text" value={value} min={0} max={value} readOnly className="proloop-qtyvalue" />
                  <button onClick={() => plusValue(data)} className={`${value < data.quantity ? '' : 'disable'}`}><i className="fal fa-plus"></i></button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;
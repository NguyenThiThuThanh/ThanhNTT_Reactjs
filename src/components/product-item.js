import React, { useState } from "react";

function ProductItem(props) {
  const {data= {
    name: "Chưa có tên",
    img: "",
    price: 0,
    vendors: ""
  }} = props;

  const [show, setShow] = useState(false);
  const [value, setValue] = useState(0);

  const addCartClick = () => {
    setShow(true);
    setValue(value + 1);
  }
  const plusValue = () => {
    if(value < data.quantity) {
      setValue(value + 1);
    }
  }
  const minusValue = () => {
    if (value >= 1) {
      setValue(value - 1);
    } 
    if (value <= 1) {
      setShow(false);
    }
  }

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
          <p className='productItem__detail__price'>{data.price}₫</p>
          <div className="productItem__detail__action">
            {data.quantity > 0 && <div className='productItem__detail__addcart' onClick={addCartClick}><i className="fal fa-shopping-bag"></i><span>Chọn mua</span></div>}
            {data.quantity <= 0 && <div className='productItem__detail__addcart soldout'><span>Tạm hết hàng</span></div> }
            { show && 
              <div className="productItem__detail__quantity">
                <div className="boxqty">
                  <button onClick={minusValue}><i className="fal fa-minus"></i></button>
                  <input type="text" value={value} onChange={e => setValue(e.target.value)} className="proloop-qtyvalue" />
                  <button onClick={plusValue} className={`${value < data.quantity ? '' : 'disable'}`}><i className="fal fa-plus"></i></button>
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
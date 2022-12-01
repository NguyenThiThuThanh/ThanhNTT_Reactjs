import React from "react";

function ProductItem(props) {
  const {data= {
    name: "Chưa có tên",
    img: "",
    price: 0,
    vendors: ""
  }} = props;

  return (
    <div className='productItem'>
      <div className='productItem__inner'>
        <div className='productItem__img'>
          <a href='/products/cahu'>
            <div className='productItem__img__inner' style={{ backgroundImage: `url(${data.img})` }}></div>
          </a>
        </div>
        <div className='productItem__detail'>
          <p className='productItem__detail__vendor'><a href='/colections/osifood'>{data.vendors}</a></p>
          <h3 className='productItem__detail__name'><a href='/products/cahu'>{data.name}</a></h3>
          <p className='productItem__detail__price'>{data.price}₫</p>
          <a href='/' className='productItem__detail__addcart'><i className="fal fa-shopping-bag"></i><span>Chọn mua</span></a>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;
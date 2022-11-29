import React from "react";

function ProductItem() {
  return (
    <div className='productItem'>
      <div className='productItem__inner'>
        <div className='productItem__img'>
          <a href='/products/cahu'>
            <div className='productItem__img__inner' style={{ backgroundImage: `url('/images/product01.jpg')` }}></div>
          </a>
        </div>
        <div className='productItem__detail'>
          <p className='productItem__detail__vendor'><a href='/colections/osifood'>OsiFood</a></p>
          <h3 className='productItem__detail__name'><a href='/products/cahu'>Cá hú tươi 500g</a></h3>
          <p className='productItem__detail__price'>32,800₫</p>
          <a href='/' className='productItem__detail__addcart'><i className="fal fa-shopping-bag"></i><span>Chọn mua</span></a>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;
function Cart() {
  return (
    <div className="bodyCart">
      <div className="container">
        <div className="bodyCart__inner">
          <div className="bodyCart__left">
            <div className="heading-cart"><h1>Giỏ hàng của bạn</h1></div>
            <div className="list-pageform-cart">
              <p>Bạn đang có <b>13 sản phẩm</b> trong giỏ hàng</p>
              <div className="list-product">
                <div className="list-product__item">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bodyCart__right"></div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
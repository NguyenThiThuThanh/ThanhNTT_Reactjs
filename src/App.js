import React, { useState } from "react";
import Header from './layout/header';
import Footer from './layout/footer';
import ProductItem from './components/product-item';

function App() {
  const [data, setData] = useState([
    {
      name: "Cá hú tươi 500g",
      img: "https://product.hstatic.net/200000459373/product/tai_xuong__9__e20bf99465594802829fb0178e95d85d_large.jpg",
      price: "32,800",
      vendors: "OsiFood",
      quantity: 1
    },
    {
      name: "Canh bí đao thịt xay 300g",
      img: "https://product.hstatic.net/200000459373/product/untitled_design__5__f8e03b03d3e84f33858dd2058851d090_large.jpg",
      price: "30,000",
      vendors: "OsiFood",
      quantity: 3
    },
    {
      name: "Canh bí đỏ tròn thịt xay 300g",
      img: "https://product.hstatic.net/200000459373/product/untitled_design__4__a60e0a1d092d45ec8536d6f1d7e36973_large.jpg",
      price: "29,000",
      vendors: "OsiFood",
      quantity: 4
    },
    {
      name: "Canh bí đỏ tròn vỉ 300g",
      img: "https://product.hstatic.net/200000459373/product/untitled_design__3__96ad1587d67b4504b64caef1f4fd7750_large.jpg",
      price: "16,000",
      vendors: "OsiFood",
      quantity: 0
    },
    {
      name: "Cánh gà 500g- Sanha",
      img: "https://product.hstatic.net/200000459373/product/untitled_design__14__e585692a9ac945c1b0b8e17baa4a99d1_large.jpg",
      price: "41,000",
      vendors: "Sanha",
      quantity: 2
    },
    {
      name: "Sữa lúa mạch Milo lốc 4 hộp 180ml",
      img: "https://product.hstatic.net/200000459373/product/untitled_design__9__c587ee8abbab4a8a967ee69e348cca8c_large.jpg",
      price: "30,000",
      vendors: "Nestle",
      quantity: 10
    }
  ]);

  return (
    <div className="App">
      <Header />
      <main className='wrapperMain'>
        <div className='section__collection'>
          <div className='container'>
            <div className='section__heading'>
              <a href='/collections/hot-product'><h2>Sản phẩm nổi bật</h2></a>
            </div>
            <div className='section__content'>
              <div className='section__list'>
                {
                  data.map((el, index) => <ProductItem data={el} key={index} />)
                }
              </div>
              <div className="section__btnMore">
                <a href="/">Xem thêm sản phẩm</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

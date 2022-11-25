import Header from './layout/header';
import Footer from './layout/footer';

function App() {
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
                <div className='productItem'>
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

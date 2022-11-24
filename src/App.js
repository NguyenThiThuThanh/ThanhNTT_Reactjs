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
              <h2>Sản phẩm nổi bật</h2>
            </div>
            <div className='section__content'>
              <div className='section__list'>
                <div className='productItem'>
                  <div className='productItem__img'>
                    <a href='/products/cahu'>
                      <img
                        alt="OsiFood"
                        src="/images/product01.jpg"
                      />
                    </a>
                  </div>
                  <div className='productItem__detail'>
                    <p className='productItem__detail__vendor'><a href='/colections/osifood'>OsiFood</a></p>
                    <h3 className='productItem__detail__name'><a href='/products/cahu'>Cá hú tươi 500g</a></h3>
                    <p className='productItem__detail__price'>32,800</p>
                    <a href='/'><i class="fal fa-shopping-bag"></i><span>Chọn mua</span></a>
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

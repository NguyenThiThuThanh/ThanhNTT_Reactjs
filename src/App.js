import Header from './layout/header';
import Footer from './layout/footer';
import ProductItem from './components/product-item';

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
                <ProductItem/>
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

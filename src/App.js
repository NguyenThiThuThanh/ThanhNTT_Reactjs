import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/index';
import configureStore from "./redux/store";
import { Provider } from 'react-redux';
const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/trang-chu" element={<Layout />} />
              <Route path="/gioi-thieu" element={<Layout />} />
              <Route path="/san-pham" element={<Layout />} />
              <Route path="/bai-viet" element={<Layout />} />
              <Route path="/lien-he" element={<Layout />} />
              <Route path="/tuyen-dung" element={<Layout />} />
              <Route path="/dang-nhap" element={<Layout />} />
              <Route path="/dang-ky" element={<Layout />} />
              <Route path="/gio-hang" element={<Layout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

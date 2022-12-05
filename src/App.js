import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/index';
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/trang-chu" element={<Layout />}></Route>
            <Route path="/gioi-thieu" element={<Layout />}></Route>
            <Route path="/san-pham" element={<Layout />}></Route>
            <Route path="/bai-viet" element={<Layout />}></Route>
            <Route path="/lien-he" element={<Layout />}></Route>
            <Route path="/tuyen-dung" element={<Layout />}></Route>
          </Route>
          <Route path="/dang-nhap" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

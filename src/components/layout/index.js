import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./header";
import Footer from "./footer";
import Home from "../../pages/home";
import Product from "../../pages/products";
import Introduce from "../../pages/introduce";
import Posts from "../../pages/posts";
import Contact from "../../pages/contact";
import Recruit from "../../pages/recruit";
import Login from "../../pages/login";
import Register from "../../pages/register";
import Cart from "../../pages/cart";

function App() {
  return (
    <div className="App">
      <Header />
      <main className='wrapperMain'>
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/trang-chu" element={<Home/>}/>
          <Route path="/gioi-thieu" element={<Introduce />}/>
          <Route path="/san-pham" element={<Product />}/>
          <Route path="/bai-viet" element={<Posts />}/>
          <Route path="/lien-he" element={<Contact />}/>
          <Route path="/tuyen-dung" element={<Recruit />}/>
          <Route path="/dang-nhap" element={<Login />} />
          <Route path="/dang-ky" element={<Register />} />
          <Route path="/gio-hang" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

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

function App() {
  return (
    <div className="App">
      <Header />
      <main className='wrapperMain'>
        <Routes>
          <Route path="/trang-chu" element={<Home/>}/>
          <Route path="/gioi-thieu" element={<Introduce />}/>
          <Route path="/san-pham" element={<Product />}/>
          <Route path="/bai-viet" element={<Posts />}/>
          <Route path="/lien-he" element={<Contact />}/>
          <Route path="/tuyen-dung" element={<Recruit />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

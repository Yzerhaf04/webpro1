<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Selamat Datang di Halaman Beranda!</h1>
      <p>Ini adalah contoh halaman beranda menggunakan JSX.</p>
      <p>Anda dapat memodifikasi konten di sini sesuai kebutuhan Anda.</p>
    </div>
  );
};

export default Home;
=======
import logo from './logo.svg';
=======
>>>>>>> feaff48 (second)
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './component/home';
import Navbar from './component/navbar';
import Footer from './component/footer';
import AboutUs from './component/aboutUs';
import Product from './component/product';

function App() {
  return(
    <div className='App'>
      {/* <p>123456789</p> */}
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='product' element={<Product />}></Route>
      <Route path='aboutUs' element={<AboutUs />}></Route>
    </Routes>
    <Footer />
    </div>
=======
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './component/home';
import Navbar from './component/navbar';
import Footer from './component/footer';
import AboutUs from './component/aboutUs';
import Product from './component/product';

function App() {
  return(
    <div className='App'>
      {/* <p>123456789</p> */}
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='product' element={<Product />}></Route>
      <Route path='aboutUs' element={<AboutUs />}></Route>
    </Routes>
    <Footer />
    </div>
>>>>>>> 0bde38a (kedua)
  )
}

export default App;
>>>>>>> fd98750 (Initialize project using Create React App)

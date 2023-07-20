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
  )
}

export default App;


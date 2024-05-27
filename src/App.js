import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Pages/Users/Dashboard/Dashboard';
import ProductDetails from './Components/Pages/Users/Products/ProductDetails';
import Navbar from './Components/Pages/Users/Dashboard/NavBar';
import ContactUs from './Components/Pages/Users/Contact/ContactUs';
import Footer from './Components/Pages/Users/Dashboard/Footer';
import Diamond from './Components/Pages/Users/Products/Diamond';
import Silver from './Components/Pages/Users/Products/Silver';
import Gold from './Components/Pages/Users/Products/Gold';
import Traditional from './Components/Pages/Users/Products/Traditional';
import Collections from './Components/Pages/Users/Products/Collections';
import Cart from './Components/Pages/Users/Cart/Cart';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/contact" element = {<ContactUs/>}/>
        <Route path="/diamond" element = {<Diamond/>}/>
        <Route path="/silver" element = {<Silver/>}/>
        <Route path="/gold" element = {<Gold/>}/>
        <Route path="/traditional" element = {<Traditional/>}/>
        <Route path="/collection" element = {<Collections/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        </Routes>
        <Footer/>
        </Router>
    </>
  );
}

export default App;

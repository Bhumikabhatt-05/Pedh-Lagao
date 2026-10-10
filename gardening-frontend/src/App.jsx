import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CartPage from './pages/Cart';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Login from './pages/Login';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Success from './pages/Success';


function App() {
  return (
   <div className='min-h-screen flex flex-col'>
      <Navbar />
      <ToastContainer position="top-right" autoClose={2000} />
      <div className='grow'>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/cart'  element={<CartPage />} />
        <Route path='/order'  element={<Order />} />
        <Route path='/placeorder'  element={<PlaceOrder />} />
        <Route path='/success'  element={<Success />} />
      </Routes>
      </div>
      <Footer />
   </div>
  );
}

export default App;
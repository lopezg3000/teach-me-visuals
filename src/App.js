import Navbar from './components/navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home';
import Shop from './components/shop';
import Cart from './components/cart';
import About from './components/about';
import Login from './components/login';
import Register from './components/register';


function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to='/home' />} />
      </Routes>
    </div>
  );
}

export default App;

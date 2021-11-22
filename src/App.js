import Navbar from './components/navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home';
import Shop from './components/shop';
import Cart from './components/cart';
import About from './components/about';
import Login from './components/login';
import Register from './components/register';
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api")
      .then((res) => res.json())
      .then((data) =>
        setData(data.message)
      );
  }, []);

  console.log(data);
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{!data ? "Loading..." : data}</p>
        </header>
      </div>
    </div>
  );
}

export default App;

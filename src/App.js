import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage'; 
import Products from './Components/Products';
import UserForm from './Components/UserForm';
import NavBar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
//import Footer from './Components/Footer';
import Contactform from './Components/Contactform';


function App() {
  return (
    <Router>
      <div className="App">
        <>
          <NavBar />
          <div style={{ paddingTop: "40px" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/user-form" element={<UserForm />} />
              <Route path="/contact" element={<Contactform />} />
            </Routes>
          </div>
        </>
      </div>
    </Router>
  );
}

export default App;
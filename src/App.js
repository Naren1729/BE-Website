import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import Products from './Components/Products';
import ProductDetail from './Components/ProductDetail';
import UserForm from './Components/UserForm';
import NavBar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Contactform from './Components/Contactform';
import AdminLogin from './Components/admin/AdminLogin';
import AdminPage from './Components/admin/AdminPage';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true');
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');

  const handleLogin = (status) => {
    setIsAdmin(status);
    localStorage.setItem('isAdmin', status);
  };

  const handleUserLogin = (status) => {
    setLoggedIn(status);
    localStorage.setItem('loggedIn', status);
  };

  return (
    <Router>
      <div className="App">
        <>
          <NavBar loggedIn={loggedIn} onLogout={() => handleUserLogin(false)} />
          <div style={{ paddingTop: "40px" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/user-form" element={<UserForm />} />
              <Route path="/contact" element={<Contactform />} />
              <Route path="/login" element={<Login onLogin={() => handleUserLogin(true)} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin-login" element={<AdminLogin onLogin={handleLogin} />} />
              {/* Admin Route */}
              <Route
                path="/admin"
                element={isAdmin ? <AdminPage /> : <Navigate to="/admin-login" replace />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </>
      </div>
    </Router>
  );
}

export default App;

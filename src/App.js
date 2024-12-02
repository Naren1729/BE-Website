import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage'; 
import Products from './Components/Products';
import UserForm from './Components/UserForm';
import NavBar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Contactform from './Components/Contactform';
import AdminLogin from './Components/admin/AdminLogin';
import AdminPage from './Components/admin/AdminPage';

function App() {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true');

  const handleLogin = (status) => {
    setIsAdmin(status);
    localStorage.setItem('isAdmin', status);
  };

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

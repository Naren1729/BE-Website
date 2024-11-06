import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CarouselFade from "./Components/Carousel";
import Footer from "./Components/Footer";
import NavBar from "./Components/Navbar";
import UserForm from "./Components/UserForm";
import Products from "./Components/Products";
import Why from "./Components/Why";
import Contactform from "./Components/Contactform";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div style={{ paddingTop: "70px" }}>
          <Routes>
            <Route path="/" element={<><CarouselFade /> <Why /> </>} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

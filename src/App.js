import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CarouselFade from "./Components/Carousel";
import Footer from "./Components/Footer";
import NavBar from "./Components/Navbar";
import UserForm from "./Components/UserForm";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div style={{ paddingTop: "70px" }}>
          <Routes>
            {/* Define routes for each component */}
            <Route path="/" element={<CarouselFade />} />
            <Route path="/enquiry" element={<UserForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

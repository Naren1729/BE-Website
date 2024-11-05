import "./App.css";
import CarouselFade from "./Components/Carousel";
import Footer from "./Components/Footer";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ paddingTop: "70px" }}>
        {" "}
        {/* Push content down to avoid overlap */}
        <CarouselFade />
      </div>
      <Footer />
    </div>
  );
}

export default App;

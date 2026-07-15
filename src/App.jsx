import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Middle from "./components/Middle";
import Middle2 from "./components/Middle2";
import Middle3 from "./components/Middle3";
import redline1 from "./assets/redline.png";
import End from "./components/End";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="middle-wrapper">
        <img src={redline1} className="red-line" alt="" />
        <Middle />
        <Middle2 />
        <Middle3 />
      </div>
      <End />
      <Footer />
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import WorldRecord from "./pages/WorldRecord";
import About from "./pages/About";
import Quotes from "./pages/Quotes";

import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-screen"
        style={{
          background: "linear-gradient(270deg, #b91c1c, #f97316, #facc15)",
          backgroundSize: "600% 600%",
          animation: "gradientMove 12s ease infinite"
        }}
      >
        <Navbar/>
        <div className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/world-record" element={<WorldRecord />} />
            <Route path="/about" element={<About />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;

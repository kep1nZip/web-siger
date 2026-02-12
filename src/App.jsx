import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollTop from "./components/ScrollTop.jsx";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import WorldRecord from "./pages/WorldRecord";
import About from "./pages/About";
import Quotes from "./pages/Quotes";

import Footer from "./components/Footer";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, filter: "blur(12px)", y: 40 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        exit={{ opacity: 0, filter: "blur(12px)", y: -40 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/world-record" element={<WorldRecord />} />
          <Route path="/about" element={<About />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
    <ScrollTop/>
      <div
        className="min-h-screen"
        style={{
          background: "linear-gradient(270deg, #b91c1c, #f97316, #facc15)",
          backgroundSize: "600% 600%",
          animation: "gradientMove 12s ease infinite"
        }}
      >
        <Navbar/>

        <div className="pt-14">
          <AnimatedRoutes/>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

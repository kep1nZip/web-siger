import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollTop from "./components/ScrollTop.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import WorldRecord from "./pages/WorldRecord";
import About from "./pages/About";
import Quotes from "./pages/Quotes";

import Landing from "./pages/Landing";
import Login from "./pages/Login";

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

          {/* Root SELALU ke Landing */}
          <Route path="/" element={<Navigate to="/landing" replace />} />

          {/* Public */}
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />

          {/* Main Pages (Guest & Admin boleh masuk) */}
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/world-record" element={<WorldRecord />} />
          <Route path="/about" element={<About />} />
          <Route path="/quotes" element={<Quotes />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/landing" replace />} />

        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function LayoutWrapper() {
  const location = useLocation();

  // Navbar & Footer tidak tampil di Landing & Login
  const hideLayout =
    location.pathname === "/landing" ||
    location.pathname === "/login";

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10
        bg-[linear-gradient(120deg,#0f0f0f,#1a0f0f,#2a0f0f)]
      "></div>

      <div className="absolute -z-10 w-[700px] h-[700px] 
        bg-orange-500/20 blur-[180px] rounded-full 
        top-[-200px] right-[-200px]"
      ></div>

      <div className="absolute -z-10 w-[600px] h-[600px] 
        bg-red-600/20 blur-[160px] rounded-full 
        bottom-[-250px] left-[-200px]"
      ></div>

      <div className="absolute inset-0 -z-10 opacity-30 animate-gradientMove
        bg-[linear-gradient(270deg,#b91c1c,#f97316,#facc15,#ef4444)]
        bg-[length:400%_400%]"
      ></div>

      {!hideLayout && <Navbar />}

      <div className={!hideLayout ? "pt-14" : ""}>
        <AnimatedRoutes />
        {!hideLayout && <Footer />}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <LayoutWrapper />
    </BrowserRouter>
  );
}

export default App;

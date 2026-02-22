import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/landing");
  };

  const navItemClass = ({ isActive }) =>
    `transition relative ${
      isActive
        ? "text-white font-semibold"
        : "text-zinc-300 hover:text-white"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50
        backdrop-blur-md bg-black/40
        transition-all duration-300
        ${scrolled ? "py-3" : "py-6"}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <h1 className={`text-white font-bold ${scrolled ? "text-lg" : "text-xl"}`}>
          SIGERS
        </h1>

        <div className="flex gap-6 text-sm items-center">
          <NavLink to="/home" end className={navItemClass}>
            Home
          </NavLink>
          <NavLink to="/gallery" className={navItemClass}>
            Foto Aib
          </NavLink>
          <NavLink to="/world-record" className={navItemClass}>
            World Record
          </NavLink>
          <NavLink to="/about" className={navItemClass}>
            About
          </NavLink>
          <NavLink to="/quotes" className={navItemClass}>
            Quotes
          </NavLink>

          {/* Dynamic Auth Button */}
          {!token ? (
            <button
              onClick={() => navigate("/landing")}
              className="text-green-400 hover:text-green-300 transition"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-300 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-white font-bold text-lg tracking-wide">
          SIGERS
        </h1>

        <div className="flex gap-6 text-sm">
          <Link to="/" className="text-zinc-300 hover:text-white transition">
            Home
          </Link>
          <Link to="/gallery" className="text-zinc-300 hover:text-white transition">
            Foto Aib
          </Link>
          <Link to="/world-record" className="text-zinc-300 hover:text-white transition">
            World Record
          </Link>
          <Link to="/about" className="text-zinc-300 hover:text-white transition">
            About
          </Link>
          <Link to="/quotes" className="text-zinc-300 hover:text-white transition">
            Quotes
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { useState, useEffect } from "react";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-violet-900/40 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-violet-500/30 blur-md group-hover:bg-violet-400/50 transition-all duration-300" />
            <img
              src={Logo}
              alt="Logo"
              className="relative w-9 h-9 drop-shadow-[0_0_8px_rgba(167,139,250,0.8)] group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="text-white font-bold text-lg tracking-[0.15em] uppercase">
            <span className="text-violet-400">Dark</span>Studio
          </span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          <li className="relative group cursor-pointer">
            <Link
              to="/"
              className="text-gray-300 text-sm font-medium tracking-widest uppercase hover:text-violet-300 transition-colors duration-300"
            >
              Inicio
            </Link>
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
          </li>

          <li className="relative group cursor-pointer">
            <Link
              to="/4c3rc4"
              className="text-gray-300 text-sm font-medium tracking-widest uppercase hover:text-violet-300 transition-colors duration-300"
            >
              Acerca
            </Link>
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
          </li>

          <li className="relative group cursor-pointer">
            <Link
              to="/c0nT4ct0"
              className="text-gray-300 text-sm font-medium tracking-widest uppercase hover:text-violet-300 transition-colors duration-300"
            >
              Contacto
            </Link>
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:flex items-center gap-2 relative overflow-hidden px-5 py-2 rounded-lg border border-violet-500/50 text-violet-300 text-sm font-semibold tracking-wide uppercase cursor-pointer group transition-all duration-300 hover:border-violet-400 hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
          <span className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative">Iniciar sesión</span>
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-px bg-violet-400 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-violet-400 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-violet-400 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-64 border-t border-violet-900/30" : "max-h-0"
        } bg-black/90 backdrop-blur-md`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          <li className="relative group cursor-pointer">
            <Link
              to="/"
              className="text-gray-300 text-sm font-medium tracking-widest uppercase hover:text-violet-300 transition-colors duration-300"
            >
              Inicio
            </Link>
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
          </li>

          <li className="relative group cursor-pointer">
            <Link
              to="/4c3rc4"
              className="text-gray-300 text-sm font-medium tracking-widest uppercase hover:text-violet-300 transition-colors duration-300"
            >
              Acerca
            </Link>
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
          </li>

          <li className="relative group cursor-pointer">
            <Link
              to="/c0nT4ct0"
              className="text-gray-300 text-sm font-medium tracking-widest uppercase hover:text-violet-300 transition-colors duration-300"
            >
              Contacto
            </Link>
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li>
            <button className="w-full px-5 py-2 rounded-lg border border-violet-500/50 text-violet-300 text-sm font-semibold tracking-wide uppercase cursor-pointer hover:border-violet-400 hover:text-white transition-all duration-300">
              Iniciar sesión
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

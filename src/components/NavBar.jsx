import { useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-[#1b231d]/80 backdrop-blur-md border-b border-[#f7eacb]/10 transition-all duration-300">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* --- 1. LOGO (Estilo Composto) --- */}
        <a href="/" className="group flex items-center gap-2.5">
          {/* Ícone Quadrado Verde */}
          <div className="w-8 h-8 bg-[#008c4c] rounded-lg flex items-center justify-center text-[#ffd23f] font-bold text-xs shadow-[0_0_10px_rgba(0,140,76,0.4)] group-hover:scale-105 transition-transform">
            ST
          </div>
          {/* Texto Logo */}
          <div className="flex flex-col">
            <span className="text-lg font-bold font-display tracking-tight text-[#f7eacb] leading-none group-hover:text-white transition-colors">
              Superteam
            </span>
            <span className="text-[10px] font-bold text-[#ffd23f] uppercase tracking-widest leading-none mt-0.5">
              Brasil 🇧🇷
            </span>
          </div>
        </a>

        {/* --- 2. MENU DESKTOP --- */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a 
                href={href} 
                className="text-sm font-medium text-[#f7eacb]/80 hover:text-[#ffd23f] transition-colors relative group"
              >
                {label}
                {/* Linha animada embaixo do link */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffd23f] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* --- 3. CTA & MOBILE TOGGLE --- */}
        <div className="flex items-center gap-4">
          
          {/* Botão "Junte-se" (Visível em Desktop) */}
          <a 
            href="#join"
            className="hidden md:block bg-[#ffd23f] text-[#1b231d] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,210,63,0.3)]"
          >
            Junte-se Agora
          </a>

          {/* Botão Menu Hambúrguer (Visível em Mobile) */}
          <button 
            className="md:hidden text-[#f7eacb] hover:text-[#ffd23f] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
               // Ícone X (Fechar)
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
            ) : (
               // Ícone Menu (Hambúrguer)
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </nav>

      {/* --- 4. MENU MOBILE DROPDOWN --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1b231d] border-t border-[#f7eacb]/10 absolute w-full left-0 top-full shadow-2xl animate-fade-in-down">
          <ul className="flex flex-col p-6 gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a 
                  href={href}
                  className="block text-[#f7eacb] hover:text-[#ffd23f] font-medium py-2 border-b border-[#f7eacb]/5"
                  onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-4">
               <a href="#join" className="block w-full text-center bg-[#ffd23f] text-[#1b231d] px-5 py-3 rounded-xl font-bold hover:bg-white transition-colors">
                  Junte-se Agora
               </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
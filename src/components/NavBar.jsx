import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Membros", href: "/membros" },
  { label: "Eventos", href: "#events" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled 
          ? "bg-[#1b231d]/90 backdrop-blur-md border-b border-[#f7eacb]/10 py-3" // Scrolled: Fundo escuro vidro + borda embaixo
          : "bg-transparent py-5" // Topo: Transparente e mais espaçado
        }
      `}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="group flex flex-col leading-none select-none">
          <span className="font-display font-bold text-xl tracking-tight text-[#f7eacb] group-hover:text-white transition-colors">
            Superteam
          </span>
          <span className="text-[10px] font-bold text-[#ffd23f] uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300">
            Brasil 🇧🇷
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              {href.startsWith("/") ? (
                <Link 
                  to={href} 
                  className="text-sm font-medium text-[#f7eacb]/80 hover:text-[#ffd23f] transition-colors relative group"
                >
                  {label}
                  {/* Linha animada embaixo (opcional, estilo clássico) */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffd23f] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <a 
                  href={href} 
                  className="text-sm font-medium text-[#f7eacb]/80 hover:text-[#ffd23f] transition-colors relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffd23f] transition-all duration-300 group-hover:w-full"></span>
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* CTA & MENU MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          <a 
            href="https://discord.gg/superteam"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block px-6 py-2.5 rounded-full bg-[#f7eacb] text-[#1b231d] text-sm font-bold hover:bg-[#ffd23f] hover:scale-105 transition-all shadow-lg shadow-[#ffd23f]/10"
          >
            Junte-se
          </a>

          <button 
            className="md:hidden text-[#f7eacb] hover:text-[#ffd23f] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </nav>

      {/* MENU MOBILE DROPDOWN (FULL WIDTH) */}
      <div 
        className={`
          absolute top-full left-0 w-full bg-[#1b231d] border-b border-[#f7eacb]/10 transition-all duration-300 overflow-hidden
          ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col p-6 gap-4 items-center">
          {navLinks.map(({ label, href }) => (
            <li key={label} className="w-full text-center">
              {href.startsWith("/") ? (
                  <Link 
                    to={href}
                    className="block w-full py-3 text-[#f7eacb] font-medium hover:text-[#ffd23f] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
              ) : (
                  <a 
                    href={href}
                    className="block w-full py-3 text-[#f7eacb] font-medium hover:text-[#ffd23f] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </a>
              )}
            </li>
          ))}
          <li className="pt-2 w-full">
               <a 
                 href="https://discord.gg/superteam" 
                 target="_blank"
                 rel="noreferrer"
                 className="block w-full text-center bg-[#ffd23f] text-[#1b231d] px-4 py-3 rounded-xl font-bold hover:brightness-110 transition-all"
                 onClick={() => setIsMenuOpen(false)}
               >
                 Junte-se Agora
               </a>
          </li>
        </ul>
      </div>

    </header>
  );
};

export default NavBar;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // IMPORTANTE: Importe o Link
import { Menu, X } from "lucide-react";

// --- DADOS DOS LINKS ---
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Membros", href: "/membros" }, // MUDE ISSO: De '#membros' para '/membros'
  { label: "Eventos", href: "#events" },
  { label: "Earn", href: "#earn" },
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
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
      
      <nav 
        className={`
          relative w-full max-w-5xl transition-all duration-500 ease-in-out
          flex items-center justify-between
          border border-[#f7eacb]/10 backdrop-blur-xl shadow-2xl shadow-black/20
          ${scrolled 
            ? "bg-[#1b231d]/90 py-3 px-6 rounded-full" 
            : "bg-[#1b231d]/60 py-4 px-8 rounded-2xl"
          }
        `}
      >
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
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              {/* LÓGICA MÁGICA: */}
              {/* Se o link começar com "/", é uma NOVA PÁGINA (usa Link) */}
              {/* Se começar com "#", é uma SEÇÃO (usa a tag a) */}
              {href.startsWith("/") ? (
                <Link 
                  to={href} 
                  className="px-5 py-2 rounded-full text-sm font-medium text-[#f7eacb]/70 hover:text-[#1b231d] hover:bg-[#ffd23f] transition-all duration-300 block"
                >
                  {label}
                </Link>
              ) : (
                <a 
                  href={href} 
                  className="px-5 py-2 rounded-full text-sm font-medium text-[#f7eacb]/70 hover:text-[#1b231d] hover:bg-[#ffd23f] transition-all duration-300 block"
                >
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* CTA & MENU MOBILE */}
        <div className="flex items-center gap-4">
          <a 
            href="https://discord.gg/superteam"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block px-6 py-2 rounded-full border border-[#f7eacb]/20 text-[#f7eacb] text-sm font-bold hover:bg-[#f7eacb] hover:text-[#1b231d] transition-all"
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

      {/* MENU MOBILE DROPDOWN */}
      <div 
        className={`
          absolute top-full left-0 w-full px-4 mt-2 transition-all duration-300 origin-top
          ${isMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"}
        `}
      >
        <div className="max-w-5xl mx-auto bg-[#1b231d] border border-[#f7eacb]/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl">
          <ul className="flex flex-col gap-2">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                {href.startsWith("/") ? (
                   <Link 
                     to={href}
                     className="block px-4 py-3 rounded-xl text-[#f7eacb] hover:bg-[#2f6b3f]/30 hover:text-[#ffd23f] transition-all font-medium"
                     onClick={() => setIsMenuOpen(false)}
                   >
                     {label}
                   </Link>
                ) : (
                   <a 
                     href={href}
                     className="block px-4 py-3 rounded-xl text-[#f7eacb] hover:bg-[#2f6b3f]/30 hover:text-[#ffd23f] transition-all font-medium"
                     onClick={() => setIsMenuOpen(false)}
                   >
                     {label}
                   </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
import React from "react";
import { Twitter, Linkedin, Instagram, Globe, MessageCircle, Send } from "lucide-react";

const Footer = () => {
  
  const quickLinks = [
    { name: "Eventos", href: "#eventos" },
    { name: "Membros", href: "#membros" },
    { name: "Ganhe (Earn)", href: "#earn" },
    { name: "Subsídios (Grants)", href: "#grants" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/SuperteamBR", label: "Twitter / X" },
    { icon: Instagram, href: "https://instagram.com/superteambr", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/superteambr", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://discord.gg/superteam", label: "Discord" },
    { icon: Send, href: "https://t.me/superteambr", label: "Telegram" },
  ];

  return (
    <footer className="relative mt-20 pt-0">
      
      {/* --- BACKGROUND E LINHA (Expansão Full Width) --- 
          Esta div usa w-screen e posicionamento absoluto centralizado 
          para "escapar" de qualquer container pai e preencher a tela toda.
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full bg-[#0b0e0c] -z-10">
        
        {/* Linha Solana Animada */}
        <div className="w-full h-1.5 bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#ffd23f] bg-[length:200%_200%] animate-gradient-xy shadow-[0_0_15px_rgba(20,241,149,0.5)]"></div>
        
        {/* Glows de Fundo */}
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#9945FF]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#14F195]/5 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      {/* --- CONTEÚDO (Mantém-se centralizado) --- */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* COLUNA 1: MARCA & SOBRE */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 bg-[#008c4c] rounded-lg flex items-center justify-center text-[#ffd23f] font-bold text-sm shadow-[0_0_15px_rgba(0,140,76,0.4)] group-hover:scale-105 transition-transform">
                    ST
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-bold font-display tracking-tight text-[#f7eacb] leading-none">
                        Superteam
                    </span>
                    <span className="text-xs font-bold text-[#ffd23f] uppercase tracking-widest leading-none mt-0.5">
                        Brasil 🇧🇷
                    </span>
                </div>
            </a>
            
            <p className="text-[#f7eacb]/60 text-sm leading-relaxed max-w-xs">
              A comunidade de talentos da Solana no Brasil. Ajudamos construtores a lançar projetos, ganhar em cripto e escalar globalmente.
            </p>
          </div>

          {/* COLUNA 2: LINKS RÁPIDOS */}
          <div>
            <h4 className="text-white font-bold font-display text-lg mb-6">Explorar</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-[#f7eacb]/70 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#9945FF] hover:to-[#14F195] transition-all font-medium inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3: ECODISSISTEMA */}
          <div>
            <h4 className="text-white font-bold font-display text-lg mb-6">Ecossistema</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://superteam.fun" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#f7eacb]/70 hover:text-white transition-colors">
                    <Globe size={16} className="text-[#9945FF]" />
                    Superteam Global
                </a>
              </li>
              <li>
                <a href="https://solana.com" target="_blank" rel="noreferrer" className="text-[#f7eacb]/70 hover:text-white transition-colors">
                    Solana Foundation
                </a>
              </li>
              <li>
                <a href="https://build.superteam.fun" target="_blank" rel="noreferrer" className="text-[#f7eacb]/70 hover:text-white transition-colors">
                    Superteam Earn
                </a>
              </li>
            </ul>
          </div>

          {/* COLUNA 4: SOCIAL */}
          <div>
            <h4 className="text-white font-bold font-display text-lg mb-6">Conecte-se</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#1b231d] border border-[#f7eacb]/10 flex items-center justify-center text-[#f7eacb] hover:bg-white hover:text-[#0b0e0c] hover:border-white transition-all duration-300 group"
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- RODAPÉ INFERIOR --- */}
        <div className="pt-8 border-t border-[#f7eacb]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#f7eacb]/40">
          <p>
            &copy; {new Date().getFullYear()} Superteam Brasil. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6">
             <a href="#" className="hover:text-[#ffd23f] transition-colors">Termos de Uso</a>
             <a href="#" className="hover:text-[#ffd23f] transition-colors">Privacidade</a>
             <span className="flex items-center gap-1">
                Powered by <span className="font-bold text-[#9945FF]">Solana</span>
             </span>
          </div>
        </div>
      </div>

      {/* Styles para a Animação do Gradiente */}
      <style jsx>{`
        @keyframes gradient-xy {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-xy {
          animation: gradient-xy 3s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
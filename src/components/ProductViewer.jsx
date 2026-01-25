import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket, Calendar, Banknote, Briefcase, GraduationCap } from "lucide-react";

// --- DADOS DOS CARDS (Conteúdo da Missão) ---
const items = [
  {
    id: 1,
    title: "Suporte & Mentoria",
    subtitle: "Para Construtores",
    description: "Acesso direto a engenheiros da Solana Foundation, sessões de feedback de produto e conexões com fundadores experientes para desbloquear seu potencial.",
    icon: Rocket,
    colSpan: "md:col-span-2", // Card Largo
    theme: "green"
  },
  {
    id: 2,
    title: "Eventos",
    subtitle: "IRL & Online",
    description: "De Hackathons globais a meetups locais em SP e Rio. Nossa agenda conecta você com a vanguarda da Web3.",
    icon: Calendar,
    colSpan: "md:col-span-1", // Card Quadrado
    theme: "yellow"
  },
  {
    id: 3,
    title: "Grants & Funding",
    subtitle: "Capital Semente",
    description: "Conectamos projetos promissores a subsídios da Solana Foundation e VCs. Transforme sua ideia em protocolo financiado.",
    icon: Banknote,
    colSpan: "md:col-span-1",
    theme: "yellow"
  },
  {
    id: 4,
    title: "Jobs & Bounties",
    subtitle: "Ganhe em Crypto",
    description: "Oportunidades de emprego full-time e recompensas (bounties) pagas em USDC/SOL por tarefas de design, código e conteúdo.",
    icon: Briefcase,
    colSpan: "md:col-span-2",
    theme: "green"
  },
  {
    id: 5,
    title: "Educação",
    subtitle: "Workshops & Bootcamps",
    description: "Aprenda Rust, Anchor e desenvolvimento Solana com materiais em português e instrutores nativos.",
    icon: GraduationCap,
    colSpan: "md:col-span-3", // Card Full Width
    theme: "dark"
  },
];

const Mission = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="missao" className="py-24 bg-[#1b231d] relative overflow-hidden min-h-screen">
      
      {/* Elementos de Fundo (Grid Decorativo Sutil) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7eacb10_1px,transparent_1px),linear-gradient(to_bottom,#f7eacb10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-display text-[#f7eacb] mb-6">
            O Que Nós <span className="text-[#ffd23f]">Fazemos</span>
          </h2>
          <p className="text-lg text-[#f7eacb]/80 max-w-2xl mx-auto font-light">
            Somos o motor de aceleração para o ecossistema Solana no Brasil. 
            Clique nos cards para explorar nossos pilares.
          </p>
        </div>

        {/* --- BENTO GRID (Cards) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <motion.div
              layoutId={`card-${item.id}`}
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`
                ${item.colSpan} 
                relative group cursor-pointer overflow-hidden rounded-3xl border border-[#f7eacb]/10
                bg-[#2f6b3f]/10 backdrop-blur-sm hover:border-[#ffd23f]/50 transition-colors
                h-64 flex flex-col justify-end p-8 shadow-lg
              `}
            >
              {/* Luzes de Fundo (Ambient Light no Card) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">
                {item.theme === 'green' && (
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#008c4c] rounded-full blur-[80px]"></div>
                )}
                {item.theme === 'yellow' && (
                    <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-[#ffd23f] rounded-full blur-[80px]"></div>
                )}
                {item.theme === 'dark' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#008c4c]/20 to-[#ffd23f]/20"></div>
                )}
              </div>

              {/* Conteúdo do Card (Resumido) */}
              <div className="relative z-10">
                <motion.h3 layoutId={`subtitle-${item.id}`} className="text-[#f7eacb]/60 text-xs font-bold uppercase tracking-widest mb-2">
                  {item.subtitle}
                </motion.h3>
                <motion.h2 layoutId={`title-${item.id}`} className="text-2xl md:text-3xl font-bold font-display text-white group-hover:text-[#ffd23f] transition-colors">
                  {item.title}
                </motion.h2>
              </div>
              
              {/* Ícone Flutuante */}
              <div className="absolute top-6 right-6 text-[#f7eacb]/20 group-hover:text-[#ffd23f] group-hover:scale-110 transition-all duration-300">
                <item.icon size={32} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MODAL / CARD EXPANDIDO --- */}
        <AnimatePresence>
          {selectedId && (
            <>
              {/* Backdrop Escuro (Fundo borrado) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 cursor-pointer"
              />

              {/* Card Expandido (Centralizado) */}
              <div className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none">
                {items.filter(item => item.id === selectedId).map(item => (
                  <motion.div
                    layoutId={`card-${selectedId}`}
                    key={item.id}
                    className="w-full max-w-2xl bg-[#1b231d] border border-[#ffd23f]/30 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto relative flex flex-col md:flex-row h-auto max-h-[90vh]"
                  >
                    
                    {/* Botão Fechar */}
                    <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                        className="absolute top-4 right-4 z-20 bg-black/20 p-2 rounded-full text-white hover:bg-[#ffd23f] hover:text-black transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {/* Lado Visual (Esquerda/Topo) */}
                    <div className="h-48 md:h-auto md:w-2/5 bg-gradient-to-br from-[#008c4c] to-[#1b231d] relative flex items-center justify-center p-8 overflow-hidden">
                        <motion.div 
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <item.icon size={80} className="text-[#ffd23f] drop-shadow-[0_0_15px_rgba(255,210,63,0.5)]" />
                        </motion.div>
                        
                        {/* Textura Decorativa */}
                        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    </div>

                    {/* Lado Conteúdo (Direita/Baixo) */}
                    <div className="p-8 md:p-10 flex flex-col justify-center bg-[#1b231d] md:w-3/5">
                        <motion.h5 layoutId={`subtitle-${item.id}`} className="text-[#008c4c] font-bold uppercase tracking-widest text-xs mb-2">
                            {item.subtitle}
                        </motion.h5>
                        <motion.h2 layoutId={`title-${item.id}`} className="text-3xl md:text-4xl font-display font-bold text-[#f7eacb] mb-6 leading-tight">
                            {item.title}
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[#f7eacb]/80 text-lg leading-relaxed font-light"
                        >
                            {item.description}
                        </motion.p>
                        
                        <motion.button 
                            className="mt-8 self-start bg-[#ffd23f] text-[#1b231d] px-8 py-3 rounded-full font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,210,63,0.2)]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Saiba Mais
                        </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Mission;
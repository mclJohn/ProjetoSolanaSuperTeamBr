import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Twitter, ShieldCheck, MapPin, ExternalLink, X, Briefcase, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

// --- DADOS MOCKADOS (Com BIO adicionada para o card expandido) ---
const allMembers = [
  {
    id: 1,
    name: "Raphaël Silva",
    role: "Head of Growth",
    company: "Superteam Brasil",
    location: "São Paulo, SP",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop",
    skills: ["Core Team", "Growth", "Biz Dev", "Strategy"],
    bio: "Liderando a expansão do ecossistema Solana no Brasil. Especialista em estratégias de crescimento e parcerias estratégicas.",
    twitter: "https://twitter.com",
    isCore: true
  },
  {
    id: 2,
    name: "Luiza Code",
    role: "DevRel Lead",
    company: "Superteam Brasil",
    location: "Rio de Janeiro, RJ",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    skills: ["Core Team", "Rust", "Community", "Education"],
    bio: "Engenheira de software apaixonada por Rust e Web3. Focada em educar a próxima geração de desenvolvedores Solana.",
    twitter: "https://twitter.com",
    isCore: true
  },
  {
    id: 3,
    name: "João Rustacean",
    role: "Senior Engineer",
    company: "Drift Protocol",
    location: "Remoto",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop",
    skills: ["Rust", "Backend", "DeFi", "Solidity"],
    bio: "Maximalista de performance. Contribuindo para o core do Drift Protocol e criando ferramentas open-source.",
    twitter: "https://twitter.com",
    isCore: false
  },
  {
    id: 4,
    name: "Ana NFT",
    role: "3D Artist",
    company: "Magic Eden",
    location: "Curitiba, PR",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    skills: ["Design", "NFT", "Frontend", "Art Direction"],
    bio: "Artista digital explorando a interseção entre arte generativa e blockchain. Criadora de coleções blue chip na Solana.",
    twitter: "https://twitter.com",
    isCore: false
  },
  {
    id: 5,
    name: "Pedro Content",
    role: "Writer",
    company: "Freelancer",
    location: "Belo Horizonte, MG",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
    skills: ["Conteúdo", "Marketing", "Copywriting"],
    bio: "Traduzindo 'crypto-speak' para português claro. Ajudo protocolos a contarem suas histórias.",
    twitter: "https://twitter.com",
    isCore: false
  },
];

const categories = ["Todos", "Core Team", "Rust", "Frontend", "Design", "Conteúdo", "Biz Dev"];

const MembersPage = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  // ESTADO PARA CONTROLAR O CARD SELECIONADO
  const [selectedId, setSelectedId] = useState(null);

  const filteredMembers = useMemo(() => {
    return allMembers
      .filter((member) => {
        const matchesCategory = activeFilter === "Todos" || member.skills.includes(activeFilter);
        const matchesSearch = 
          member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.company.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => (a.isCore === b.isCore) ? 0 : a.isCore ? -1 : 1);
  }, [activeFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-[#1b231d] text-[#f7eacb] relative overflow-x-hidden font-sans">
      
      {/* Background Atmosférico */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#008c4c]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ffd23f]/10 rounded-full blur-[120px]" />
      </div>

      {/* --- OVERLAY DE CARD EXPANDIDO (MODAL) --- */}
      <AnimatePresence>
        {selectedId && (
          <>
            {/* Fundo Escuro (Backdrop) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 cursor-pointer"
            />
            
            {/* O Card Expandido */}
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4">
                <div className="w-full max-w-lg pointer-events-auto">
                    {allMembers.filter(item => item.id === selectedId).map(member => (
                        <motion.div
                            layoutId={selectedId} // A MÁGICA ACONTECE AQUI
                            key={member.id}
                            className={`
                                relative overflow-hidden rounded-[2.5rem] shadow-2xl
                                ${member.isCore 
                                    ? "bg-gradient-to-br from-[#1b231d] via-[#2a1a3f] to-[#1b231d] border border-[#9945FF]/50" 
                                    : "bg-[#1b231d] border border-[#f7eacb]/20"
                                }
                            `}
                        >
                            {/* Botão Fechar */}
                            <button 
                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Conteúdo do Card Expandido */}
                            <div className="flex flex-col">
                                {/* Topo com Imagem */}
                                <div className="h-48 relative">
                                     <div className={`absolute inset-0 ${member.isCore ? "bg-[#9945FF]/20" : "bg-[#f7eacb]/10"}`}></div>
                                     <img src={member.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" />
                                     
                                     {/* Avatar Centralizado flutuando */}
                                     <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                                        <motion.div 
                                            layoutId={`image-${member.id}`}
                                            className={`
                                                w-32 h-32 rounded-full p-1.5 bg-[#1b231d] shadow-2xl
                                                ${member.isCore ? "bg-gradient-to-br from-[#9945FF] to-[#ffd23f]" : "bg-[#f7eacb]/20"}
                                            `}
                                        >
                                            <img src={member.image} alt="" className="w-full h-full rounded-full object-cover border-4 border-[#1b231d]" />
                                        </motion.div>
                                     </div>
                                </div>

                                {/* Texto e Detalhes */}
                                <div className="pt-16 pb-8 px-8 text-center">
                                    <motion.h2 layoutId={`title-${member.id}`} className="text-3xl font-bold font-display text-[#f7eacb] mb-1">
                                        {member.name}
                                    </motion.h2>
                                    <motion.p layoutId={`role-${member.id}`} className="text-[#008c4c] font-bold text-lg mb-6">
                                        {member.role} @ {member.company}
                                    </motion.p>

                                    {/* A "História" da Carta */}
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="bg-[#f7eacb]/5 rounded-2xl p-6 mb-6 text-left"
                                    >
                                        <h4 className="text-[#ffd23f] font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <Briefcase size={14} /> Sobre o Jogador
                                        </h4>
                                        <p className="text-[#f7eacb]/80 leading-relaxed text-sm">
                                            {member.bio || "Membro ativo da comunidade Superteam Brasil, contribuindo para o crescimento do ecossistema Solana."}
                                        </p>
                                    </motion.div>

                                    {/* Stats / Skills */}
                                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                                        {member.skills.map(skill => (
                                            <span key={skill} className="text-xs px-3 py-1.5 rounded-lg font-medium bg-[#f7eacb]/5 border border-[#f7eacb]/10 text-[#f7eacb]/70">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Ações */}
                                    <div className="flex gap-3 justify-center">
                                        <a href={member.twitter} target="_blank" rel="noreferrer" className="flex-1 bg-[#1DA1F2] text-white py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2">
                                            <Twitter size={18} /> Twitter
                                        </a>
                                        <button className="flex-1 bg-[#f7eacb] text-[#1b231d] py-3 rounded-xl font-bold text-sm hover:bg-[#ffd23f] transition-all flex items-center justify-center gap-2">
                                            <ExternalLink size={18} /> Portfolio
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
          </>
        )}
      </AnimatePresence>


      {/* Barra de Busca e Filtros */}
      <div className="sticky top-24 z-30 container mx-auto px-6 mb-12 mt-32">
        <div className="
            bg-transparent backdrop-blur-xl border border-[#f7eacb]/10 
            rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between
        ">
            <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f7eacb]/40" size={20} />
                <input 
                    type="text" 
                    placeholder="Buscar membro..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border border-[#f7eacb]/10 rounded-xl py-3 pl-10 pr-4 text-[#f7eacb] focus:outline-none focus:border-[#ffd23f]/50 transition-colors placeholder:text-[#f7eacb]/20"
                />
            </div>
            <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                <div className="flex gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all border ${activeFilter === cat ? "bg-[#ffd23f] border-[#ffd23f] text-[#1b231d]" : "bg-transparent border-[#f7eacb]/10 text-[#f7eacb]/60 hover:text-[#f7eacb]"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* Grid de Membros */}
      <main className="container mx-auto px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
                <MemberCard 
                    key={member.id} 
                    member={member} 
                    onClick={() => setSelectedId(member.id)} // CLIQUE AQUI
                />
            ))}
        </div>
      </main>
    </div>
  );
};

// --- CARD PEQUENO (GRID) ---
const MemberCard = ({ member, onClick }) => {
    const isCore = member.isCore;
    
    return (
        <motion.div
            layoutId={member.id} // LIGAÇÃO MÁGICA COM O CARD EXPANDIDO
            onClick={onClick}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className={`
                group relative rounded-[2rem] overflow-hidden p-[1px] h-full cursor-pointer
                ${isCore 
                    ? "bg-gradient-to-br from-[#9945FF] via-[#1b231d] to-[#ffd23f] shadow-[0_0_20px_rgba(153,69,255,0.2)]" 
                    : "bg-gradient-to-b from-[#f7eacb]/20 to-[#f7eacb]/5 hover:bg-[#f7eacb]/30"
                }
            `}
        >
            <div className="bg-[#151a17] h-full w-full rounded-[2rem] overflow-hidden relative flex flex-col">
                <div className={`h-32 w-full relative ${isCore ? "bg-[#9945FF]/20" : "bg-[#f7eacb]/5"}`}>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    {isCore && (
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#0b0e0c]/60 backdrop-blur-md border border-[#9945FF]/50 px-3 py-1.5 rounded-full text-[#d4b3ff] text-xs font-bold uppercase tracking-wider shadow-lg">
                            <ShieldCheck size={14} />
                            Core Team
                        </div>
                    )}
                </div>

                <div className="px-8 pb-8 flex flex-col items-center text-center flex-grow -mt-16 relative z-10">
                    <motion.div 
                        layoutId={`image-${member.id}`} // Animação da imagem
                        className={`
                            w-32 h-32 rounded-full p-1.5 mb-5 bg-[#151a17] shadow-xl
                            ${isCore ? "bg-gradient-to-br from-[#9945FF] to-[#ffd23f]" : "bg-[#f7eacb]/20"}
                        `}
                    >
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full rounded-full object-cover border-4 border-[#151a17]" 
                        />
                    </motion.div>

                    <motion.h3 layoutId={`title-${member.id}`} className="text-2xl font-bold font-display text-[#f7eacb] group-hover:text-[#ffd23f] transition-colors mb-1">
                        {member.name}
                    </motion.h3>
                    
                    <motion.div layoutId={`role-${member.id}`} className="flex flex-col items-center gap-1 mb-6">
                        <span className="text-[#008c4c] font-bold text-lg">{member.role}</span>
                        <span className="text-[#f7eacb]/50 text-sm flex items-center gap-1">
                            @{member.company}
                        </span>
                    </motion.div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#f7eacb]/10 to-transparent mb-6"></div>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {member.skills.slice(0, 3).map(skill => (
                            <span 
                                key={skill} 
                                className={`
                                    text-xs px-3 py-1.5 rounded-lg font-medium border
                                    ${skill === "Core Team"
                                        ? "bg-[#9945FF]/10 border-[#9945FF]/30 text-[#d4b3ff]"
                                        : "bg-[#f7eacb]/5 border-[#f7eacb]/10 text-[#f7eacb]/60 group-hover:border-[#f7eacb]/30"
                                    }
                                `}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    
                    <div className="mt-auto text-xs font-bold text-[#f7eacb]/40 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Clique para ver carta
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MembersPage;
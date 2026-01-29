import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Twitter, Globe, ArrowLeft, ShieldCheck, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// --- DADOS MOCKADOS ---
const allMembers = [
  {
    id: 1,
    name: "Raphaël Silva",
    role: "Head of Growth",
    company: "Superteam Brasil",
    location: "São Paulo, SP",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop",
    skills: ["Core Team", "Growth", "Biz Dev", "Strategy"],
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
    twitter: "https://twitter.com",
    isCore: false
  },
];

const categories = ["Todos", "Core Team", "Rust", "Frontend", "Design", "Conteúdo", "Biz Dev"];

const MembersPage = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

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
    <div className="min-h-screen bg-[#0b0e0c] text-[#f7eacb] relative overflow-x-hidden font-sans">
      
      {/* Background (Mantido) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#9945FF]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#008c4c]/10 rounded-full blur-[120px]" />
      </div>

      {/* Header (Mantido) */}
      {/* Header */}
      <header className="relative z-20 pt-32 pb-12 px-6 container mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[#f7eacb]/60 hover:text-[#ffd23f] transition-colors mb-8 group">
           {/* Ícone de voltar ou texto vazio se preferir manter como estava */}
        </Link>

        <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">
              {/* CORREÇÃO AQUI: Removi o gradiente bugado e coloquei cor sólida */}
              Diretório de <span className="text-[#ffd23f]">Membros</span>
            </h1>
            <p className="text-xl text-[#f7eacb]/70 max-w-2xl">
              Conheça os construtores que estão moldando o futuro da Solana no Brasil.
            </p>
        </div>
      </header>

      {/* Barra de Busca e Filtros */}
      <div className="sticky top-4 z-30 container mx-auto px-6 mb-16">
        <div className="bg-[#1b231d]/80 backdrop-blur-xl border border-[#f7eacb]/10 rounded-2xl p-4 shadow-2xl flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f7eacb]/40" size={20} />
                <input 
                    type="text" 
                    placeholder="Buscar membro..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#0b0e0c]/50 border border-[#f7eacb]/10 rounded-xl py-3 pl-10 pr-4 text-[#f7eacb] focus:outline-none focus:border-[#ffd23f]/50 transition-colors placeholder:text-[#f7eacb]/20"
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

      {/* Grid de Membros - AJUSTADO PARA CARDS MAIORES */}
      <main className="container mx-auto px-6 pb-24 relative z-10">
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" // Alterado para lg:grid-cols-3 e gap-8
        >
            <AnimatePresence>
                {filteredMembers.map((member) => (
                    <MemberCard key={member.id} member={member} />
                ))}
            </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
};

const MemberCard = ({ member }) => {
    const isCore = member.isCore;
    
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`
                group relative rounded-[2rem] overflow-hidden p-[1px] h-full
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                ${isCore 
                    ? "bg-gradient-to-br from-[#9945FF] via-[#1b231d] to-[#ffd23f] shadow-[0_0_20px_rgba(153,69,255,0.2)]" 
                    : "bg-gradient-to-b from-[#f7eacb]/20 to-[#f7eacb]/5 hover:bg-[#f7eacb]/30"
                }
            `}
        >
            {/* Miolo do Card */}
            <div className="bg-[#151a17] h-full w-full rounded-[2rem] overflow-hidden relative flex flex-col">
                
                {/* 1. Capa / Banner */}
                <div className={`h-32 w-full relative ${isCore ? "bg-[#9945FF]/20" : "bg-[#f7eacb]/5"}`}>
                    {/* Padrão de fundo opcional */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    
                    {/* Badge Core no canto */}
                    {isCore && (
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#0b0e0c]/60 backdrop-blur-md border border-[#9945FF]/50 px-3 py-1.5 rounded-full text-[#d4b3ff] text-xs font-bold uppercase tracking-wider shadow-lg">
                            <ShieldCheck size={14} />
                            Core Team
                        </div>
                    )}
                </div>

                {/* 2. Conteúdo Centralizado */}
                <div className="px-8 pb-8 flex flex-col items-center text-center flex-grow -mt-16 relative z-10">
                    
                    {/* Avatar Grande */}
                    <div className={`
                        w-32 h-32 rounded-full p-1.5 mb-5 bg-[#151a17] shadow-xl
                        ${isCore ? "bg-gradient-to-br from-[#9945FF] to-[#ffd23f]" : "bg-[#f7eacb]/20"}
                    `}>
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full rounded-full object-cover border-4 border-[#151a17]" 
                        />
                    </div>

                    {/* Nome e Cargo */}
                    <h3 className="text-2xl font-bold font-display text-[#f7eacb] group-hover:text-[#ffd23f] transition-colors mb-1">
                        {member.name}
                    </h3>
                    
                    <div className="flex flex-col items-center gap-1 mb-6">
                        <span className="text-[#008c4c] font-bold text-lg">{member.role}</span>
                        <span className="text-[#f7eacb]/50 text-sm flex items-center gap-1">
                            @{member.company}
                            {member.location && (
                                <>
                                    <span className="w-1 h-1 rounded-full bg-[#f7eacb]/30 mx-1"></span>
                                    <MapPin size={12} /> {member.location}
                                </>
                            )}
                        </span>
                    </div>

                    {/* Divisor */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#f7eacb]/10 to-transparent mb-6"></div>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {member.skills.map(skill => (
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

                    {/* Footer / Ações */}
                    <div className="mt-auto flex gap-3 w-full justify-center">
                         <a 
                            href={member.twitter} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f7eacb]/5 hover:bg-[#1DA1F2] hover:text-white transition-all text-sm font-bold text-[#f7eacb]/70 border border-[#f7eacb]/5 w-full justify-center"
                        >
                            <Twitter size={18} />
                            Seguir
                        </a>
                        <button className="p-2.5 rounded-xl bg-[#f7eacb]/5 hover:bg-[#f7eacb] hover:text-[#1b231d] transition-all border border-[#f7eacb]/5 text-[#f7eacb]/70">
                            <ExternalLink size={18} />
                        </button>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default MembersPage;
import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Code2, PenTool, TrendingUp, Users } from "lucide-react";

// --- DADOS MOCKADOS DOS MEMBROS (Baseado na referência visual) ---
const members = [
  {
    id: 1,
    name: "Alex Scott",
    role: "Superteam UAE",
    company: "Founder",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop",
    skill: "Biz Dev",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Sherry Peter",
    role: "DeBridge",
    company: "Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    skill: "Dev",
    icon: Code2,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Kulture",
    role: "Kulture Electric",
    company: "Artist",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop",
    skill: "Design",
    icon: PenTool,
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: 4,
    name: "King",
    role: "DevForce 99",
    company: "Lead Dev",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
    skill: "Dev",
    icon: Code2,
    color: "from-green-400 to-emerald-600"
  },
  {
    id: 5,
    name: "CryptoBae",
    role: "FOMO",
    company: "Content Creator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    skill: "Content",
    icon: Users,
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 6,
    name: "Xoheb Shah",
    role: "Flash Trade",
    company: "Trader",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    skill: "Biz Dev",
    icon: TrendingUp,
    color: "from-blue-600 to-indigo-600"
  }
];

// Componente de Cartão Individual
const MemberCard = ({ member }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className="relative w-72 h-96 rounded-3xl overflow-hidden cursor-pointer group shrink-0 mx-4"
  >
    {/* Imagem de Fundo */}
    <img 
      src={member.image} 
      alt={member.name} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    
    {/* Overlay Gradiente */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#1b231d] via-[#1b231d]/40 to-transparent opacity-90"></div>

    {/* Borda Brilhante no Hover */}
    <div className={`absolute inset-0 border-2 border-transparent group-hover:border-[#ffd23f]/50 rounded-3xl transition-colors duration-300`}></div>

    {/* Conteúdo */}
    <div className="absolute bottom-0 left-0 w-full p-6">
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${member.color} text-white text-[10px] font-bold uppercase tracking-wider mb-3 shadow-lg`}>
        <member.icon size={12} />
        {member.skill}
      </div>

      <h3 className="text-2xl font-bold font-display text-[#f7eacb] mb-1">{member.name}</h3>
      <p className="text-[#f7eacb]/70 text-sm font-medium mb-4">{member.role}</p>

      {/* Social Links (Aparecem no Hover) */}
      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        <button className="bg-[#f7eacb] p-2 rounded-full text-[#1b231d] hover:bg-[#ffd23f] transition-colors">
            <Twitter size={16} />
        </button>
        <button className="bg-[#f7eacb] p-2 rounded-full text-[#1b231d] hover:bg-[#008c4c] hover:text-white transition-colors">
            <Linkedin size={16} />
        </button>
      </div>
    </div>
  </motion.div>
);

const Members = () => {
  return (
    <section id="membros" className="py-32 bg-[#1b231d] relative overflow-hidden">
      
      {/* Luz de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#008c4c]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold font-display text-[#f7eacb] mb-6">
          Nossos <span className="text-[#ffd23f]">Membros</span>
        </h2>
        <p className="text-[#f7eacb]/80 text-lg max-w-2xl mx-auto">
          Líderes da indústria, fundadores de top tier e criadores influentes construindo o futuro na Solana.
        </p>
      </div>

      {/* --- CARROSSEL INFINITO (MARQUEE) --- */}
      <div className="relative w-full overflow-hidden py-10">
        
        {/* Gradientes nas laterais para suavizar o corte */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1b231d] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1b231d] to-transparent z-20 pointer-events-none"></div>

        <div className="flex w-max">
          {/* Loop 1 */}
          <motion.div 
            className="flex"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </motion.div>

          {/* Loop 2 (Duplicado para efeito infinito) */}
          <motion.div 
            className="flex"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {members.map((member) => (
              <MemberCard key={`${member.id}-duplicate`} member={member} />
            ))}
          </motion.div>
           {/* Loop 3 (Triplicado para telas largas) */}
           <motion.div 
            className="flex"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {members.map((member) => (
              <MemberCard key={`${member.id}-triplicate`} member={member} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="text-center mt-12 relative z-10">
        <a 
            href="#"
            className="inline-flex items-center gap-2 text-[#f7eacb] border border-[#f7eacb]/30 px-8 py-3 rounded-full hover:bg-[#f7eacb] hover:text-[#1b231d] transition-all duration-300 font-bold"
        >
            <Users size={18} />
            Ver Todos os Membros
        </a>
      </div>

    </section>
  );
};

export default Members;
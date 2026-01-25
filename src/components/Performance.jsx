import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight, Instagram } from "lucide-react";

// --- DADOS ATUALIZADOS (Baseados na agenda real do Superteam Brasil) ---
const upcomingEvents = [
  {
    id: 1,
    date: "15",
    month: "AGO",
    title: "Solana Brasil Sessions",
    location: "São Paulo, SP (Faria Lima)",
    type: "IRL",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop", // Vibe corporativa/tech SP
    link: "https://luma.com/superteambrasil"
  },
  {
    id: 2,
    date: "02",
    month: "SET",
    title: "Solana Copa América",
    location: "Online (Global)",
    type: "COMPETIÇÃO",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1000&auto=format&fit=crop", // Vibe digital/global
    link: "https://superteam.fun/hackathon"
  },
  {
    id: 3,
    date: "20",
    month: "SET",
    title: "Supermeetup Rio",
    location: "Rio de Janeiro, RJ",
    type: "NETWORKING",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1000&auto=format&fit=crop", // Vibe Rio/Cristo
    link: "https://luma.com/superteambrasil"
  }
];

// Imagens que refletem a comunidade (Coding, Pizza, Palestras)
const galleryImages = [
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop", // Palestra Tech
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", // Devs colaborando
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop", // Networking social
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop", // Mulheres na tech
];

const Events = () => {
  return (
    <section id="eventos" className="py-24 bg-[#1b231d] relative overflow-hidden">
      
      {/* Background Decorativo (Luzes da Marca) */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#008c4c]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ffd23f]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- CABEÇALHO DA SEÇÃO --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold font-display text-[#f7eacb] mb-4">
              Agenda & <br/> <span className="text-[#008c4c]">Comunidade</span>
            </h2>
            <p className="text-[#f7eacb]/80 text-lg font-light">
              Onde a inovação encontra a cultura brasileira. De Hackathons globais a happy hours locais.
            </p>
          </div>
          
          {/* Link direto para o Luma oficial */}
          <a 
            href="https://luma.com/superteambrasil" 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-2 text-[#ffd23f] font-bold border-b border-[#ffd23f] pb-1 hover:text-white hover:border-white transition-all"
          >
            Ver Calendário Oficial (Lu.ma)
            <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* --- LISTA DE PRÓXIMOS EVENTOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {upcomingEvents.map((event, index) => (
            <motion.a 
              href={event.link}
              target="_blank"
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative block rounded-3xl overflow-hidden bg-[#2f6b3f]/10 border border-[#f7eacb]/10 hover:border-[#ffd23f]/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Imagem Cover com Overlay */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b231d] to-transparent z-10 opacity-60"></div>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Badge de Data (Estilo Calendário) */}
                <div className="absolute top-4 right-4 z-20 bg-[#f7eacb] text-[#1b231d] rounded-xl px-3 py-2 text-center shadow-lg">
                  <span className="block text-xl font-bold leading-none font-display">{event.date}</span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider">{event.month}</span>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest ${
                        event.type === 'IRL' ? 'bg-[#ffd23f] text-[#1b231d]' : 
                        event.type === 'COMPETIÇÃO' ? 'bg-[#9945FF] text-white' : 'bg-[#008c4c] text-white'
                    }`}>
                        {event.type}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-[#f7eacb] mb-2 group-hover:text-[#ffd23f] transition-colors font-display">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-[#f7eacb]/60 text-sm">
                  <MapPin size={16} className="text-[#008c4c]" />
                  {event.location}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* --- GALERIA DE DESTAQUES (Grid Mosaico) --- */}
        <div className="relative rounded-[2.5rem] bg-[#2f6b3f]/10 border border-[#f7eacb]/5 p-8 md:p-12 overflow-hidden">
             
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 relative z-10">
                <div>
                    <h3 className="text-3xl font-bold font-display text-[#f7eacb] mb-2">Highlights</h3>
                    <p className="text-[#f7eacb]/60">Momentos marcantes da nossa história recente.</p>
                </div>
                <div className="flex gap-4 mt-4 md:mt-0">
                     <a href="https://www.instagram.com/superteambr" target="_blank" className="w-12 h-12 rounded-full border border-[#f7eacb]/20 flex items-center justify-center text-[#f7eacb] hover:bg-[#ffd23f] hover:text-[#1b231d] hover:border-[#ffd23f] transition-all">
                        <Instagram size={20} />
                     </a>
                </div>
             </div>

             {/* Grid de Fotos */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10 h-96 md:h-80">
                {galleryImages.map((img, i) => (
                    <motion.div 
                        key={i}
                        className={`relative rounded-2xl overflow-hidden cursor-pointer group ${i === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-2 md:row-span-1'}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <img src={img} alt="Galeria Superteam" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-[#008c4c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                    </motion.div>
                ))}
             </div>
        </div>

        {/* --- CTA FINAL --- */}
        <div className="mt-20 text-center">
            <motion.a 
                href="https://luma.com/superteambrasil"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-[#ffd23f] text-[#1b231d] px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(255,210,63,0.2)] hover:shadow-[0_0_50px_rgba(255,210,63,0.4)] transition-shadow"
            >
                <Calendar className="w-6 h-6" />
                Explorar Agenda Completa
            </motion.a>
        </div>

      </div>
    </section>
  );
};

export default Events;
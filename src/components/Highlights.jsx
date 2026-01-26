import React from "react";
import { motion } from "framer-motion";
import { Twitter, Heart, MessageCircle, Repeat2, ExternalLink } from "lucide-react";

// --- 1. DADOS MOCKADOS: PARCEIROS ---
const partners = [
  { name: "Solana Foundation", logo: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png" },
  { name: "Metaplex", logo: "https://miro.medium.com/v2/resize:fit:2400/1*n7hQXmgsfpxFDQe8kbuN4g.png" },
  { name: "Phantom", logo: "https://coinlaunch.space/media/images/4/8/5/0/4850.sp3ow1.192x192.png" },
  { name: "Drift Protocol", logo: "https://assets-validator.s3.eu-west-1.amazonaws.com/Drift+Logo+Circular.png" },
  { name: "Jupiter", logo: "https://cryptologos.cc/logos/jupiter-ag-jup-logo.png" },
  { name: "Magic Eden", logo: "https://ord.cdn.magiceden.dev/static_resources/ME+logo.png" },
];

// --- 2. DADOS MOCKADOS: TWEETS (WALL OF LOVE) ---
const tweets = [
  {
    id: 1,
    name: "Alex Scott",
    handle: "@afscott",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&auto=format&fit=crop",
    content: "Orgulho absurdo do trabalho que estamos fazendo no Brasil. A @SuperteamBR está transformando o cenário local de Web3. 🇧🇷🚀",
    date: "10:30 AM · 14 Ago, 2025",
    likes: 420,
    retweets: 69,
    hasImage: false
  },
  {
    id: 2,
    name: "Valentina",
    handle: "@vaacross",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    content: "Apliquei para um grant na segunda, recebi o feedback na quarta e fui aprovada na sexta. A velocidade da Solana + o suporte da Superteam é surreal. 🔥",
    date: "09:15 AM · 20 Set, 2025",
    likes: 850,
    retweets: 120,
    hasImage: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Joe Takayama",
    handle: "@takayamajoe",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    content: "O ecossistema brasileiro é diferente. A energia nos meetups do Rio e SP é contagiante. Buildando forte! 🧱",
    date: "4:20 PM · 02 Out, 2025",
    likes: 310,
    retweets: 45,
    hasImage: false
  },
  {
    id: 4,
    name: "New Tribe Capital",
    handle: "@newtribecap",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=150&auto=format&fit=crop",
    content: "Solana é um dos ecossistemas mais fortes e continua crescendo. Parabéns @SuperteamBR pelo evento incrível ontem! #SolanaSummer",
    date: "11:00 AM · 15 Nov, 2025",
    likes: 500,
    retweets: 90,
    hasImage: false
  },
  {
    id: 5,
    name: "DevForce 99",
    handle: "@kingdev",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=150&auto=format&fit=crop",
    content: "Acabei de ganhar meu primeiro Bounty em USDC! Simplesmente codando em Rust no fim de semana. Valeu a pena demais entrar no Discord.",
    date: "08:45 PM · 10 Dez, 2025",
    likes: 1200,
    retweets: 300,
    hasImage: false
  }
];

// --- 3. COMPONENTE CARD DE TWEET ---
const TweetCard = ({ tweet }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-[#1b231d]/60 backdrop-blur-xl border border-[#f7eacb]/10 p-6 rounded-3xl mb-6 break-inside-avoid hover:border-[#9945FF]/50 transition-colors duration-300 shadow-xl"
  >
    {/* Header */}
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-3">
        <img src={tweet.avatar} alt={tweet.name} className="w-10 h-10 rounded-full object-cover border border-[#f7eacb]/20" />
        <div>
          <h4 className="font-bold text-[#f7eacb] text-sm">{tweet.name}</h4>
          <p className="text-[#f7eacb]/50 text-xs">{tweet.handle}</p>
        </div>
      </div>
      <Twitter className="w-5 h-5 text-[#9945FF]" fill="currentColor" />
    </div>

    {/* Content */}
    <p className="text-[#f7eacb]/90 text-sm leading-relaxed mb-4">
      {tweet.content}
    </p>

    {/* Image (Optional) */}
    {tweet.hasImage && (
        <div className="mb-4 rounded-xl overflow-hidden border border-[#f7eacb]/10">
            <img src={tweet.image} alt="Tweet media" className="w-full h-auto object-cover" />
        </div>
    )}

    {/* Footer Meta */}
    <div className="flex justify-between items-center text-[#f7eacb]/40 text-xs border-t border-[#f7eacb]/5 pt-4">
      <span>{tweet.date}</span>
      <div className="flex gap-4">
        <div className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
            <Heart size={14} /> {tweet.likes}
        </div>
        <div className="flex items-center gap-1 hover:text-green-500 transition-colors cursor-pointer">
            <Repeat2 size={14} /> {tweet.retweets}
        </div>
      </div>
    </div>
  </motion.div>
);

const PartnersAndTweets = () => {
  return (
    <section className="py-24 bg-[#0a0c0b] relative overflow-hidden">
      
      {/* --- BACKGROUND ANIMADO (SOLANA GRADIENT) --- */}
      {/* Roxo Solana */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#9945FF]/20 rounded-full blur-[120px] animate-[pulse_8s_infinite] pointer-events-none mix-blend-screen"></div>
      {/* Verde Solana */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#14F195]/10 rounded-full blur-[120px] animate-[pulse_10s_infinite_reverse] pointer-events-none mix-blend-screen"></div>
      {/* Amarelo STBR */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#ffd23f]/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- 1. SEÇÃO DE PARCEIROS (TRUSTED BY) --- */}
        <div className="mb-32 text-center">
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[#f7eacb]/60 uppercase tracking-[0.2em] text-sm font-bold mb-10"
            >
                Apoiado pelos gigantes do Ecossistema
            </motion.p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80">
                {partners.map((partner, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, filter: "grayscale(0%)", opacity: 1 }}
                        className="grayscale opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer w-32 h-16 flex items-center justify-center"
                    >
                        <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
                    </motion.div>
                ))}
            </div>
        </div>

        {/* --- 2. SEÇÃO WALL OF LOVE (TWEETS) --- */}
        <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-[#f7eacb] via-[#9945FF] to-[#14F195] mb-6 text-center">
                A Vibe da Comunidade
            </h2>
            <p className="text-[#f7eacb]/70 max-w-2xl text-center text-lg">
                Não acredite apenas na nossa palavra. Veja o que builders, fundadores e criadores estão construindo conosco.
            </p>
        </div>

        {/* Masonry Layout com CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {tweets.map((tweet) => (
                <TweetCard key={tweet.id} tweet={tweet} />
            ))}
        </div>

        {/* Link Externo */}
        <div className="mt-16 flex justify-center">
             <a href="https://twitter.com/SuperteamBR" target="_blank" className="flex items-center gap-2 text-[#9945FF] font-bold hover:text-[#14F195] transition-colors border-b border-[#9945FF]/30 pb-1">
                Siga @SuperteamBR no X <ExternalLink size={16} />
             </a>
        </div>

      </div>
    </section>
  );
};

export default PartnersAndTweets;
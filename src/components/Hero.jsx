import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const InteractiveCoin = () => {
  const [isFlipping, setIsFlipping] = useState(false);

  // Variáveis para rastrear a posição do mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Configuração da física (mola) para suavizar o movimento
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  // Transforma a posição do mouse em rotação (Tilt 3D)
  const rotateX = useTransform(mouseY, [-100, 100], [15, -15]);
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15]);

  // Função para lidar com o movimento do mouse sobre o elemento
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  // Reseta a posição quando o mouse sai
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Função para girar a moeda ao clicar (Flip)
  const handleClick = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      // O estado reseta depois da animação (1s)
      setTimeout(() => setIsFlipping(false), 1000);
    }
  };

  return (
    <motion.div
      className="relative w-full h-full cursor-pointer perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d", // Essencial para o 3D
      }}
      // Animação do Flip (Giro 360)
      animate={{
        rotateY: isFlipping ? 360 * 3 : 0, // Gira 3 vezes
      }}
      transition={{
        rotateY: { duration: 1, ease: "easeInOut" }, // Duração do giro
      }}
    >
      {/* Imagem da Moeda */}
      <motion.img
        src="solanaLogocircular.png"
        alt="Solana Coin"
        className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,210,63,0.4)]"
        // Efeito sutil de flutuar quando não está interagindo
        animate={{ y: [0, -15, 0] }}
        transition={{
            y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }
        }}
        // Efeito de brilho/reflexo ao passar o mouse
        whileHover={{ scale: 1.1 }}
      />
      
      {/* Camada de Brilho (Glare) - Opcional, dá realismo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-[#1b231d]">
      
      {/* --- 1. BACKGROUND ATMOSFÉRICO --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#008c4c]/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ffd23f]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* --- 2. CONTEÚDO DE TEXTO (Esquerda) --- */}
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#008c4c]/30 bg-[#2f6b3f]/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#ffd23f] animate-pulse"></span>
            <span className="text-xs font-bold text-[#ffd23f] uppercase tracking-wider">
              Hub Oficial Solana
            </span>
          </div>

          <h1 className="
            text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-2
            text-transparent bg-clip-text
            bg-gradient-to-r 
            from-[#f7eacb] from-50% 
            via-[#9945FF] via-75% 
            to-[#00FF85] to-100%
            bg-[length:200%_auto]
            bg-[position:0%_50%]
            hover:bg-[position:100%_50%]
            transition-[background-position] duration-700 ease-in-out
            cursor-default
          ">
            A Casa dos <br />
            Construtores <br />
            Brasileiros.
          </h1>

          <p className="text-lg md:text-xl text-[#f7eacb]/80 max-w-lg leading-relaxed font-light">
            Misturando a energia do Brasil com a velocidade da Solana. 
            Conecte-se, construa e escale no ecossistema mais vibrante da Web3.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <a href="#join" className="group relative px-8 py-4 bg-[#008c4c] text-white rounded-full font-bold text-lg overflow-hidden shadow-[0_0_30px_rgba(0,140,76,0.4)] transition-transform hover:scale-105">
              <span className="relative z-10">Entrar na Comunidade</span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-[#2f6b3f]/50"></div>
            </a>

            <a href="#about" className="px-8 py-4 border border-[#f7eacb]/20 text-[#f7eacb] rounded-full font-bold text-lg hover:bg-[#f7eacb]/10 transition-colors text-center">
              Explorar Ecossistema
            </a>
          </div>
        </div>

        {/* --- 3. ELEMENTO VISUAL INTERATIVO (Direita) --- */}
        <div className="hidden md:flex justify-center items-center relative h-[500px]">
          
          {/* Círculos Orbitais */}
          <div className="absolute w-[400px] h-[400px] border border-[#f7eacb]/10 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none"></div>
          <div className="absolute w-[300px] h-[300px] border border-[#ffd23f]/20 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none"></div>

          {/* ÁREA DA MOEDA INTERATIVA */}
          <div className="relative z-10 w-4/5 aspect-square flex items-center justify-center">
            <InteractiveCoin />
            
            {/* Card Flutuante (Mantido, mas com z-index menor para não atrapalhar o clique na moeda) */}
            <div className="absolute -bottom-10 -left-10 bg-[#1b231d]/60 backdrop-blur-md border border-[#f7eacb]/20 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce pointer-events-none" style={{ animationDuration: '3s' }}>
                <div className="w-10 h-10 bg-[#008c4c] rounded-full flex items-center justify-center text-[#ffd23f]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                    <p className="text-xs text-[#f7eacb]/60 uppercase font-bold">Total Grants</p>
                    <p className="text-lg font-bold text-white">$500k+</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#2f6b3f" fillOpacity="0.1"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
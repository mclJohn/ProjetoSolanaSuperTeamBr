import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-[#1b231d]">
      
      {/* --- 1. BACKGROUND ATMOSFÉRICO (Blobs de Luz) --- */}
      {/* Luz Verde (Topo Direita) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#008c4c]/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      {/* Luz Amarela (Fundo Esquerda) */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ffd23f]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* --- 2. CONTEÚDO DE TEXTO (Esquerda) --- */}
        <div className="flex flex-col items-start gap-6">
          
          {/* Badge "Construído na Solana" */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#008c4c]/30 bg-[#2f6b3f]/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#ffd23f] animate-pulse"></span>
            <span className="text-xs font-bold text-[#ffd23f] uppercase tracking-wider">
              Hub Oficial Solana
            </span>
          </div>

          {/* Headline Principal com Efeito de Reveal no Hover */}
          <h1 className="
            text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-2
            
            /* 1. Define o texto como transparente para que o fundo apareça no formato das letras */
            text-transparent bg-clip-text
            
            /* 2. Cria um degradê gigante (200% de largura) */
            /* Metade Esquerda (0-50%): Cor Creme Sólida (Estado Inicial) */
            /* Metade Direita (50-100%): Degradê Solana (Roxo -> Verde) */
            bg-gradient-to-r 
            from-[#f7eacb] from-50% 
            via-[#9945FF] via-75% 
            to-[#00FF85] to-100%
            
            /* 3. Estica o background */
            bg-[length:200%_auto]
            
            /* 4. Posição Inicial: Mostra apenas a metade esquerda (Creme) */
            bg-[position:0%_50%]
            
            /* 5. Hover: Desliza para a metade direita (Degradê) */
            hover:bg-[position:100%_50%]
            
            /* 6. Suavidade da transição */
            transition-[background-position] duration-700 ease-in-out
            
            cursor-default
          ">
            A Casa dos <br />
            Construtores <br />
            Brasileiros.
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-[#f7eacb]/80 max-w-lg leading-relaxed font-light">
            Misturando a energia do Brasil com a velocidade da Solana. 
            Conecte-se, construa e escale no ecossistema mais vibrante da Web3.
          </p>

          {/* Botões de Ação (CTAs) */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            
            {/* Botão Primário (Verde Tropical) */}
            <a href="#join" className="group relative px-8 py-4 bg-[#008c4c] text-white rounded-full font-bold text-lg overflow-hidden shadow-[0_0_30px_rgba(0,140,76,0.4)] transition-transform hover:scale-105">
              <span className="relative z-10">Entrar na Comunidade</span>
              {/* Efeito de brilho ao passar o mouse */}
              <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-[#2f6b3f]/50"></div>
            </a>

            {/* Botão Secundário (Outline) */}
            <a href="#about" className="px-8 py-4 border border-[#f7eacb]/20 text-[#f7eacb] rounded-full font-bold text-lg hover:bg-[#f7eacb]/10 transition-colors text-center">
              Explorar Ecossistema
            </a>
          </div>
        </div>

        {/* --- 3. ELEMENTO VISUAL (Direita) --- */}
        <div className="hidden md:flex justify-center items-center relative">
          
          {/* Círculos Orbitais Decorativos */}
          <div className="absolute w-[400px] h-[400px] border border-[#f7eacb]/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute w-[300px] h-[300px] border border-[#ffd23f]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

          {/* Placeholder do Elemento 3D (Tucano/Cristal) */}
          <div className="relative z-10 w-4/5 aspect-square flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
            
            {/* Imagem Placeholder (Solana 3D) */}
            <img 
              src="https://cdn3d.iconscout.com/3d/premium/thumb/solana-coin-4991623-4156997.png" 
              alt="Elemento 3D Solana Brasil" 
              className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,210,63,0.3)] filter hover:brightness-110 transition duration-500"
            />
            
            {/* Card Flutuante de Informação (Efeito Glass) */}
            <div className="absolute -bottom-10 -left-10 bg-[#1b231d]/60 backdrop-blur-md border border-[#f7eacb]/20 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
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
      
      {/* Divisor de Onda (Opcional - Transição suave para a próxima seção) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#2f6b3f" fillOpacity="0.1"></path>
        </svg>
      </div>

      {/* Styles inline para animação de flutuar */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
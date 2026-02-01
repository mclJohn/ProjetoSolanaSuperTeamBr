import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useRef, useState } from "react";
import { Volume2, VolumeX, TrendingUp, Users, Calendar, Trophy } from "lucide-react"; // Adicionei ícones novos

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const containerRef = useRef(null);
    const videoRef = useRef(null); 
    const [isMuted, setIsMuted] = useState(true);

    // --- DADOS DAS ESTATÍSTICAS ---
    const stats = [
        { 
            id: 1, 
            value: "$500k+", 
            label: "Distribuídos em Grants", 
            icon: TrendingUp,
            color: "text-[#ffd23f]" // Amarelo
        },
        { 
            id: 2, 
            value: "1.500+", 
            label: "Membros Ativos", 
            icon: Users,
            color: "text-[#008c4c]" // Verde
        },
        { 
            id: 3, 
            value: "50+", 
            label: "Eventos Realizados", 
            icon: Calendar,
            color: "text-[#f7eacb]" // Creme
        },
        { 
            id: 4, 
            value: "200+", 
            label: "Bounties Pagos", 
            icon: Trophy,
            color: "text-[#9945FF]" // Roxo (Solana)
        }
    ];

    const toggleAudio = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const forceMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
        }
    };

    useGSAP(() => {
        if (!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: '+=5000', 
                    scrub: 0.5,
                    pin: true,
                    onLeave: () => forceMute(),
                    onLeaveBack: () => forceMute(),
                }
            });

            timeline
                .fromTo('.video-mask-container', 
                    { 
                        maskSize: '20000%', 
                        webkitMaskSize: '20000%',
                        opacity: 1
                    },
                    { 
                        maskSize: '500px', 
                        webkitMaskSize: '500px',
                        ease: 'power2.inOut',
                        duration: 4 
                    }
                )
                .to('.video-mask-container', {
                    opacity: 0,
                    scale: 0.8,
                    duration: 1,
                    ease: 'power1.out',
                    onComplete: () => forceMute() 
                })
                // O texto aparece
                .to('.content', { 
                    opacity: 1, 
                    y: 0, 
                    ease: 'power1.out',
                    duration: 1
                }, "<");
        }
    }, [isTablet]);

    return (
        <section id="showcase" ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
            
            {/* VÍDEO COM MÁSCARA */}
            <div 
                className="video-mask-container absolute inset-0 w-full h-full flex items-center justify-center z-10"
                style={{
                    maskImage: 'url("/mask.svg")',
                    WebkitMaskImage: 'url("/mask.svg")',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskSize: '20000%', 
                    WebkitMaskSize: '20000%',
                }}
            >
                <video 
                    ref={videoRef}
                    src="/videos/superteam.mp4" 
                    loop 
                    muted={isMuted} 
                    autoPlay 
                    playsInline 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* BOTÃO DE ÁUDIO */}
            <div className="absolute bottom-10 right-10 z-50 mix-blend-difference">
                <button 
                    onClick={toggleAudio}
                    className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 group"
                >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
            </div>

            {/* --- CONTEÚDO DE TEXTO (ESTATÍSTICAS) --- */}
            <div className="content relative z-20 h-full flex flex-col justify-center items-center opacity-0 translate-y-20 pointer-events-none">
                <div className="container mx-auto px-6 pointer-events-auto">
                    
                    {/* Título da Seção */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-[#f7eacb] mb-4">
                            Impacto <span className="text-[#008c4c]">Real</span>
                        </h2>
                        <p className="text-[#f7eacb]/60 text-lg max-w-2xl mx-auto">
                            Construindo o maior ecossistema de desenvolvedores e criadores Solana na América Latina.
                        </p>
                    </div>

                    {/* Grid de Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col items-center text-center group">
                                {/* Ícone com círculo brilhante */}
                                <div className={`w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                                    <stat.icon size={32} />
                                </div>
                                
                                {/* Número Gigante */}
                                <h3 className={`text-4xl md:text-6xl font-bold font-display mb-2 ${stat.color} drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                                    {stat.value}
                                </h3>
                                
                                {/* Rótulo */}
                                <p className="text-[#f7eacb]/70 uppercase tracking-widest text-xs md:text-sm font-bold">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Showcase;
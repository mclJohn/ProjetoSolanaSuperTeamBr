import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const containerRef = useRef(null);
    const videoRef = useRef(null); 
    const [isMuted, setIsMuted] = useState(true);

    // Função manual de toggle (clique do usuário)
    const toggleAudio = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    // Função auxiliar para forçar o Mute (usada pelo ScrollTrigger)
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
                    
                    // --- NOVAS REGRAS DE ÁUDIO ---
                    // 1. Se sair da seção rolando para baixo -> Muta
                    onLeave: () => forceMute(),
                    // 2. Se sair da seção rolando para cima (voltar pro topo) -> Muta
                    onLeaveBack: () => forceMute(),
                }
            });

            timeline
                // ETAPA 1: Zoom Out
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
                // ETAPA 2: Desaparecer
                .to('.video-mask-container', {
                    opacity: 0,
                    scale: 0.8,
                    duration: 1,
                    ease: 'power1.out',
                    // Segurança Extra: Quando a animação de sumir termina, muta também
                    onComplete: () => forceMute() 
                })
                // ETAPA 3: Texto
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
                    src="/videos/superteambrasil.mp4" 
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
                    {isMuted ? (
                        <VolumeX size={24} />
                    ) : (
                        <Volume2 size={24} />
                    )}
                </button>
            </div>

            {/* CONTEÚDO DE TEXTO */}
            <div className="content relative z-20 h-full flex flex-col justify-end pb-20 opacity-0 translate-y-20 pointer-events-none">
                <div className="wrapper container mx-auto px-5 2xl:px-0 flex flex-col lg:flex-row justify-center gap-20 pointer-events-auto">
                    <div className="lg:max-w-md">
                        <h2>Rocket Chip</h2>
                        <div className="space-y-5 mt-7 pe-10">
                            <p>Introducing <span className="text-white">M4, the next generation</span>.</p>
                            <p>It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Showcase;
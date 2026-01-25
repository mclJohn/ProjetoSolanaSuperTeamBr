import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

// --- DADOS DO FAQ ---
const faqs = [
  {
    id: 1,
    question: "O que é a Superteam Brasil?",
    answer: "Somos a comunidade oficial de construtores, criadores e fundadores que impulsionam o ecossistema Solana no Brasil. Funcionamos como um hub de talentos e oportunidades, conectando brasileiros diretamente à Solana Foundation e aos principais protocolos globais."
  },
  {
    id: 2,
    question: "Como me torno um membro?",
    answer: "O primeiro passo é entrar no nosso Discord e se apresentar. A partir daí, você pode começar a contribuir participando de chamadas comunitárias, completando 'Bounties' (tarefas remuneradas) ou participando de nossos eventos. Membros ativos ganham o cargo de 'Contributor' e, eventualmente, 'Member' oficial, desbloqueando benefícios exclusivos."
  },
  {
    id: 3,
    question: "Preciso ser desenvolvedor para participar?",
    answer: "Definitivamente não! Embora tenhamos muitos devs, o ecossistema precisa desesperadamente de Designers, Criadores de Conteúdo, Gestores de Comunidade, BizDevs e Advogados. Se você tem uma habilidade e quer trabalhar na Web3, há um lugar para você aqui."
  },
  {
    id: 4,
    question: "Quais oportunidades estão disponíveis?",
    answer: "Oferecemos quatro pilares principais de oportunidades: 1) Earn: Ganhe cripto (USDC/SOL) completando tarefas rápidas (Bounties). 2) Build: Receba Grants (financiamento) para sua ideia. 3) Work: Encontre vagas de emprego full-time em protocolos parceiros. 4) Learn: Workshops gratuitos e bootcamps."
  },
  {
    id: 5,
    question: "Como projetos podem fazer parceria conosco?",
    answer: "Se você tem um projeto Web3 e quer acessar os melhores talentos do Brasil ou expandir sua presença na região, entre em contato conosco via Twitter (@SuperteamBR) ou abra um ticket de parceria no nosso Discord. Ajudamos com Go-to-Market, contratação e eventos."
  }
];

const Question = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#1b231d] relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATIVO --- */}
      {/* Luz central suave */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#008c4c]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd23f]/10 text-[#ffd23f] text-xs font-bold uppercase tracking-wider mb-4 border border-[#ffd23f]/20">
            <HelpCircle size={14} />
            Tire suas dúvidas
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-[#f7eacb] mb-4">
            Perguntas <span className="text-[#008c4c]">Frequentes</span>
          </h2>
          <p className="text-[#f7eacb]/70 text-lg">
            Tudo o que você precisa saber para iniciar sua jornada na Solana conosco.
          </p>
        </div>

        {/* --- ACORDEÃO --- */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                rounded-2xl border transition-all duration-300 overflow-hidden
                ${activeIndex === index 
                    ? "bg-[#2f6b3f]/20 border-[#ffd23f]/50 shadow-[0_0_30px_rgba(0,140,76,0.1)]" 
                    : "bg-[#2f6b3f]/5 border-[#f7eacb]/10 hover:border-[#f7eacb]/30"
                }
              `}
            >
              {/* Botão da Pergunta */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold font-display transition-colors ${activeIndex === index ? "text-[#ffd23f]" : "text-[#f7eacb]"}`}>
                  {faq.question}
                </span>
                
                <div className={`
                    p-2 rounded-full transition-all duration-300
                    ${activeIndex === index ? "bg-[#ffd23f] text-[#1b231d] rotate-180" : "bg-[#f7eacb]/10 text-[#f7eacb]"}
                `}>
                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              {/* Resposta Expansível */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-[#f7eacb]/80 leading-relaxed border-t border-[#f7eacb]/5 mt-2">
                        {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Dúvida Extra */}
        <div className="mt-12 text-center">
            <p className="text-[#f7eacb]/60">
                Ainda tem dúvidas? Fale conosco diretamente no <a href="#" className="text-[#ffd23f] font-bold hover:underline">Discord</a>.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Question;
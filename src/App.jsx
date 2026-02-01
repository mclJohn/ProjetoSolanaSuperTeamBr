import React, { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Componentes
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import Showcase from "./components/Showcase.jsx";
import Performance from "./components/Performance.jsx";
import Features from "./components/Features.jsx";
import Highlights from "./components/Highlights.jsx";
import Question from "./components/Question.jsx";
import Footer from "./components/Footer.jsx"; // Footer importado
import MembersPage from "./components/MembersPage.jsx";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            
            <main>
                {/* --- 1. NAVBAR (Fixa em todas as páginas) --- */}
                <NavBar />

                {/* --- 2. CONTEÚDO (Muda conforme a rota) --- */}
                <Routes>
                    
                    {/* ROTA DA HOME */}
                    <Route path="/" element={
                        <>
                            <Hero />
                            <ProductViewer />
                            <Showcase />
                            <Performance />
                            <Features />
                            <Highlights />
                            <Question /> 
                            {/* Footer foi removido daqui */}
                        </>
                    } />

                    {/* ROTA DE MEMBROS */}
                    <Route path="/membros" element={<MembersPage />} />

                </Routes>

                {/* --- 3. FOOTER (Fixo em todas as páginas) --- */}
                {/* Agora ele está fora das Routes, então aparece na Home E em Membros */}
                <Footer />
            </main>
        </BrowserRouter>
    );
}

export default App;
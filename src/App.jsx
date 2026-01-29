import React, { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Componentes
import NavBar from "./components/NavBar.jsx"; // NavBar importada aqui
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import Showcase from "./components/Showcase.jsx";
import Performance from "./components/Performance.jsx";
import Features from "./components/Features.jsx";
import Highlights from "./components/Highlights.jsx";
import Question from "./components/Question.jsx";
import Footer from "./components/Footer.jsx";
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
                {/* --- 1. NAVBAR FIXA EM TODAS AS PÁGINAS --- */}
                {/* Colocando ela aqui fora das Routes, ela aparece sempre */}
                <NavBar />

                {/* --- 2. CONTEÚDO QUE MUDA --- */}
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
                            <Footer />
                        </>
                    } />

                    {/* ROTA DE MEMBROS */}
                    {/* Não precisa colocar NavBar aqui dentro, pois já está lá fora */}
                    <Route path="/membros" element={<MembersPage />} />

                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
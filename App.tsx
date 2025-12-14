import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Letters from './pages/Letters';
import OfficialLetter from './pages/OfficialLetter';
import About from './pages/About';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/lettres" element={<Letters />} />
        <Route path="/lettre-officielle" element={<OfficialLetter />} />
        <Route path="/a-propos" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-blue-50 font-sans text-gray-800">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
          <AnimatedRoutes />
        </main>
        <footer className="bg-blue-200 text-center py-4 text-blue-800 text-sm mt-8">
          <p>© {new Date().getFullYear()} Album de Lettres - Group scolaire Wislan</p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Book, PenTool } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-8 py-8"
    >
      <div className="w-full max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 font-handwriting">
          Album de Lettres
        </h1>
        
        <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm text-lg text-green-900 max-w-2xl mx-auto">
          <p>
            Bienvenue sur notre site ! Découvrez une collection de lettres rédigées par des élèves. 
            C'est un voyage à travers les mots pour apprendre à communiquer avec style et émotion.
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-3xl aspect-video bg-white rounded-xl shadow-xl overflow-hidden flex items-center justify-center border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
         <img 
            src="https://picsum.photos/seed/letters123/800/450" 
            alt="Carnet et lettres" 
            className="object-cover w-full h-full opacity-90"
         />
         <div className="absolute inset-0 bg-blue-900 bg-opacity-20 flex items-center justify-center">
            <span className="bg-white px-6 py-3 rounded-full text-blue-800 font-bold shadow-lg flex items-center gap-2">
                <Mail className="h-5 w-5" /> Explorer nos écrits
            </span>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-8">
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Book className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-700">Lecture</h3>
            <p className="text-sm text-gray-500 mt-2">Découvrir différents styles d'écriture.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <PenTool className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="font-bold text-gray-700">Écriture</h3>
            <p className="text-sm text-gray-500 mt-2">Apprendre à rédiger correctement.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <div className="bg-green-100 p-3 rounded-full mb-4">
                <Mail className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-700">Communication</h3>
            <p className="text-sm text-gray-500 mt-2">Transmettre des messages clairs.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
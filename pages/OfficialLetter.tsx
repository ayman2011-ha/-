import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

const OfficialLetter: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center"
    >
      <div className="w-full max-w-3xl bg-white border-2 border-blue-200 shadow-2xl rounded-sm p-8 md:p-12 relative">
        
        {/* Header / Logo Simulation */}
        <div className="flex justify-between items-start mb-8 border-b-2 border-blue-100 pb-6">
            <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <GraduationCap className="h-8 w-8" />
                </div>
                <div>
                    <h2 className="font-bold text-xl text-blue-900">Group Scolaire Wislan</h2>
                    <p className="text-sm text-gray-500">Excellence & Réussite</p>
                </div>
            </div>
            <div className="text-right text-sm text-gray-500">
                <p>Le {new Date().toLocaleDateString('fr-FR')}</p>
                <p>Meknès, Maroc</p>
            </div>
        </div>

        {/* Content */}
        <div className="font-serif text-gray-800 space-y-6 leading-relaxed">
            <h1 className="text-2xl font-bold text-center text-blue-800 mb-8 uppercase tracking-wide">
                Message d'encouragement
            </h1>

            <p className="font-bold">Objet : Encouragements pour la poursuite de vos études.</p>

            <p>Chers élèves de 3ème,</p>

            <p>
                Vous arrivez aujourd'hui à une étape charnière de votre parcours scolaire. La classe de 3ème marque la fin du collège, mais c'est surtout le début d'une nouvelle aventure passionnante vers le lycée et vos futurs métiers.
            </p>

            <p>
                Nous savons que cette année est exigeante, avec la préparation de l'examen du Brevet. Cependant, rappelez-vous que chaque effort fourni aujourd'hui est une pierre posée pour construire votre avenir. Ne baissez jamais les bras devant les difficultés.
            </p>

            <p>
                Soyez curieux, soyez ambitieux et croyez en vos capacités. L'éducation est la clé qui ouvre toutes les portes. Continuez à travailler avec sérieux et passion.
            </p>

            <p>
                Nous vous souhaitons à tous beaucoup de réussite et de courage pour cette fin d'année.
            </p>

            <div className="mt-12 flex flex-col items-end">
                <p className="mb-4">Bien cordialement,</p>
                <div className="text-center">
                    <p className="font-bold text-blue-900">L'Équipe Pédagogique</p>
                    <div className="text-gray-400 italic text-sm mt-2">(Signature)</div>
                </div>
            </div>
        </div>

        {/* Decorative footer line */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800"></div>
      </div>
    </motion.div>
  );
};

export default OfficialLetter;
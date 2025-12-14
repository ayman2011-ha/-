import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, AlertTriangle } from 'lucide-react';

const Introduction: React.FC = () => {
  const sections = [
    {
      title: "Les Objectifs du Projet",
      icon: <Target className="h-8 w-8 text-orange-500" />,
      content: "Notre but principal est d'apprendre à écrire différents types de lettres (formelles, amicales, administratives) en respectant les codes de chacune.",
    },
    {
      title: "L'Importance de l'Écrit",
      icon: <Heart className="h-8 w-8 text-red-500" />,
      content: "Savoir écrire est essentiel pour développer son expression personnelle, structurer sa pensée et communiquer efficacement avec les autres dans la vie de tous les jours.",
    },
    {
      title: "Les Difficultés Rencontrées",
      icon: <AlertTriangle className="h-8 w-8 text-yellow-600" />,
      content: "Nous avons dû faire des efforts pour trouver le vocabulaire précis, organiser logiquement nos paragraphes et adapter notre niveau de langue selon le destinataire.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 font-handwriting">Introduction au Projet</h2>
        <p className="text-gray-600">Pourquoi avons-nous réalisé cet album ?</p>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                {section.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Introduction;
import React from 'react';
import { motion } from 'framer-motion';
import { User, School, BookOpen, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex justify-center items-center py-10"
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-green-400 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-8 uppercase tracking-widest border-b pb-4">
            Fiche du Projet
        </h2>

        <div className="space-y-6">
            <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg">
                <div className="bg-white p-2 rounded-full shadow-sm text-green-600">
                    <School className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-sm text-gray-500 uppercase font-semibold">Établissement</p>
                    <p className="text-lg font-bold text-gray-800">Group Scolaire Wislan</p>
                </div>
            </div>

            <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg">
                <div className="bg-white p-2 rounded-full shadow-sm text-green-600">
                    <User className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-sm text-gray-500 uppercase font-semibold">Professeur Encadrant</p>
                    <p className="text-lg font-bold text-gray-800">M. Younes Qmish</p>
                </div>
            </div>

            <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg">
                <div className="bg-white p-2 rounded-full shadow-sm text-green-600">
                    <BookOpen className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-sm text-gray-500 uppercase font-semibold">Réalisé par l'élève</p>
                    <p className="text-lg font-bold text-gray-800">Aymen El Kik</p>
                </div>
            </div>

            <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg">
                <div className="bg-white p-2 rounded-full shadow-sm text-green-600">
                    <Calendar className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-sm text-gray-500 uppercase font-semibold">Année Scolaire</p>
                    <p className="text-lg font-bold text-gray-800">2023 / 2024</p>
                </div>
            </div>
        </div>

        <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm italic">Projet éducatif - Collège</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
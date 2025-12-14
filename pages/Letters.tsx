import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, User, Star, Send } from 'lucide-react';

interface LetterData {
  title: string;
  type: string;
  content: string;
  icon?: React.ReactNode;
}

const letters: LetterData[] = [
  {
    title: "Lettre à un ami",
    type: "Amicale",
    content: `Salut Thomas,

J'espère que tu vas bien et que tes vacances se passent bien. De mon côté, je profite du soleil pour faire beaucoup de sport. J'ai découvert un nouveau parc génial près de chez moi !

J'ai hâte qu'on se retrouve à la rentrée pour que je te raconte tout. N'oublie pas de m'écrire quand tu auras un moment.

À bientôt,
Ton ami, Aymen.`
  },
  {
    title: "Lettre à la famille",
    type: "Familiale",
    content: `Chère Tante Amina,

Comment vas-tu ? Maman m'a dit que tu étais un peu fatiguée en ce moment. Je t'envoie cette lettre pour te donner un peu de courage et te dire que je pense fort à toi.

L'école se passe bien, j'ai eu de bonnes notes en français cette semaine ! Je viendrai te rendre visite le week-end prochain avec des gâteaux.

Gros bisous,
Ton neveu qui t'aime.`
  },
  {
    title: "Remerciement Professeur",
    type: "Formelle",
    content: `Monsieur le Professeur,

Je tenais à vous écrire ce petit mot pour vous remercier pour cette année scolaire. Grâce à vos cours, j'ai beaucoup progressé et j'apprécie de plus en plus la lecture.

Merci pour votre patience et vos encouragements qui m'ont beaucoup aidé à prendre confiance en moi.

Cordialement,
Votre élève.`
  },
  {
    title: "Lettre d'invitation",
    type: "Invitation",
    content: `Cher Karim,

Je t'invite à venir fêter mon anniversaire le samedi 15 juin à 14h00 chez moi. Il y aura un grand gâteau au chocolat et nous ferons des jeux vidéo !

S'il te plaît, confirme-moi ta présence avant mercredi. J'espère vraiment que tu pourras venir.

À samedi !
Aymen`
  },
  {
    title: "Lettre de vœux",
    type: "Fêtes",
    content: `Chers grands-parents,

Je vous souhaite une merveilleuse année ! Que cette nouvelle année vous apporte beaucoup de joie, une excellente santé et de beaux moments en famille.

J'ai hâte de venir passer les vacances d'hiver chez vous.

Je vous embrasse très fort.
Bonne année !`
  },
  {
    title: "Demande d'autorisation",
    type: "Administrative",
    content: `Madame la Directrice,

Je suis élève en classe de 4ème et je sollicite votre autorisation pour organiser une collecte de livres usagés dans le hall de l'école la semaine prochaine.

Ce projet a pour but de créer une petite bibliothèque pour la classe. Je m'engage à ce que tout se déroule dans le calme et l'ordre.

Dans l'attente de votre réponse, je vous prie d'agréer, Madame, mes salutations respectueuses.`
  }
];

const Letters: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 font-handwriting">Nos Lettres</h2>
        <p className="text-gray-500 mt-2">Exemples de correspondances variées</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {letters.map((letter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-green-50 border border-green-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="bg-green-100 p-3 flex items-center justify-between border-b border-green-200">
              <h3 className="font-bold text-green-800">{letter.title}</h3>
              <Mail className="h-5 w-5 text-green-600" />
            </div>
            <div className="p-5 flex-grow font-handwriting text-lg leading-relaxed text-gray-700 bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')]">
              <div className="whitespace-pre-line">
                {letter.content}
              </div>
            </div>
            <div className="bg-white p-2 text-xs text-center text-gray-400 uppercase tracking-widest border-t border-gray-100">
              Type: {letter.type}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Letters;
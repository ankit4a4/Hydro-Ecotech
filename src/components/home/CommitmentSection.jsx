import React from 'react';
import { CheckCircle, ChevronRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const CommitmentSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#1a2a38] to-[#253745] text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight">
            L'engagement <span className="text-[#4da8f5]">Hydro Ecotech</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Une technologie innovante au service de votre moteur
          </p>
          <div className="w-24 h-1 bg-[#4da8f5] mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={fadeIn} className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              Avec Hydro Ecotech nous vous proposons une solution aboutie de dépollution moteur efficace, non agressive et écologique mais aussi une réduction de la consommation de carburant.
            </p>
            <p className="text-lg leading-relaxed">
              Lors de la décarbonation du moteur par injection d'hydrogène, toutes les parties du moteur, en contact avec les gaz d'échappement, sont nettoyées en profondeur.
            </p>
            <p className="text-lg leading-relaxed">
              Comment est-ce aussi efficace ? Par un procédé totalement naturel qu'est la combustion de l'hydrogène qui dissout la calamine présente dans votre moteur.
            </p>
            
            <div className="flex gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#4da8f5] hover:bg-[#3a8fd4] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
              >
                Voir plus <ChevronRight size={18} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#4da8f5] text-[#4da8f5] hover:bg-[#4da8f5]/10 px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
              >
                <Phone size={18} /> Contactez-nous
              </motion.button>
            </div>
          </motion.div>

          {/* Engine Parts */}
          <motion.div variants={fadeIn} className="bg-[#1e2f3d] rounded-xl p-6 shadow-xl border border-[#2a3b49]">
            <h4 className="font-semibold text-xl mb-4">Moteur décarboné</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {['FAP', 'Soupapes', 'Vannes', 'EGR', 'Injecteurs', 'Turbo'].map((part, index) => (
                <motion.div 
                  key={part}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 p-3 bg-[#2a3b49] rounded-lg hover:bg-[#3a4b59] transition-colors"
                >
                  <CheckCircle size={16} className="text-[#4da8f5] flex-shrink-0" />
                  <span>{part}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {/* Performance */}
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -5 }}
            className="bg-[#1e2f3d] p-6 rounded-xl shadow-lg border border-[#2a3b49] hover:border-[#4da8f5]/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#4da8f5]/10 p-2 rounded-lg">
                <svg className="w-6 h-6 text-[#4da8f5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h5 className="text-[#4da8f5] font-semibold text-lg">Performance retrouvée : +65%</h5>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#4da8f5] mt-0.5 flex-shrink-0" />
                <span>Retrouvez les performances d'origine de votre moteur</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Pollution */}
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -5 }}
            className="bg-[#1e2f3d] p-6 rounded-xl shadow-lg border border-[#2a3b49] hover:border-[#4da8f5]/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#4da8f5]/10 p-2 rounded-lg">
                <svg className="w-6 h-6 text-[#4da8f5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h5 className="text-[#4da8f5] font-semibold text-lg">Pollution abaissée : -55%</h5>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#4da8f5] mt-0.5 flex-shrink-0" />
                <span>Préserve l'environnement</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#4da8f5] mt-0.5 flex-shrink-0" />
                <span>Elimine les fumées noires</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#4da8f5] mt-0.5 flex-shrink-0" />
                <span>Facilite le contrôle technique</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Budget */}
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -5 }}
            className="bg-[#1e2f3d] p-6 rounded-xl shadow-lg border border-[#2a3b49] hover:border-[#4da8f5]/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#4da8f5]/10 p-2 rounded-lg">
                <svg className="w-6 h-6 text-[#4da8f5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="text-[#4da8f5] font-semibold text-lg">Budget allégé : -25%</h5>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#4da8f5] mt-0.5 flex-shrink-0" />
                <span>Réduit la consommation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#4da8f5] mt-0.5 flex-shrink-0" />
                <span>Réduit les frais d'entretien</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#4da8f5] mt-0.5 flex-shrink-0" />
                <span>Évite le remplacement des pièces</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommitmentSection;
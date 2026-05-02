import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';

const SurpriseFinal = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleReveal = () => {
    setShowSurprise(true);
    setShowConfetti(true);
    
    // Stop confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={300}
          recycle={false}
          gravity={0.2}
          colors={['#FFB6C1', '#E8B4B8', '#D4A5D9', '#FFE5E5', '#E6D9EC']}
        />
      )}

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pastel-purple/30 via-soft-pink/40 to-rose-gold/30" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {!showSurprise ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pastel-purple to-soft-pink mb-4">
              Ok Ok One More Lil Surprise...
            </h2>
            <p className="text-xl text-gray-700 font-body max-w-2xl mx-auto mb-8">
              Besto, are you ready? Big feelings incoming (the cute kind).
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReveal}
              className="glass rounded-full px-12 py-4 text-xl font-body font-semibold text-gray-800 glow hover:shadow-2xl transition-all duration-300"
            >
              Reveal Surprise ✨
            </motion.button>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="space-y-8"
            >
              {/* Main Message */}
              <div className="glass rounded-3xl p-12 md:p-16 shadow-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-7xl mb-6"
                  >
                    💖
                  </motion.div>

                  <h3 className="font-display text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-soft-pink to-pastel-purple mb-6">
                    I Love You (Best-Friend-Plus-Lil-Heart Edition)
                  </h3>

                  <div className="font-body text-gray-700 text-lg md:text-xl leading-relaxed space-y-4">
                    <p>
                      You’re my favorite person to text, to tease, to trust, and to dream beside. Hanging out with you is my happiest place—like a cozy blanket for my brain.
                    </p>
                    <p>
                      On your birthday I hope you feel super celebrated: cake, giggles, good luck, and all the squishy love you give everyone else bouncing right back to you.
                    </p>
                    <p className="font-script text-3xl text-soft-pink mt-8">
                      Happy Birthday, my bestest besto
                    </p>
                    <p className="text-2xl mt-6">
                      May your wishes come true today and always—yippee energy only. ✨
                    </p>
                  </div>

                  {/* Final Heart */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                    className="mt-10"
                  >
                    <div className="inline-block text-6xl animate-pulse">
                      💕
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Closing Message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="glass rounded-2xl p-8 max-w-2xl mx-auto"
              >
                <p className="font-script text-2xl text-gray-800">
                  "Still wanna pick you first—bestie today, bestie tomorrow."
                </p>
                <p className="font-body text-soft-pink mt-4 text-lg">
                  Forever team us, with a lil extra love on top 💌
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default SurpriseFinal;

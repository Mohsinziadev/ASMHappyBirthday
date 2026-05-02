import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaTimes } from 'react-icons/fa';

const HiddenLoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const letterVariants = {
    closed: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    open: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-lavender/30 via-blush-pink/40 to-peach/30" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-gold to-pastel-purple mb-4">
            A Letter for My Besto
          </h2>
          <p className="text-xl text-gray-700 font-body">
            Pssst… tap to open a silly lil note from your bestie (ok fine, from my heart too)
          </p>
        </motion.div>

        {/* Envelope Button */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="inline-block cursor-pointer"
        >
          <div className="relative">
            {/* Envelope */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="glass rounded-3xl p-12 shadow-2xl glow"
            >
              <FaHeart className="text-6xl text-soft-pink mx-auto mb-4" />
              <p className="font-script text-3xl text-gray-800 mb-2">
                Open meee
              </p>
              <p className="text-gray-600 font-body">
                💌 For my bestest besto only
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Letter Modal */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                variants={overlayVariants}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              >
                {/* Letter */}
                <motion.div
                  variants={letterVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-2xl w-full"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-soft-pink transition-colors z-10"
                  >
                    <FaTimes />
                  </button>

                  {/* Letter Content */}
                  <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl">
                    {/* Letter Paper Effect */}
                    <div className="bg-cream/80 rounded-2xl p-8 md:p-12 border-2 border-soft-pink/30">
                      {/* Decorative Top */}
                      <div className="text-center mb-6">
                        <FaHeart className="text-soft-pink text-3xl mx-auto mb-2" />
                        <div className="h-px bg-gradient-to-r from-transparent via-soft-pink to-transparent" />
                      </div>

                      {/* Letter Text */}
                      <div className="space-y-6 text-left overflow-y-auto pr-2" style={{ height: '20rem', maxHeight: '20rem' }}>
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-script text-2xl text-gray-800">
                            Hey my favorite human / besto,
                          </p>
                          <p className="font-body text-gray-500 text-xs">
                            17 July
                          </p>
                        </div>

                        <div className="font-body text-gray-700 leading-relaxed space-y-4 text-lg">
                          <p>
                            Ok so I’m sitting here being a total softie and my brain is just going “yay besto day” on repeat. You’re my best friend first—like the real deal, ride-or-die, tell-you-everything, laugh-till-we-snort kind—and I’m so lucky I get you.
                          </p>
                          <p>
                            On your birthday I wanna say it super clearly: you’re my person. My bestie, my partner-in-crime, my lil comfort zone… and yeah, you’re also the one who makes my heart do the dumb happy dance. Best of both worlds, no cap.
                          </p>
                          <p>
                            Your smile is my favorite notification, your laugh is my favorite song, and hanging out with you turns boring Tuesdays into core memories. You make little moments feel sparkly and big.
                          </p>
                          <p>
                            I love how big your heart is, how brave you are when stuff gets hard, and how you dream out loud like the world better keep up. You’re beautiful inside and out, and I fall for you more in the tiniest everyday ways.
                          </p>
                          <p>
                            Today I hope you get cake, surprises, good vibes, and every silly wish you make. May this year be full of wins, cozy days, and big giggles—you deserve the whole cutest package.
                          </p>
                          <p>
                            If I can’t be right there in person, pretend I’m still beside you cheering like a lil goblin with a party hat on. My heart’s with you, celebrating my besto, loving you tons, and wishing you the happiest birthday ever.
                          </p>
                        </div>

                        <div className="mt-8 text-right">
                          <p className="font-script text-2xl text-soft-pink">
                            Always your bestie,
                          </p>
                          <p className="font-body text-gray-600 mt-2">
                            With a big squishy lil bit of love too 💖
                          </p>
                          <p className="font-body text-gray-500 text-sm mt-4">
                            — Mohsin Zia
                          </p>
                        </div>
                      </div>

                      {/* Decorative Bottom */}
                      <div className="mt-6 text-center">
                        <div className="h-px bg-gradient-to-r from-transparent via-soft-pink to-transparent mb-2" />
                        <FaHeart className="text-soft-pink text-2xl mx-auto" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HiddenLoveLetter;

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
            A Letter for You
          </h2>
          <p className="text-xl text-gray-700 font-body">
            Click to open a special message from my heart
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
                Open Me
              </p>
              <p className="text-gray-600 font-body">
                💌 A message from my heart
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
                        <p className="font-script text-2xl text-gray-800">
                          My Dearest Love,
                        </p>

                        <div className="font-body text-gray-700 leading-relaxed space-y-4 text-lg">
                          <p>
                            As I sit here writing this, my heart is filled with so much love for you that words can barely capture it.
                          </p>
                          <p>
                            On this special day, I want you to know how incredibly grateful I am to have you in my life. You are not just my girlfriend—you are my best friend, my confidant, my inspiration, and my greatest blessing.
                          </p>
                          <p>
                            Every day with you feels like a gift. Your smile lights up my world, your laughter is my favorite sound, and your presence makes everything better. You have this amazing ability to make ordinary moments feel magical.
                          </p>
                          <p>
                            I love the way you care for others, the way you pursue your dreams with such passion, and the way you make me want to be a better person. You are beautiful inside and out, and I fall in love with you more every single day.
                          </p>
                          <p>
                            Today, on your birthday, I wish for you all the happiness, love, and joy that you bring into my life. May all your dreams come true, and may this year be filled with beautiful moments and endless possibilities.
                          </p>
                          <p>
                            Even though I may not be there physically, please know that my heart is with you, celebrating you, loving you, and wishing you the most wonderful birthday.
                          </p>
                        </div>

                        <div className="mt-8 text-right">
                          <p className="font-script text-2xl text-soft-pink">
                            Forever yours,
                          </p>
                          <p className="font-body text-gray-600 mt-2">
                            With all my love 💖
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

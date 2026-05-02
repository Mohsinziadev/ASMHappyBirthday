import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLock, FaUnlock, FaTimes } from 'react-icons/fa';
import { useImageUnlock } from '../context/ImageUnlockContext';

const CodeUnlockModal = () => {
  const { showCodeModal, setShowCodeModal, unlockImages } = useImageUnlock();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate a small delay for better UX
    setTimeout(() => {
      const success = unlockImages(code);
      if (!success) {
        setError('Nope nope—wrong code, try again bestie');
        setCode('');
      }
      setIsLoading(false);
    }, 300);
  };

  const handleClose = () => {
    // Don't allow closing without entering code
    // Or you can allow it if you want
  };

  return (
    <AnimatePresence>
      {showCodeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl"
          >
            {/* Lock Icon */}
            <div className="text-center mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                <FaLock className="text-6xl text-soft-pink mx-auto mb-4" />
              </motion.div>
              <h2 className="font-display text-3xl font-bold text-gray-800 mb-2">
                Secret Besto Photo Vault
              </h2>
              <p className="text-gray-600 font-body">
                Shhh… type our lil code to unlock the pics (for your eyes only)
              </p>
            </div>

            {/* Code Input Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter code..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-soft-pink/30 focus:border-soft-pink focus:outline-none font-body text-center text-lg tracking-widest"
                  autoFocus
                  disabled={isLoading}
                />
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-2 text-center font-body"
                  >
                    {error}
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading || !code.trim()}
                className="w-full bg-gradient-to-r from-soft-pink to-pastel-purple text-white py-3 rounded-xl font-body font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      🔄
                    </motion.div>
                    Verifying...
                  </>
                ) : (
                  <>
                    <FaUnlock className="text-lg" />
                    Open Sesame (Unlock Pics)
                  </>
                )}
              </motion.button>
            </form>

            {/* Hint (optional - you can remove this) */}
            <p className="text-center text-gray-500 text-xs mt-4 font-body">
              💡 Hint: something only besties would know hehe
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CodeUnlockModal;

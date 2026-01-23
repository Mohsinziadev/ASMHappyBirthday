import React from 'react';
import { motion } from 'framer-motion';

const RomanticFooter = () => {
  return (
    <footer className="relative py-12 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/50 to-lavender/30" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Heart Divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-soft-pink" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl"
            >
              💖
            </motion.div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-soft-pink" />
          </div>

          {/* Message */}
          <p className="font-script text-3xl md:text-4xl text-gray-800 mb-4">
            Made with love, just for you
          </p>
          <p className="font-body text-gray-600 text-lg">
            Every detail crafted with care, because you deserve nothing but the best.
          </p>
          <p className="font-body text-gray-500 text-sm mt-6">
            Made with love by Mohsin Zia
          </p>

          {/* Decorative Hearts */}
          <div className="flex justify-center gap-4 mt-8">
            {['💕', '💖', '💗', '💓', '💝'].map((heart, index) => (
              <motion.span
                key={index}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="text-2xl"
              >
                {heart}
              </motion.span>
            ))}
          </div>

          {/* Final Message */}
          <p className="font-body text-soft-pink text-sm mt-8">
            Happy Birthday, My Beautiful Love ✨
          </p>
          <p className="font-body text-gray-400 text-xs mt-2">
            Forever celebrating 17 July 💖
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default RomanticFooter;

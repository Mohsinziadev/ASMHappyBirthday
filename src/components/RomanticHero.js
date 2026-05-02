import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import amreenPhoto1 from '../images/amreenImage1.jpeg';
import ProtectedImage from './ProtectedImage';

const RomanticHero = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Create sparkles
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 2}s`,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            animationDelay: sparkle.delay,
            animationDuration: sparkle.duration,
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blush-pink/30 via-lavender/20 to-peach/30" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Date Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            className="inline-block glass rounded-full px-6 py-2 mb-4"
          >
            <p className="text-soft-pink text-sm font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
              17 July • Besto Birthday Mode: ON
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="font-display text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-soft-pink via-rose-gold to-pastel-purple leading-tight"
          >
            Happy Birthday,
            <br />
            <span className="font-script text-7xl md:text-9xl">My Besto</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-xl md:text-2xl text-gray-700 font-body font-light max-w-2xl mx-auto leading-relaxed"
          >
            Today the whole world better be nice to my bestie—you’re the coolest, kindest, prettiest lil human I know.
            <br />
            <span className="text-soft-pink font-medium">Best friend first… and yeah, you’ve got my heart doing the happy wiggle too.</span>
          </motion.p>

          {/* Photo with Elegant Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center mt-12"
          >
            <div className="relative">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full glow animate-glow" />
              
              {/* Photo */}
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <ProtectedImage
                  src={amreenPhoto1}
                  alt="My besto looking adorable"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-soft-pink/20 to-transparent pointer-events-none" />
              </div>

              {/* Decorative Hearts */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 text-4xl"
              >
                💖
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-4 -left-4 text-4xl"
              >
                💕
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-soft-pink text-2xl"
            >
              ✨
            </motion.div>
            <p className="text-gray-600 text-sm mt-2 font-body">Scroll to discover more</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RomanticHero;

import React from 'react';
import { motion } from 'framer-motion';

const WhyYoureSpecial = () => {
  const reasons = [
    {
      icon: '💖',
      title: 'Your Heart',
      text: 'The way you love, with such depth and kindness, makes the world a brighter place.',
    },
    {
      icon: '✨',
      title: 'Your Light',
      text: 'You illuminate every room you enter, bringing joy and warmth to everyone around you.',
    },
    {
      icon: '🌙',
      title: 'Your Dreams',
      text: 'Your aspirations inspire me, and watching you chase them fills me with pride.',
    },
    {
      icon: '🌸',
      title: 'Your Beauty',
      text: 'Not just on the outside, but the beautiful soul that shines through in everything you do.',
    },
    {
      icon: '💫',
      title: 'Your Laugh',
      text: 'The sound of your laughter is my favorite melody, a symphony of pure happiness.',
    },
    {
      icon: '🌺',
      title: 'Your Strength',
      text: 'Your resilience and grace in facing life\'s challenges inspire me every single day.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-lavender/30 via-cream/40 to-peach/30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-soft-pink to-pastel-purple mb-4">
            Why You're Special
          </h2>
          <p className="text-xl text-gray-700 font-body max-w-2xl mx-auto">
            In a world full of ordinary, you are extraordinary in every way.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-3xl p-8 text-center group cursor-pointer"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-6xl mb-4"
              >
                {reason.icon}
              </motion.div>
              <h3 className="font-display text-2xl font-semibold text-gray-800 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 font-body leading-relaxed">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Poetic Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-3xl p-10 max-w-3xl mx-auto">
            <p className="font-script text-3xl md:text-4xl text-gray-800 leading-relaxed mb-4">
              "In your eyes, I found my home.
              <br />
              In your heart, I found my peace.
              <br />
              In your smile, I found my joy."
            </p>
            <p className="text-soft-pink font-body text-lg font-medium">
              — Forever Yours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyYoureSpecial;

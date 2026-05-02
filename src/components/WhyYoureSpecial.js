import React from 'react';
import { motion } from 'framer-motion';

const WhyYoureSpecial = () => {
  const reasons = [
    {
      icon: '💖',
      title: 'Your Big Soft Heart',
      text: 'You care like it’s your superpower—kind, loyal, and so warm that everyone near you feels safer. (Also yes I’m biased because you’re my besto.)',
    },
    {
      icon: '✨',
      title: 'Your Main-Character Glow',
      text: 'You walk in and the whole room gets brighter—like someone turned the happy dial up. Bestie energy: 1000%.',
    },
    {
      icon: '🌙',
      title: 'Your Dreamy Brain',
      text: 'The way you want things for yourself makes me wanna clap like a seal. I’m so proud of you, for real for real.',
    },
    {
      icon: '🌸',
      title: 'You’re Pretty + Precious',
      text: 'Outside gorgeous, inside even cuter—that combo should be illegal. My eyes are lucky they get to look at my bestie.',
    },
    {
      icon: '💫',
      title: 'Your Giggle Factory',
      text: 'Your laugh is my favorite sound in the whole wide world. Instant serotonin. Certified silliest goose award goes to you.',
    },
    {
      icon: '🌺',
      title: 'Your Brave Lil Self',
      text: 'Life throws stuff and you still show up soft but strong. That’s my bestest friend—tiny but mighty.',
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
            Why My Besto Is The Bestest
          </h2>
          <p className="text-xl text-gray-700 font-body max-w-2xl mx-auto">
            Everyone’s cool, but you’re my favorite flavor of human—best friend first, lil crushy feelings included, obvi.
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
              "You’re my home team, my cozy place,
              <br />
              my partner in snacks and stupid jokes,
              <br />
              and the lil spark that makes my heart go zoom."
            </p>
            <p className="text-soft-pink font-body text-lg font-medium">
              — Your bestie, always (heart included)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyYoureSpecial;

import React from 'react';
import { motion } from 'framer-motion';
import together1 from '../images/imagetogether13.jpg';
import together2 from '../images/imagetogether1.jpg';
import together3 from '../images/Imagetogather2.jpg';
import ProtectedImage from './ProtectedImage';

const MemoryTimeline = () => {
  const memories = [
    {
      date: 'The Beginning',
      title: 'When Our Story Started',
      description: 'The moment I knew you were someone special. Every conversation felt like coming home.',
      image: together1,
      side: 'left',
    },
    {
      date: 'Growing Together',
      title: 'Building Our Dreams',
      description: 'Watching our love grow stronger with each passing day, creating beautiful memories together.',
      image: together2,
      side: 'right',
    },
    {
      date: 'Today & Forever',
      title: 'Our Journey Continues',
      description: 'Every day with you is a new adventure, and I can\'t wait to see what the future holds for us.',
      image: together3,
      side: 'left',
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-peach/30 via-cream/40 to-lavender/30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pastel-purple to-soft-pink mb-4">
            Our Love Journey
          </h2>
          <p className="text-xl text-gray-700 font-body max-w-2xl mx-auto">
            A timeline of moments that have shaped our beautiful story together.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-soft-pink via-pastel-purple to-rose-gold hidden md:block" />

          {/* Memory Items */}
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: memory.side === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-center ${
                memory.side === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-soft-pink rounded-full border-4 border-white shadow-lg z-10 hidden md:block" />

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${memory.side === 'right' ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass rounded-3xl p-6 md:p-8 shadow-xl"
                >
                  <div className="text-soft-pink font-body text-sm font-medium mb-2">
                    {memory.date}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {memory.title}
                  </h3>
                  <p className="text-gray-600 font-body leading-relaxed mb-6">
                    {memory.description}
                  </p>
                  
                  {/* Image */}
                  <ProtectedImage
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="glass rounded-3xl p-10 max-w-2xl mx-auto">
            <p className="font-script text-3xl md:text-4xl text-gray-800 leading-relaxed">
              And this is just the beginning...
              <br />
              <span className="text-soft-pink">Our story has many more chapters to write.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MemoryTimeline;

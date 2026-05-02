import React from 'react';
import { motion } from 'framer-motion';
import { useImageUnlock } from '../context/ImageUnlockContext';
import { FaLock } from 'react-icons/fa';

const ProtectedImage = ({ src, alt, className = '', onClick, ...props }) => {
  const { isUnlocked, setShowCodeModal } = useImageUnlock();

  const handleClick = () => {
    if (!isUnlocked) {
      setShowCodeModal(true);
    } else if (onClick) {
      onClick();
    }
  };

  // Extract rounded classes from className to apply to container
  const hasRoundedFull = className.includes('rounded-full');
  const containerClass = hasRoundedFull ? 'rounded-full' : 'rounded-2xl';

  return (
    <div className="relative group cursor-pointer" onClick={handleClick}>
      {/* Image Container */}
      <div className={`relative overflow-hidden ${containerClass}`}>
        <img
          src={src}
          alt={alt}
          className={className}
          style={{
            filter: isUnlocked ? 'none' : 'blur(20px)',
            transition: 'filter 0.5s ease-in-out',
          }}
          {...props}
        />

        {/* Overlay when locked */}
        {!isUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm ${containerClass}`}
          >
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-3"
              >
                <FaLock className="text-4xl text-white mx-auto" />
              </motion.div>
              <p className="text-white font-body font-semibold text-lg">
                Psst—secret code to unlock
              </p>
              <p className="text-white/80 font-body text-sm mt-1">
                Tap tap if u know it, besto
              </p>
            </div>
          </motion.div>
        )}

        {/* Hover effect when unlocked */}
        {isUnlocked && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>
    </div>
  );
};

export default ProtectedImage;

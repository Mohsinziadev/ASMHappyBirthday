import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Note: You'll need to add a music file to the public folder
  // For now, this is a placeholder that can be connected to actual audio
  const handleToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.log('Audio play failed:', err);
          // Gracefully handle if audio file doesn't exist
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Audio element - Add your music file to public folder */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
      >
        {/* To add background music:
            1. Create a 'music' folder in the 'public' directory
            2. Add your romantic music file (e.g., romantic-music.mp3)
            3. Uncomment the line below and update the file path
        */}
        {/* <source src="/music/romantic-music.mp3" type="audio/mpeg" /> */}
      </audio>

      {/* Music Toggle Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="flex flex-col gap-3">
          {/* Play/Pause Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggle}
            className={`glass rounded-full w-14 h-14 flex items-center justify-center shadow-lg glow ${
              isPlaying ? 'bg-soft-pink/30' : 'bg-white/30'
            }`}
            title={isPlaying ? 'Pause Music' : 'Play Music'}
          >
            <FaMusic className={`text-xl ${isPlaying ? 'text-soft-pink' : 'text-gray-700'}`} />
          </motion.button>

          {/* Mute/Unmute Button */}
          {isPlaying && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleMute}
              className="glass rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <FaVolumeMute className="text-xl text-gray-700" />
              ) : (
                <FaVolumeUp className="text-xl text-soft-pink" />
              )}
            </motion.button>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default MusicToggle;

import React, { useEffect, useState } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const heartEmojis = ['💖', '💕', '💗', '💓', '💝', '💞', '💟'];
    
    const createHeart = () => {
      const newHeart = {
        id: Date.now() + Math.random(),
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`,
        duration: `${8 + Math.random() * 4}s`,
        size: `${20 + Math.random() * 15}px`,
      };
      
      setHearts((prev) => [...prev, newHeart]);
      
      // Remove heart after animation
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 12000);
    };

    // Create hearts periodically
    const interval = setInterval(createHeart, 2000);
    
    // Create initial hearts
    for (let i = 0; i < 5; i++) {
      setTimeout(createHeart, i * 400);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            fontSize: heart.size,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;

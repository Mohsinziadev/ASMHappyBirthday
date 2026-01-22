import React, { createContext, useContext, useState, useEffect } from 'react';

const ImageUnlockContext = createContext();

export const useImageUnlock = () => {
  const context = useContext(ImageUnlockContext);
  if (!context) {
    throw new Error('useImageUnlock must be used within ImageUnlockProvider');
  }
  return context;
};

export const ImageUnlockProvider = ({ children }) => {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    // Check sessionStorage on mount
    const saved = sessionStorage.getItem('imageUnlockCode');
    return saved === 'unlocked';
  });

  const [showCodeModal, setShowCodeModal] = useState(() => {
    // Show modal if not unlocked
    const saved = sessionStorage.getItem('imageUnlockCode');
    return saved !== 'unlocked';
  });

  // The secret code - change this to your desired code
  // IMPORTANT: Change this to your own secret code for privacy
  // Example codes: 'LOVE2024', 'BIRTHDAY2024', 'SPECIAL123', etc.
  const SECRET_CODE = 'LOVE2026'; // ⚠️ CHANGE THIS TO YOUR DESIRED CODE

  const unlockImages = (enteredCode) => {
    if (enteredCode.toUpperCase() === SECRET_CODE.toUpperCase()) {
      setIsUnlocked(true);
      sessionStorage.setItem('imageUnlockCode', 'unlocked');
      setShowCodeModal(false);
      return true;
    }
    return false;
  };

  const lockImages = () => {
    setIsUnlocked(false);
    sessionStorage.removeItem('imageUnlockCode');
    setShowCodeModal(true);
  };

  return (
    <ImageUnlockContext.Provider
      value={{
        isUnlocked,
        showCodeModal,
        setShowCodeModal,
        unlockImages,
        lockImages,
      }}
    >
      {children}
    </ImageUnlockContext.Provider>
  );
};

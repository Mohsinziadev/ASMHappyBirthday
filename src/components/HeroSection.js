import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import amreenPhoto1 from "../images/amreenImage1.jpeg";
import BirthdayCard from "./BirthdayPopCard/BirthdayCard";
import together1 from "../images/imagetogether13.jpg";
import Confetti from "react-confetti";

const HeroSection = () => {
  const [showCard, setShowCard] = useState(false);
  const balloonColors = ["#FF4C4C", "#4CAF50", "#2196F3", "#FFC107", "#9C27B0"];
  const cardRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowCard(false);
      }
    };

    if (showCard) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCard]);

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-red-100 overflow-hidden px-4">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => {
          const isHeart = i % 5 === 0;
          const left = `${Math.random() * 100}%`;
          const bottom = `-${Math.random() * 100}px`;
          const duration = `${5 + Math.random() * 10}s`;
          const delay = `${Math.random() * 5}s`;

          return (
            <motion.div
              key={i}
              className="absolute text-4xl select-none"
              style={{
                left,
                bottom,
                // color,
                animationDuration: duration,
                animationDelay: delay,
                animationName: "float-up",
                animationIterationCount: "infinite",
                animationTimingFunction: "linear",
              }}
            >
              {isHeart ? (
                // <span style={{ color: heartColor }}>💗</span>\
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ec4899"
                  width="36"
                  height="36"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
        2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 
        2.09C13.09 3.81 14.76 3 16.5 3 
        19.58 3 22 5.42 22 8.5c0 3.78-3.4 
        6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="78"
                  viewBox="0 0 24 24"
                  fill={balloonColors[i % balloonColors.length]}
                >
                  <path d="M12 2C8.13 2 5 5.58 5 10c0 3.86 2.69 7.16 6.26 7.86L11 22h2l-.26-4.14C16.31 17.16 19 13.86 19 10c0-4.42-3.13-8-7-8z" />
                </svg>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <motion.div
        className="z-10 flex flex-col py-10 md:py-0 md:flex-row items-center justify-center gap-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div>
          <div>
            <h1
              className="text-5xl md:text-7xl font-extrabold text-pink-600 mb-4  "
              style={{ fontFamily: "cursive" }}
            >
              Happy Birthday, <br />
            </h1>
            <h4
              className="text-5xl md:text-3xl font-extrabold text-pink-600 my-4 mt-6"
              style={{
                fontFamily: "cursive",
                fontWeight: "300",
              }}
            >
              {" "}
              My Dearest Kaka! 🎉
            </h4>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-xl">
            <p className="text-xl md:text-2xl text-gray-700 max-w-xl transition-opacity duration-1000">
              Today is all about you — your smile, your heart, your beauty, and
              everything that makes you incredibly special. 💖 <br />
              I truly wish I could be there with you to celebrate this day by
              your side. But even though I’m far away, my heart is right there
              with you. 🎈 <br />I miss you more than words can say, and I hope
              this small gesture brings a smile to your face. 💌
            </p>
          </p>
          <button
            onClick={() => setShowCard(true)}
            className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
          >
            kaka click here 💌
          </button>
        </div>

        <motion.img
          src={amreenPhoto1}
          className="h-[18rem] w-[18rem] rounded-full object-cover border-4 border-white shadow-xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
      </motion.div>

      <AnimatePresence>
        {showCard && (
          <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300" />
              <div
                ref={cardRef}
                className="z-10 bg-white rounded-xl shadow-xl w-auto md:max-w-xl w-full p-6 transform transition-all duration-300 scale-100 opacity-100 animate-fadeIn"
              >
                <Confetti
                  width={500} // set fixed width to fit the card size
                  height={400} // adjust height to match your card height
                  numberOfPieces={250}
                  recycle={false}
                  gravity={0.3}
                />
                <div className="flex justify-between items-center border-b gap-4 pb-2 mb-4">
                  <BirthdayCard />
                  <img
                    src={together1}
                    className="h-[21rem] w-[16rem] object-cover rounded-[6px] hidden  md:flex"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1.3);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

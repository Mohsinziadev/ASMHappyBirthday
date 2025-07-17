import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import HeroSection from "./components/HeroSection";
import BirthdayCard from "./components/BirthdayPopCard/BirthdayCard";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-200 via-pink-100 to-white">
      <Particles
        className="absolute inset-0 z-0 h-full w-full"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#fdf2f8",
            },
          },
          fullScreen: { enable: false },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                area: 800,
              },
            },
            shape: {
              type: "char",
              character: {
                value: ["❤️", "💖", "💕"],
                font: "Verdana",
                style: "",
                weight: "400",
              },
            },
            size: {
              value: 20,
              random: true,
            },
            opacity: {
              value: 0.9,
              random: true,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "bottom",
              outMode: "out",
            },
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
              },
            },
          },
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 ">
        {/* <Intro /> */}
        <HeroSection />
        {/* <ImageCarousel />
          <LoveNote />
          <Footer /> */}
      </div>
    </div>
  );
}

export default App;

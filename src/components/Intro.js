import React, { useState, useEffect } from "react";

const Intro = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const steps = [
      setTimeout(() => setStep(1), 2000),
      setTimeout(() => setStep(2), 4000),
      setTimeout(() => setStep(3), 6000),
      setTimeout(() => setStep(4), 8000),
      setTimeout(() => setStep(5), 10000),
    ];
    return () => steps.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-screen h-screen text-center overflow-hidden font-['Work_Sans'] bg-pink-50 text-gray-800 flex flex-col items-center justify-center px-4">
      {step === 0 && (
        <p className="text-xl transition-opacity duration-500">
          <span>Hey</span> <span>Lydia</span>
        </p>
      )}

      {step === 1 && (
        <p className="text-lg font-light transition-opacity duration-500">
          I really like your name btw!
        </p>
      )}

      {step === 2 && (
        <p className="text-3xl mt-4 transition-opacity duration-500">
          It's your birthday!!! :D
        </p>
      )}

      {step === 3 && (
        <div className="w-full max-w-xl border-2 border-gray-400 rounded p-4 mt-4">
          <p className="text-left">
            Happy birthday to you!! Yeee! Many many happy blah...
          </p>
          <p className="mt-2 text-white bg-blue-500 inline-block px-3 py-1 rounded cursor-pointer">
            Send
          </p>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4 text-2xl mt-6">
          <p>That's what I was going to do.</p>
          <p>But then I stopped.</p>
          <p>
            I realised, I wanted to do something
            <strong className="bg-yellow-200 px-2 py-1 rounded ml-2 inline-block">
              special
            </strong>
            .
          </p>
          <p>Because,</p>
          <p className="text-4xl">
            You are Special <span>:)</span>
          </p>
          <p className="text-[8rem]">
            <span>S</span>
            <span>O</span>
          </p>
        </div>
      )}

      {step === 5 && (
        <div className="text-center mt-6">
          <img
            src="img/lydia2.png"
            alt="Lydia"
            className="inline-block max-w-xs rounded shadow-lg"
          />
          <div className="relative inline-block">
            <img
              src="img/hat.svg"
              alt="Hat"
              className="absolute w-[80px] -top-[35px] left-[35%] sm:w-[50px] sm:-top-[20px]"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-3xl uppercase">Happy Birthday!</h3>
            <h5 className="text-xl font-light mt-2">
              May the js.prototypes always be with you! ;)
            </h5>
          </div>
          <div className="mt-8 text-lg">
            <p>Okay, now come back and tell me if you liked it.</p>
            <p className="underline cursor-pointer mt-2">
              Or click, if you want to watch it again.
            </p>
            <p className="text-xl mt-1">:)</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;

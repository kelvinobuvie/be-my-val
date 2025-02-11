// src/App.js
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const handleOptionClick = (option) => {
    setResult(option);
  };

  return (
    <div className="main relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="bubbles">
          {/* Floating Bubbles */}
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
        </div>
      </div>
      <div className="relative z-10 flex justify-center items-center h-full text-center  p-4">
        <div>
          
          <p className="mb-4 mt-12 text-sm px-24">Hey Baby, I'm very much convinced we are a perfect fit, I wake up with you in mind every morning and I literaly don't know what i would do without you in my life. I love you beyond words, so for the cause of me wanting to be yours forever...</p>
          <h1 className="mainHeading text-6xl font-bold mb-8 mt-12">Will you be my Val?</h1>
          <div className="space-x-4">
            <button
              className="btn bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg text-lg font-semibold"
              onClick={() => handleOptionClick("Finnaly!! You're my favorite yes and I can't wait to share more moments with you. ❤️")}
            >
              Yes!!!
            </button>
            <button
              className="btn bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-lg text-lg font-semibold"
              onClick={() => handleOptionClick("To late! Our faith has been sealed to be together forever💍")}
            >
              No!
            </button>
          </div>
          {result && (
            <div className="result mt-8 text-2xl font-bold text-green-700 px-24">
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

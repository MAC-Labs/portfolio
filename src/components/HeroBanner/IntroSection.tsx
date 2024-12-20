import React from "react";

export const IntroSection = () => {
  return (
    <>
      <h1 className="text-5xl font-bold mb-6 animate-fade-in">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          MAC The Developer
        </span>
      </h1>
      <h2 className="text-3xl font-semibold mb-4 animate-fade-in-delay-1">
        Full-Stack Web Developer
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mb-12 animate-fade-in-delay-2">
        I build scalable, user-friendly applications using modern technologies
        like React, FastAPI, and MongoDB.
      </p>
    </>
  );
};

import React from "react";
import { Calendar, Clock } from "lucide-react";
import marvelLogo from "../assets/marvelLogo.svg"; // make sure it's in public/ or correct path

const HeroSection = () => {
  return (
    <div className='relative flex flex-col items-start justify-center gap-6 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen text-white'>
      {/* Dark overlay to improve text clarity */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Logo */}
        <img
          src={marvelLogo}
          alt="Marvel Logo"
          className="w-32 md:w-40 lg:w-48 mt-20 object-contain"
        />

        {/* Title */}
        <h1 className="text5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-4">
          Guardians <br /> of the Galaxy
        </h1>

        {/* Genres */}
        <span className="text-lg text-gray-300 mt-2 block">
          Action | Adventure | Sci-Fi
        </span>

        {/* Info row */}
        <div className="flex gap-6 text-gray-300 mt-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>2018</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span>2h 10m</span>
          </div>

        </div>
              <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
  After saving Xandar from Ronan’s wrath, the Guardians are now recognized as heroes. 
  But their fame soon brings new challenges as they unravel secrets about Peter’s true parentage.
</p>
       

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="border border-gray-400 px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition">
            Explore Now{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

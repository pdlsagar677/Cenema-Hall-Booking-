import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-12 bg-gray-900 text-white">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-8">
        <p className="text-2xl font-bold text-primary">Now Showing</p>
        <button
          onClick={() => navigate("/movies")}
          className="flex items-center gap-2 text-sm md:text-base font-medium text-primary hover:text-primary-dull transition"
        >
          View All <ArrowRight size={18} />
        </button>
      </div>

      {/* Movie Grid (Placeholder) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow hover:scale-105 transition-transform cursor-pointer">
          <img
            src=""
            alt="Movie Poster"
            className="w-full h-60 object-cover"
          />
          <div className="p-3">
            <h3 className="font-semibold text-lg">Movie Title</h3>
            <p className="text-sm text-gray-400">Action | 2023</p>
          </div>
        </div>
        {/* Duplicate for more movies */}
      </div>
    </div>
  );
};

export default FeaturedSection;

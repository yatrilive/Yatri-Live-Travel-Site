import React, { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  
  const stats = [
    { value: "10K+", label: "Happy Travelers" },
    { value: "500+", label: "Destinations" },
    { value: "4.9/5", label: "User Rating" }
  ];

  const features = [
    { icon: "🌍", text: "AI-Powered Recommendations" },
    { icon: "✈️", text: "Custom Itineraries" },
    { icon: "🏖️", text: "Hidden Gems" },
  ];

  return (
    <div className="relative w-full min-h-[95vh] flex items-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700"
        src="https://videos.pexels.com/video-files/2257010/2257010-uhd_2560_1440_24fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        onMouseEnter={() => setIsVideoPaused(true)}
        onMouseLeave={() => setIsVideoPaused(false)}
        style={{ filter: isVideoPaused ? 'brightness(0.7)' : 'brightness(1)' }}
      ></video>

      <div className="relative flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-black/70 text-white text-center px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto space-y-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4"
          >
            🌟 AI-Powered Travel Planning Platform
          </motion.div>

          <h1 className="font-extrabold text-5xl md:text-7xl leading-tight tracking-tight">
            Discover Your Next{" "}
            <span className="text-[#f56551] bg-clip-text text-transparent bg-gradient-to-r from-[#f56551] to-[#ff8a75]">
              Adventure
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Experience personalized travel recommendations, hidden gems, and expert insights—all powered by AI!
            From budget backpacking to luxury escapes, get authentic travel experiences curated just for you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
              >
                <span className="text-xl">{feature.icon}</span>
                <span className="text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link to={"/create-trip"}>
              <Button className="w-full sm:w-auto px-10 py-6 text-lg bg-gradient-to-r from-[#f56551] to-[#ff8a75] hover:from-[#d94e3f] hover:to-[#f56551] transition-all duration-300 shadow-lg hover:shadow-xl rounded-full group">
                <span className="flex items-center gap-2">
                  Start Planning Your Trip
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-xl"
                  >
                    →
                  </motion.span>
                </span>
              </Button>
            </Link>
            <Button variant="outline" className="w-full sm:w-auto px-10 py-6 text-lg border-2 border-white text-white hover:bg-white/10 rounded-full group">
              <span className="flex items-center gap-2">
                Watch Demo
                <span className="text-xl group-hover:translate-x-1 transition-transform">▶</span>
              </span>
            </Button>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center group"
              >
                <p className="text-4xl font-bold bg-gradient-to-r from-[#f56551] to-[#ff8a75] bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {stat.value}
                </p>
                <p className="text-gray-300 mt-2 group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-12 text-sm text-gray-400"
          >
            <p>Trusted by travelers from 120+ countries</p>
            <div className="flex justify-center gap-6 mt-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" className="h-6 opacity-50" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix" className="h-6 opacity-50" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

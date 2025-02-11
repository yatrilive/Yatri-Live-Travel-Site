import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full h-[680px]">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/2257010/2257010-uhd_2560_1440_24fps.mp4"
        autoPlay
        loop
        muted
      ></video>

      <div className="relative flex flex-col items-center justify-center w-full h-full bg-black/40 text-white text-center px-3">
        <h1 className="font-extrabold text-[40px] leading-tight">
          Explore the World with Us & Plan Your Perfect Trip! <br />
          <span className="text-[#f56551]">Personalized Travel Tips with AI!</span>
        </h1>

        <p className="text-xl text-gray-200 max-w-3xl">
          🌍✈️ Discover breathtaking destinations, hidden gems, and expert travel tips—all in Hindi!
          Whether you're a backpacker or a luxury traveler, my journey brings real, unfiltered travel experiences.
          With our <strong>AI Trip Planner</strong>, create custom itineraries in seconds, tailored to your style and budget.
          Let’s explore smarter! 🚀✨
        </p>

        <Link to={"/create-trip"}>
          <Button className="mt-4 px-6 py-3 text-lg bg-[#f56551] hover:bg-[#d94e3f]">
            Get Started, It's Free
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

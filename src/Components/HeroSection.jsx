import CustomButton from "../atoms/CustomButton";
import { motion } from "framer-motion";
import Squares from "../atoms/Squares";

export default function HeroSection() {
  return (
    <div className="relative w-full bg-back_color px-4 sm:px-10 lg:px-20 mt-16 sm:mt-28 z-30">
      {/* Background Squares */}
      <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 -z-20">
        <Squares />
      </div>

      {/* Left Moon Gradient */}
      <motion.img
        src="moon-left.jpg"
        alt="Moonlight effect on the left side"
        className="absolute top-[-250px] left-0 -z-10 hidden sm:block"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <img
        src="moon-mask1.png"
        alt="Moon mask effect left"
        className="absolute top-0 left-0 -z-10 hidden sm:block"
      />

      {/* Right Moon Gradient */}
      <motion.img
        src="moon-right.jpg"
        alt="Moonlight effect on the right side"
        className="absolute bottom-[-400px] right-0 -z-10 hidden sm:block"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <img
        src="moon-mask2.png"
        alt="Moon mask effect right"
        className="absolute bottom-[-150px] right-0 -z-10 hidden sm:block"
      />

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center px-4 py-20 sm:py-[190px] text-text_color z-0 max-w-[1600px] mx-auto">
        <p className="w-full max-w-[800px] text-center font-Space_Grotesk text-[clamp(24px,6vw,48px)] leading-tight">
          FUTURE OF DIGITAL WEALTH, POWERED BY $VICE
        </p>
        <p className="w-full max-w-[800px] text-[clamp(12px,3vw,14px)] mt-4 text-center">
          Sign up to receive exclusive offers, roadmap updates, and upcoming
          giveaways.
        </p>

        {/* Signup Input */}
        <div className="flex flex-col sm:flex-row mt-8 sm:mt-11 gap-2 sm:gap-4 items-center">
          <input
            className="w-full sm:w-80 h-10 rounded-[10px] bg-[#3D3D3D] p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E00B7C]"
            placeholder="Email Address"
            type="email"
            aria-label="Enter your email address to sign up"
          />
          <CustomButton text="Sign up" />
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";

export default function SunRayEffect() {
  return (
    <div className="relative w-full h-40 overflow-hidden">
      {/* Sun Rays (Animated Glow) */}
      <motion.img
        src="light1.png" // Update the path if needed
        alt="Sun Shine"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl"
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{
          opacity: [0.5, 0.8, 0.5], // Fading effect
          scale: [1, 1.05, 1], // Slight pulsation
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

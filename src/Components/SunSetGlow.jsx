export default function SunsetGlow() {
    return (
      <div className="relative flex items-center justify-center h-screen bg-back_color overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute w-full h-full bg-gradient-radial from-pink-500 via-purple-500 to-black opacity-70"></div>
  
        {/* Sun Ray Shine Effect */}
        <div className="absolute w-[200%] h-[200%] bg-radial-gradient from-transparent to-pink-500 opacity-50 animate-spin-slow"></div>
  
        {/* Content */}
        <div className="relative z-10 text-white text-center">
          <h1 className="text-4xl font-bold">Sun Ray Shine Effect</h1>
        </div>
      </div>
    );
  }
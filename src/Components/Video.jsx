import { useRef, useState } from "react";

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.pause();
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="mt-10 sm:mt-[125px] flex justify-center px-4">
      <video
        className="rounded-[20px] cursor-pointer max-w-full sm:max-w-[1081px] aspect-video shadow-lg"
        ref={videoRef}
        src="sample.mp4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleVideoClick} // Enables play/pause on click
        preload="auto"
        playsInline
        muted
        controls
        aria-label="Promotional video showcasing the platform"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;

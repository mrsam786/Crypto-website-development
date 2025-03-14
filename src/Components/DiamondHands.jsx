import CustomButton from "../atoms/CustomButton";

const DiamondHands = () => {
  const scroll_down = () => {
    const target = document.getElementById("vice_feature");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="diamond-hands-container flex justify-center w-full mt-16 sm:mt-36 px-4">
      <div className="w-full max-w-[1600px] flex flex-col lg:flex-row relative justify-center items-center gap-10 sm:gap-16 lg:gap-24">
        {/* Responsive Image */}
        <img
          src="dispersionglass.png"
          className="animate-float hover:animate-float_slow sm:w-[400px] md:w-[500px] lg:w-[600px] p-4 sm:p-10 cursor-pointer"
          alt="Dispersion Glass Visual"
        />

        {/* Text Content */}
        <div className="w-full max-w-[600px] flex flex-col text-text_color leading-tight text-center lg:text-left">
          <p className="text-[clamp(28px,6vw,48px)] uppercase font-Space_Grotesk">
            Diamond Hands,<br /> Digital wealth
          </p>
          <p className="text-[clamp(16px,4vw,28px)] font-poppins mt-4 sm:mt-[26px] mb-6 sm:mb-[40px] tracking-tight">
            Transforming the crypto market with high-value prizes like
            performance cars, luxury items, and VIP experiences.
          </p>

          {/* Buttons */}
          <div className="diamond-hands-buttons flex flex-col items-center sm:flex-row gap-4 sm:gap-[34px] font-poppins">
            <a href="https://www.mexc.com/price/vice" target="_blank" aria-label="Trade VICE Token Now">
              <CustomButton text="Trade Now" />
            </a>
            <div role="button" tabIndex="0" className="cursor-pointer" onClick={scroll_down} onKeyPress={(e) => e.key === 'Enter' && scroll_down()} aria-label="Learn More About VICE">
              <CustomButton text="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondHands;

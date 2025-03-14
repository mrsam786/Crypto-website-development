import { useState } from "react";
import Squares from "../atoms/Squares";
import CustomButton from "../atoms/CustomButton";

const Header = () => {
  const [status, setStatus] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex items-center w-full flex-col text-text_color bg-back_color">
      {/* Header Container */}
      <div className="head w-full max-w-[1600px] flex justify-between items-center pt-4 sticky top-0 z-50 px-4 md:px-8">
        <a href="#">
          <img
            src="VICE_White 2.png"
            alt="logo"
            className="w-[110px] min-w-[80px] md:w-[110px]"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="title hidden md:flex text-[14px] font-poppins font-bold">
          {["Home", "Platform", "Giveaways", "Roadmap", "Docs"].map(
            (item, idx) => (
              <a
                href={
                  idx === 4
                    ? "https://vice-io.gitbook.io/vice.io-docs"
                    : `#${item.toLowerCase()}`
                }
                target={idx === 4 ? "_blank" : "_self"}
                rel="noopener noreferrer"
                key={item}
              >
                <p
                  className={`${
                    status === idx ? "border-b-4 border-white" : ""
                  } cursor-pointer p-5`}
                  onClick={() => setStatus(idx)}
                >
                  {item}
                </p>
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className=" block md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 256 256"
              fill="#ffffff"
            >
              <g transform="scale(5.12,5.12)">
                <path d="M9.15625,6.3125l-2.84375,2.84375l15.84375,15.84375l-15.9375,15.96875l2.8125,2.8125l15.96875,-15.9375l15.9375,15.9375l2.84375,-2.84375l-15.9375,-15.9375l15.84375,-15.84375l-2.84375,-2.84375l-15.84375,15.84375z"></path>
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              width="50px"
              height="50px"
              fill="#ffffff"
            >
              <g transform="scale(5.12,5.12)">
                <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path>
              </g>
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-back_color text-white flex flex-col items-center md:hidden">
            {["Home", "Platform", "Giveaways", "Roadmap", "Docs"].map(
              (item, idx) => (
                <a
                  href={
                    idx === 4
                      ? "https://vice-io.gitbook.io/vice.io-docs"
                      : `#${item.toLowerCase()}`
                  }
                  target={idx === 4 ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  key={item}
                  className="py-4 w-full text-center"
                  onClick={() => {
                    setStatus(idx);
                    setMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}

        {/* Trade Button */}
        <div className="hidden md:flex justify-center items-center mr-[60px]">
          <a href="https://www.mexc.com/price/vice" target="_blank">
            <CustomButton text="Trade now" />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full h-[629px] relative flex justify-center items-center">
        <Squares />
        <div className="absolute bg-black w-full h-full opacity-40"></div>
        <div className="w-full max-w-[1600px] flex flex-col lg:flex-row items-center absolute px-4 sm:px-8">
          {/* Left Content */}
          <div className="w-full flex flex-col justify-center items-left max-w-[970px] text-center lg:text-left">
            <p className="uppercase font-Space_Grotesk text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight tracking-tight mb-5">
              Future of Digital
              <br /> Giveaways, Powered
              <br />
              by Blockchain
            </p>
            <p className="uppercase font-Space_Grotesk text-lg sm:text-xl md:text-2xl lg:text-3xl mb-5">
              $VICE/USDT NOW TRADING ON GATE.IO AND MEXC
            </p>
            <div className="flex justify-center lg:justify-start">
              <CustomButton text="Trade now" />
            </div>
          </div>

          {/* Right Image */}
          <img
            src="Brand.png"
            className="w-48 sm:w-56 md:w-72 lg:w-[397px] h-auto mt-6 lg:mt-0"
            alt="Brand Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

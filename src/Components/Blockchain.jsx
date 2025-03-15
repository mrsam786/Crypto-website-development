import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TokenSlide = ({ href, logoSrc, altText }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={altText}>
    <div className="relative border border-[#4141414D] px-6 sm:px-10 lg:px-24 py-4 sm:py-6 lg:py-7 flex justify-center items-center">
      <img src={logoSrc} alt={altText} className="w-12 sm:w-16 md:w-20" />
      {[
        "top-[-2px] right-[-7px]",
        "top-[-2px] left-[-7px]",
        "bottom-[-2px] right-[-7px]",
        "bottom-[-2px] left-[-7px]",
      ].map((pos, index) => (
        <img
          key={index}
          src={index < 2 ? "bounder1.png" : "bounder2.png"}
          alt="Decorative border"
          className={`absolute ${pos}`}
          aria-hidden="true"
        />
      ))}
    </div>
  </a>
);

const Blockchain = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* Carousel Section */}
      <div className="w-full my-10 sm:my-[52px] px-4 sm:px-10 lg:px-20 flex flex-wrap items-center justify-center max-w-[1600px]">
        <Carousel
          responsive={responsive}
          dotListClass="custom-dot-list-style"
          containerClass="w-full min-w-full min-h-[200px]"
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          ssr={true}
          infinite={true}
        >
          <TokenSlide href="https://www.gate.io/price/vice-token-vice" logoSrc="logo1.png" altText="Gate.io Vice Token" />
          <TokenSlide href="https://www.mexc.com/price/vice" logoSrc="logo2.png" altText="MEXC Vice Token" />
          <TokenSlide href="https://coinmarketcap.com/currencies/vice-token/" logoSrc="logo3.png" altText="CoinMarketCap Vice Token" />
          <TokenSlide href="https://www.coingecko.com/en/coins/vice" logoSrc="logo4.png" altText="CoinGecko Vice Token" />
          <TokenSlide href="#" logoSrc="logo5.png" altText="More Token Info" />
        </Carousel>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center items-center px-6 sm:px-10 md:px-36 max-w-[1600px] text-center sm:text-start">
        <p className="w-full font-Space_Grotesk text-[clamp(36px,8vw,70px)] text-text_color mb-6 sm:mb-[34px] uppercase leading-tight tracking-tight">
          Trustless. Decentralized.<br/> Transparent.
        </p>
        <p className="w-full font-poppins sm:font-bold text-[clamp(18px,4vw,28px)] text-text_color leading-tight tracking-tight">
          $VICE is revolutionizing the giveaway ecosystem by leveraging blockchain technology for full transparency, fairness, and security.
        </p>
      </div>
    </div>
  );
};

export default Blockchain;

import CustomButton from "../atoms/CustomButton";
import { motion } from "framer-motion";

const Descriptioncmp = ({ header, text }) => {
  return (
    <div className="flex flex-col items-center w-full md:w-1/3 px-4">
      <div className="text-[clamp(24px,5vw,30px)] leading-tight font-bold text-center">
        {header}
      </div>
      <div className="font-poppins leading-normal text-[clamp(14px,4vw,16px)] mt-6 text-center">
        {text}
      </div>
    </div>
  );
};

const BenefitsDesc = () => {
  const contents = [
    {
      header: "Blockchain Fairness",
      text: "Every transaction is on-chain, ensuring full transparency. Built for Web3 users, by Web3 enthusiasts.",
    },
    {
      header: "No More Scams",
      text: "Eliminate fake giveaways and rug pulls with decentralized verification.",
    },
    {
      header: "Global & Borderless",
      text: "Participate from anywhere, instantly, with entries via crypto payments.",
    },
  ];

  return (
    <div
      className="w-full relative mt-20 sm:mt-[110px] bg-no-repeat bg-cover bg-top z-20"
      style={{ backgroundImage: "url(/back-light1.png)" }}
    >
      {/* Sun Rays (Animated Glow) */}
      <div className="relative w-full">
        <motion.img
          src="light1.png"
          alt="Background Glow"
          className="w-full absolute top-[-30px] -z-10"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content Section */}
      <div className="flex justify-center">
        <div className="w-full max-w-[1600px] flex flex-col text-text_color pt-[200px] px-4 sm:px-10 lg:px-20">
          <p className="text-[clamp(28px,6vw,48px)] font-Space_Grotesk text-center">
            WHY $VICE
          </p>

          {/* Benefits List */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center mt-12 sm:mt-[80px] gap-8 sm:gap-16 md:gap-10">
            {contents.map((content, index) => (
              <Descriptioncmp key={index} header={content.header} text={content.text} />
            ))}
          </div>

          {/* Learn More Button */}
          <div className="py-10 flex justify-center bg-back_color">
            <a
              href="https://vice-io.gitbook.io/vice.io-docs/introduction/market-overview"
              target="_blank"
              aria-label="Read more about VICE Token benefits"
            >
              <CustomButton text="Learn more" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsDesc;

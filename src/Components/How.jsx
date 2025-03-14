import CustomButton from "../atoms/CustomButton";

const Feature = () => {
  return (
    <div
      className="pt-20 sm:pt-[134px] px-4 sm:px-10 lg:px-20 flex justify-center bg-back_color text-text_color"
      id="platform"
    >
      <div className="flex max-w-[1600px] items-center justify-between flex-col lg:flex-row">
        {/* Text Content */}
        <div className="space-y-8 sm:space-y-[63px] text-center lg:text-left">
          <p className="text-[clamp(24px,6vw,48px)] font-Space_Grotesk uppercase">
            How it works
          </p>
          <div className="flex flex-col items-center lg:items-start space-y-8">
            {/* Feature List */}
            {[
              {
                icon: "icon1.png",
                title: "Create/Enter into Giveaways",
                description:
                  "Easily set up or enter decentralized raffles and sweepstakes with verifiable smart contracts.",
              },
              {
                icon: "icon2.png",
                title: "Buy Tickets with Crypto",
                description:
                  "Participate using $VICE tokens or any supported cryptocurrency for instant, trustless transactions.",
              },
              {
                icon: "icon3.png",
                title: "Provably Fair Draws",
                description:
                  "Winners are selected via secure, verifiable smart contracts—no middlemen, no manipulation.",
              },
              {
                icon: "icon4.png",
                title: "Instant Payouts",
                description:
                  "Prizes are distributed automatically, ensuring a seamless and fraud-proof experience.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-5">
                <img
                  src={feature.icon}
                  alt={`${feature.title} Icon`}
                  className="w-10 sm:w-12"
                />
                <div className="text-left">
                  <p className="font-bold text-[clamp(18px,5vw,30px)]">
                    {feature.title}
                  </p>
                  <p className="text-[clamp(12px,4vw,14px)] mt-3 leading-tight">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.mexc.com/price/vice"
                target="_blank"
                aria-label="Trade VICE Token Now"
              >
                <CustomButton text="Trade Now" />
              </a>
              <a
                href="https://vice-io.gitbook.io/vice.io-docs/introduction/vice-overview/vice-platform"
                target="_blank"
                aria-label="Learn More About the VICE Platform"
              >
                <CustomButton text="Learn More" />
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center w-full lg:w-auto mt-12 lg:mt-0">
          <img
            src="vice_usdt.png"
            alt="VICE USDT Illustration"
            className="relative w-full max-w-[720px] z-10 animate-float hover:animate-float_slow cursor-pointer"
          />
          <img
            src="feature_group.png"
            alt="Decorative Feature Background"
            className="absolute right-0 top-12 w-full max-w-[1120px] md:h-[530px] h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;

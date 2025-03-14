import { useEffect } from "react";
import CustomButton from "../atoms/CustomButton";
import { Tooltip } from "react-tooltip";

const Buy = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://widgets.coingecko.com/gecko-coin-price-chart-widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="w-full relative mt-[-50px] flex flex-col items-center justify-center px-4 sm:px-10 lg:px-20"
      id="doc"
    >
      {/* Background Images */}
      <img src="Bull1.png" alt="Bull Illustration Left" className="absolute top-0 left-0 hidden sm:block" />
      <img src="Bull.png" alt="Bull Illustration Right" className="absolute top-0 right-0 hidden sm:block" />

      <div className="w-full flex flex-col items-center max-w-[1600px]">
        {/* Title Section */}
        <div className="w-full flex flex-col items-center justify-center text-text_color tracking-tight leading-tight mt-40 sm:mt-72 mb-12 sm:mb-16 z-10">
          <p className="max-w-[800px] w-full text-[clamp(28px,6vw,70px)] font-Space_Grotesk text-center uppercase">
            Launch Your Own Web3 Giveaway
          </p>
          <p className="max-w-[800px] w-full text-[clamp(16px,4vw,28px)] mt-6 sm:mt-8 text-center pb-6 sm:pb-10">
            Whether you&apos;re a content creator or a brand looking to engage
            the crypto audience, $VICE provides a trustless way to reward your
            community.
          </p>
          <a
            href="https://www.mexc.com/exchange/VICE_USDT?_from=search"
            target="_blank"
            aria-label="Trade VICE Token Now"
          >
            <CustomButton text="Trade now" />
          </a>
        </div>

        {/* Tokenomics and Chart Section */}
        <div className="flex justify-center items-center p-6 sm:p-10 flex-col sm:flex-row gap-16 sm:gap-32">
          {/* Tokenomics Distribution */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex mb-8 sm:mb-12 font-Space_Grotesk z-50 cursor-pointer">
              {/* Large Circle */}
              <div>
                <div
                  className="w-32 h-32 text-lg flex justify-center items-center text-text_color font-bold rounded-full bg-gradient-to-bl from-white via-[#E00B7C] to-[#746ED5] m-1"
                  data-tooltip-id="tip1"
                >
                  27.5%
                </div>
                <Tooltip id="tip1" content="Ecosystem rewards & airdrop" />
              </div>

              {/* Smaller Circles */}
              <div className="flex flex-col -mt-5">
                <div>
                  <div
                    className="w-[68px] h-[68px] text-lg flex justify-center items-center text-text_color font-bold rounded-full bg-gradient-to-bl from-[#1A1A1A] to-[#212121] border border-white border-opacity-10 m-1"
                    data-tooltip-id="tip2"
                  >
                    25%
                  </div>
                  <Tooltip id="tip2" content="Treasury" />
                </div>

                <div className="flex flex-row">
                  <div>
                    <div
                      className="w-[28px] h-[28px] text-[12px] flex justify-center items-center text-text_color font-bold rounded-full bg-gradient-to-bl from-[#1A1A1A] to-[#212121] border border-white border-opacity-10 m-1"
                      data-tooltip-id="tip3"
                    >
                      4.5
                    </div>
                    <Tooltip id="tip3" content="Pre-Sale Round 2" />
                  </div>

                  <div>
                    <div
                      className="w-[45px] h-[45px] text-[13.5px] flex justify-center items-center text-text_color font-bold rounded-full bg-gradient-to-bl from-[#1A1A1A] to-[#212121] border border-white border-opacity-10 m-1"
                      data-tooltip-id="tip4"
                    >
                      10%
                    </div>
                    <Tooltip id="tip4" content="Marketing*" />
                  </div>
                </div>

                <div>
                  <div
                    className="w-[56px] h-[56px] text-[13.5px] flex justify-center items-center text-text_color font-bold rounded-full bg-gradient-to-bl from-[#1A1A1A] to-[#212121] border border-white border-opacity-10 m-1"
                    data-tooltip-id="tip5"
                  >
                    15%
                  </div>
                  <Tooltip id="tip5" content="Liquidity" />
                </div>
              </div>
            </div>
            <a
              href="https://vice-io.gitbook.io/vice.io-docs/usdvice-token/token-tech-info"
              target="_blank"
              aria-label="Read more about VICE Token"
            >
              <CustomButton text="Token info" />
            </a>
          </div>

          {/* CoinGecko Chart Widget */}
          <gecko-coin-price-chart-widget
            locale="en"
            dark-mode="true"
            outlined="true"
            coin-id="vice-2"
            initial-currency="usd"
            className="w-full max-w-[553px]"
          ></gecko-coin-price-chart-widget>
        </div>
      </div>
    </div>
  );
};

export default Buy;

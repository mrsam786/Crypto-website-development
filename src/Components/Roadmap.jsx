"use client";

import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import CustomButton from "../atoms/CustomButton";
import { motion } from "framer-motion";

export default function Roadmap() {
  const [activePhase, setActivePhase] = useState(2);

  const phases = [
    {
      id: 1,
      title: "PHASE 1",
      date: "(Q4 2024)",
      items: [
        "Smart contract creation",
        "Smart contract audit",
        "Community and social channels established",
        "Website Live",
        "Set token pre-sales live and complete various token presale rounds",
      ],
    },
    {
      id: 2,
      title: "PHASE 2",
      date: "(Q4 2024)",
      items: [
        "Wallet integration: Connect any wallet with multiple providers, MetaMask, WalletConnect, etc.",
        "Launch schedule for the first 10 weekly Supercar competitions",
        "3x Top 10 CEX listings",
        "Initial VICE burn-activated",
        "TGE, Launch Via DEX + CEX",
      ],
    },
    {
      id: 3,
      title: "PHASE 3",
      date: "(Q1 2025)",
      items: [
        "Launch VIP and Membership NFTs",
        "Upgrade to 2 weekly competitions",
        'Set "promo" section to go live',
        "Launch RewardPlay Feature",
      ],
    },
  ];

  return (
    <div
      className="w-full pb-[300px] sm:pb-[400px] px-4 sm:px-10 lg:px-20 relative bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center z-20"
      style={{ backgroundImage: "url(/back-light2.png)" }}
      id="roadmap"
    >
      {/* Sun Rays (Animated Glow) */}
      <motion.img
        src="light2.png"
        alt="Background Glow"
        className="w-full absolute bottom-[-30px] -z-10"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="w-full flex flex-col items-center max-w-[1600px]">
        <h1 className="text-center font-Space_Grotesk text-[clamp(28px,6vw,48px)] text-text_color mb-16 sm:mb-28">
          VICE ROADMAP
        </h1>

        {/* Phases Section */}
        <div className="w-full flex justify-center flex-wrap gap-6 pb-[60px]">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className={`relative p-1 rounded-[20px] w-full sm:w-[345px] ${
                activePhase === phase.id
                  ? "bg-back_color"
                  : "bg-gradient-to-r from-[#55A5EE] to-[#E00B7C]"
              }`}
              onMouseEnter={() => setActivePhase(phase.id)}
              role="button"
              tabIndex="0"
              aria-label={`View details for ${phase.title}`}
            >
              <div
                className={`rounded-[20px] p-16 sm:p-8 h-auto sm:h-[465px] cursor-pointer transition-all duration-300 flex flex-col items-stretch ${
                  activePhase === phase.id ? "card-background" : "bg-back_color"
                }`}
              >
                <div className="text-center">
                  <h2 className="text-[clamp(20px,5vw,32px)] font-bold text-text_color">
                    {phase.title}
                  </h2>
                  <p className="text-gray-400 text-[clamp(12px,3vw,14px)]">
                    {phase.date}
                  </p>
                </div>

                <div className="border-[#FFFFFF] border-b-[0.5px] border-solid mt-4 mx-4"></div>

                <div className="flex-grow mt-6 sm:mt-12">
                  <ul className="flex flex-col justify-between gap-y-3 min-h-52">
                    {phase.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start text-text_color"
                      >
                        <div className="w-4 mx-1">
                          <FaCircleCheck
                            className={`text-[12px] ${
                              activePhase === phase.id
                                ? "text-[#E00B7C]"
                                : "text-[#1552F0]"
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                        <span className="text-[12px] px-1 -mt-1 text-wrap">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trade Button */}
        <a
          href="https://www.mexc.com/exchange/VICE_USDT?_from=search"
          target="_blank"
          aria-label="Trade VICE Token Now"
        >
          <CustomButton text="Trade now" />
        </a>
      </div>
    </div>
  );
}

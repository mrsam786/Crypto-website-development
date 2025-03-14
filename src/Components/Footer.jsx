export default function Footer() {
  return (
    <footer className="bg-back_color w-full text-text_color px-4 sm:px-10 lg:px-20 py-16 sm:py-24 flex justify-center">
      <div className="w-full mx-auto max-w-[1600px]">
        <div className="flex flex-col justify-between items-center sm:items-start gap-8 mb-12">
          {/* Logo */}
          <div className="lg:col-span-4 min-w-[110px] w-[110px]">
            <img
              src="VICE_White 2.png"
              alt="VICE Logo"
              className="brightness-0 invert"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex justify-between items-center sm:items-start w-full mt-10 sm:mt-16 pr-0 sm:pr-20 flex-wrap lg:flex-nowrap gap-8">
            {/* Column 0 */}
            <div className="space-y-4 text-[clamp(12px,3vw,14px)]">
              <a href="#" className="block hover:text-text_color">
                Token
              </a>
              <a
                href="https://vice-io.gitbook.io/vice.io-docs/usdvice-token/tokenomics"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text_color/70 hover:text-text_color"
              >
                Tokenomics
              </a>
              <div className="block text-text_color/70 hover:text-text_color">
                Contract Address
                <br />
                0xfd409bc96d126bc8a56479d4c7672015d539f96c
              </div>
            </div>

            <div className="w-full sm:w-[50%] flex justify-between flex-wrap">
              {/* Column 1 */}
              <div className="space-y-4 text-[clamp(12px,3vw,14px)]">
                <a href="#" className="block hover:text-text_color">
                  Home
                </a>
                <a href="#" className="block text-text_color/70 hover:text-text_color">
                  Features
                </a>
                <a href="#" className="block text-text_color/70 hover:text-text_color">
                  Competitions
                </a>
              </div>

              {/* Column 2 */}
              <div className="space-y-4 text-[clamp(12px,3vw,14px)]">
                <a href="#" className="block hover:text-text_color">
                  Token
                </a>
                <a href="#" className="block text-text_color/70 hover:text-text_color">
                  Contact Us
                </a>
                <a href="#" className="block text-text_color/70 hover:text-text_color">
                  Telegram
                </a>
                <a
                  href="https://x.com/ViceTokenApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-text_color/70 hover:text-text_color"
                  aria-label="Follow VICE on X (Twitter)"
                >
                  X
                </a>
              </div>

              {/* Column 3 */}
              <div className="space-y-4 text-[clamp(12px,3vw,14px)]">
                <a href="#" className="block hover:text-text_color">
                  FAQ
                </a>
                <a href="#" className="block text-text_color/70 hover:text-text_color">
                  Audit
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-text_color/70 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start text-[clamp(12px,3vw,14px)]">
            <a
              href="https://www.vicetoken.io/termsandconditions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 mr-4 sm:mr-[30px]"
              aria-label="Read Terms and Conditions"
            >
              Terms and Conditions
            </a>
            <a href="#" className="hover:text-gray-300 mr-4 sm:mr-[30px]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 mr-4 sm:mr-[30px]">
              Legal Notice
            </a>
            <a href="#" className="hover:text-gray-300 mr-4 sm:mr-[30px]">
              Cookie Setting
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 font-Space_Grotesk text-[clamp(12px,3vw,14px)]">
            &#169; 2025 VICE Token
          </div>
        </div>
      </div>
    </footer>
  );
}

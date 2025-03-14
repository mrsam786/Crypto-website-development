import { useEffect, useState } from "react";
import CustomButton from "../atoms/CustomButton";

const data = [
  { img: "clock.png", text: "Rolex Submariner", price: 50 },
  { img: "car.png", text: "2025 Lamborghini Revuelto", price: 100 },
  { img: "picture.png", text: "Tomorrowland All Access Pass", price: 50 },
];

const Giveaways = () => {
  const [border, setBorder] = useState("upcoming");
  const [items, setItems] = useState(data);
  const [sheetData, setSheetData] = useState([]);

  const minusPrice = (index) => {
    setItems((items) =>
      items.map((item, i) =>
        i === index ? { ...item, price: Math.max(0, item.price - 50) } : item
      )
    );
  };

  const plusPrice = (index) => {
    setItems((items) =>
      items.map((item, i) =>
        i === index ? { ...item, price: item.price + 50 } : item
      )
    );
  };

  const API_KEY = import.meta.env.VITE_GOOGLESHEET_API_KEY;
  const SHEET_ID = "1p-1R2_naFhjlGys4IgMHhHJf5T_vjJ1o27EJZHTvSfM";
  const RANGE = "VICE GIVEAWAY WINNERS!A3:C";

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => setSheetData(result.values || []))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-full text-white pt-12 sm:pt-[75px] bg-back_color flex justify-center" id="giveaways">
      <div className="w-full max-w-[1600px]">
        <p className="text-[clamp(28px,6vw,48px)] font-Space_Grotesk flex justify-center">
          GIVEAWAYS
        </p>

        {/* Toggle Section */}
        <div className="sm:px-10 py-10">
          <div className="flex items-start h-[89px]">
            {["upcoming", "completed"].map((section) => (
              <div
                key={section}
                onClick={() => setBorder(section)}
                className={`w-[164px] text-[14px] cursor-pointer font-bold flex justify-center pb-4 ${
                  border === section ? "border-b-[#e00b7c] text-[#e00b7c] border-b-2" : ""
                }`}
                role="button"
                tabIndex="0"
                aria-label={`View ${section} giveaways`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </div>
            ))}
          </div>

          {/* Upcoming Giveaways */}
          {border === "upcoming" ? (
            <div>
              {items.map((item, index) => (
                <div key={index} className="w-full rounded-lg mb-2 bg-[#202020] p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
                  <img
                    src={item.img}
                    alt={`${item.text}`}
                    className="w-full max-w-[157px] h-auto"
                  />
                  <div className="grow flex flex-col sm:flex-row justify-between items-center w-full gap-4">
                    <div className="text-center sm:text-left min-w-[300px]">
                      <p className="text-sm text-[#b9b9b9]">COMING SOON</p>
                      <p className="text-lg sm:text-xl font-semibold">{item.text}</p>
                      <p className="text-sm text-[#b9b9b9]">56 ENTRIES</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#55A5EE] to-[#E00B7C] min-w-[110px] h-[38px] rounded-full flex justify-center items-center gap-2">
                      <p
                        className="text-white font-bold text-lg cursor-pointer"
                        onClick={() => minusPrice(index)}
                        aria-label={`Decrease price for ${item.text}`}
                      >
                        -
                      </p>
                      <p className="text-sm font-bold px-2">VICE</p>
                      <p
                        className="text-white font-bold text-lg cursor-pointer"
                        onClick={() => plusPrice(index)}
                        aria-label={`Increase price for ${item.text}`}
                      >
                        +
                      </p>
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-sm text-[#D9D9D9]">ENTRY COST</p>
                      <p className="font-bold text-lg">${item.price}</p>
                    </div>
                    <CustomButton text="More info" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <div className="title flex items-center text-[#B9B9B9] text-[14px] px-4 sm:px-10 gap-4 font-poppins">
                <p className="w-10">Year</p>
                <p className="w-48 sm:w-96">Address</p>
                <p className="w-32">Prize</p>
              </div>
              {sheetData.map((item, index) => (
                <div key={index} className="w-full rounded-lg bg-[#202020] mt-4 p-4 sm:p-10">
                  <div className="flex items-center text-white py-4 text-sm font-bold gap-4">
                    <p className="w-10">2025</p>
                    <p className="w-48 sm:w-96 truncate">{item[0]}</p>
                    <p className="w-32 text-gradient">{item[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Giveaways;

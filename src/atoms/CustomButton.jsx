
const CustomButton = ({ text }) => (
  <div className="group relative cursor-pointer">
    <button
      className="w-[130px] h-[40px] font-poppins font-bold text-[12px] text-text_color flex items-center justify-center bg-no-repeat bg-cover bg-center active:translate-y-[2px]"
      style={{ backgroundImage: "url('button-background.png')" }}
      >
      <p className="z-10 "> {text} </p>
    </button>
  </div>
);
export default CustomButton;
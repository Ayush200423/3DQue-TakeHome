import React from "react";

const Header = () => {
  return (
    <div className="flex w-[500px] h-[70px] bg-[#f1f5f9] justify-between items-center font-poppinsSemiBold text-[20px] rounded-t-lg">
      <div className="pl-[25px] text-[#1f2937]">Filament Quick Controls</div>
      <div className="pr-[25px] text-[#4e5f75]">
        {650}g / {1000}g
      </div>
    </div>
  );
};

export default Header;

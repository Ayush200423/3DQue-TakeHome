import React from "react";

const Refill = () => {
  return (
    <div className="flex items-center w-full justify-evenly">
      <div className="font-poppinsSemiBold text-[20px]">Refill</div>

      <div className="w-[350px] flex justify-between font-poppinsSemiBold text-[18px]">
        <button className="px-[18px] h-[44px] rounded-md bg-[#e2e8f0]">
          .75kg
        </button>

        <button className="px-[18px] h-[44px] rounded-md bg-[#e2e8f0]">
          1kg
        </button>

        <button className="px-[18px] h-[44px] rounded-md bg-[#e2e8f0]">
          5kg
        </button>

        <button className="px-[18px] h-[44px] rounded-md bg-[#e2e8f0]">
          10kg
        </button>
      </div>
    </div>
  );
};

export default Refill;

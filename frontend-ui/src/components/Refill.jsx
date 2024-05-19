import React, { useState } from "react";
import { FilamentContext } from "../context/FilamentContext";
import { useContext } from "react";

const Refill = () => {
  const { setFilament } = useContext(FilamentContext);
  const [selectedRefill, setSelectedRefill] = useState(-1);

  const handleButtonClick = (grams) => {
    setFilament({
      filamentRemaining: grams + "g",
      filamentTotal: grams + "g",
    });
    setSelectedRefill(grams);
  };

  const buttonClass = (number) =>
    `px-[18px] h-[44px] rounded-md ${
      selectedRefill === number
        ? "bg-[#1e2836] text-[#f1f5f9]"
        : "bg-[#e2e8f0] text-[#1f2937]"
    }`;

  return (
    <div className="flex items-center w-full justify-evenly">
      <div className="font-poppinsSemiBold text-[20px]">Refill</div>

      <div className="w-[350px] flex justify-between font-poppinsSemiBold text-[18px]">
        <button
          className={buttonClass(750)}
          onClick={() => handleButtonClick(750)}
        >
          .75kg
        </button>

        <button
          className={buttonClass(1000)}
          onClick={() => handleButtonClick(1000)}
        >
          1kg
        </button>

        <button
          className={buttonClass(5000)}
          onClick={() => handleButtonClick(5000)}
        >
          5kg
        </button>

        <button
          className={buttonClass(10000)}
          onClick={() => handleButtonClick(10000)}
        >
          10kg
        </button>
      </div>
    </div>
  );
};

export default Refill;

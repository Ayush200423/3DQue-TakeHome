import React from "react";
import Tags from "./utils/Tags";
import TextBox from "./utils/TextBox";

const RemainingFilament = () => {
  return (
    <div className="py-[20px]">
      <div className="font-poppinsSemiBold text-[20px] text-[#1f2937]">
        Filament Remaining
      </div>
      <div className="flex mt-[10px]">
        <div className="pr-[20px]">
          <TextBox />
        </div>
        <Tags />
      </div>
    </div>
  );
};

export default RemainingFilament;

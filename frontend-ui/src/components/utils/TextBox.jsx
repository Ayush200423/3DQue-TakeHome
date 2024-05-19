import React from "react";
import { FilamentContext } from "../../context/FilamentContext";
import { useContext } from "react";

const TextBox = () => {
  const { filament, setFilament } = useContext(FilamentContext);

  const changeValue = (e) => {
    let val = e.target.value;

    // EDGE CASES:
    // Remove the leading 0 if there is any other significant number
    if (val[0] == "0") {
      val = val.slice(1);
    }

    // If the 'g' in the string was deleted, delete the last integer value instead
    if (val.indexOf("g") === -1) {
      val = val.slice(0, -1);
    }

    // If the value is null, set 0 as the placeholder
    if (val.length == 0) {
      val = "0";
    }

    const cleanedValue = val.replace(/g|[^0-9]/g, "");
    setFilament({
      filamentRemaining: cleanedValue + "g",
      filamentTotal: filament.filamentTotal,
    });
  };

  return (
    <div>
      <input
        type="text"
        value={filament.filamentRemaining}
        onChange={changeValue}
        className="w-[100px] h-[55px] text-center border-2 border-[#e2e8f0] rounded-md font-poppinsRegular text-[20px] focus:border-[#83bafa] focus:outline-none"
      />
    </div>
  );
};

export default TextBox;

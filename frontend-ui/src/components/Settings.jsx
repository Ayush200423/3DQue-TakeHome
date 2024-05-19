import React, { useContext, useEffect, useState } from "react";
import RemainingFilament from "./RemainingFilament";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import Refill from "./Refill";
import { FilamentContext } from "../context/FilamentContext";
import SaveChanges from "./utils/SaveChanges";

const Settings = () => {
  const { filament, originalFilament } = useContext(FilamentContext);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const hasChanged =
      filament.filamentRemaining !== originalFilament.filamentRemaining ||
      filament.filamentTotal !== originalFilament.filamentTotal;
    setIsChanged(hasChanged);
  }, [filament, originalFilament]);

  // For use in the pie chart
  const filamentTotalProcessed = filament.filamentTotal.slice(0, -1);
  const filamentTotalInteger = parseInt(filamentTotalProcessed, 10);

  const filamentRemainingProcessed = filament.filamentRemaining.slice(0, -1);
  const filamentRemainingInteger = parseInt(filamentRemainingProcessed, 10);

  return (
    <div>
      <div className="flex h-max justify-center items-center">
        <div className="w-[75px] mx-[20px]">
          <Doughnut
            data={{
              datasets: [
                {
                  label: "Filament Remaining",
                  data: [filamentTotalInteger, filamentRemainingInteger],
                  backgroundColor: ["#60a4fa", "#1f2937"],
                  hoverOffset: 4,
                },
              ],
            }}
          />
        </div>
        <RemainingFilament />
      </div>

      <div className="mt-[8px]">
        <Refill />
      </div>

      <div
        className={`w-full flex justify-center mt-[30px] ${
          isChanged ? "visible" : "invisible"
        }`}
      >
        <SaveChanges />
      </div>
    </div>
  );
};

export default Settings;

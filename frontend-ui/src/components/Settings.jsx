import React from "react";
import RemainingFilament from "./RemainingFilament";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import Refill from "./Refill";

const Settings = () => {
  return (
    <div>
      <div className="flex h-max justify-center items-center">
        <div className="w-[75px] mx-[20px]">
          <Doughnut
            data={{
              datasets: [
                {
                  label: "Filament Remaining",
                  data: [1000, 650],
                  backgroundColor: ["#60a4fa", "#1f2937"],
                  hoverOffset: 4,
                },
              ],
            }}
          />
        </div>
        <RemainingFilament />
      </div>

      <div>
        <Refill />
      </div>
    </div>
  );
};

export default Settings;

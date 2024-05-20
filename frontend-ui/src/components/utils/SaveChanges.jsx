import React from "react";
import save from "../../assets/img/save.png";
import { FilamentContext } from "../../context/FilamentContext";
import { useContext } from "react";

const SaveChanges = () => {
  const { filament, setOriginalFilament } = useContext(FilamentContext);

  const updatedFilament = {
    filamentRemaining: parseInt(filament.filamentRemaining.slice(0, -1)),
    filamentTotal: parseInt(filament.filamentTotal.slice(0, -1)),
  };

  const handleSaveChanges = () => {
    console.log(updatedFilament);
    fetch("http://localhost:8080/updateFilament/3", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFilament),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setOriginalFilament({
          filamentRemaining: data.filamentRemaining + "g",
          filamentTotal: data.filamentTotal + "g",
        });
      })
      .catch((error) => {
        console.error("ERROR with fetch: ", error);
      });
  };

  return (
    <button
      className="flex bg-[#dbe9fe] w-[430px] h-[50px] items-center justify-center rounded-md"
      onClick={() => handleSaveChanges()}
    >
      <img src={save} className="h-[30px] mr-[8px]" />
      <div className="font-poppinsRegular text-[#1f54c5] text-[20px] ml-[8px]">
        Save Changes
      </div>
    </button>
  );
};

export default SaveChanges;

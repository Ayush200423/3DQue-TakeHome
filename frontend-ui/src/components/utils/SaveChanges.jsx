import React from "react";
import save from "../../assets/img/save.png";

const SaveChanges = () => {
  return (
    <button className="flex bg-[#dbe9fe] w-[430px] h-[50px] items-center justify-center rounded-md">
      <img src={save} className="h-[30px] mr-[8px]" />
      <div className="font-poppinsRegular text-[#1f54c5] text-[20px] ml-[8px]">
        Save Changes
      </div>
    </button>
  );
};

export default SaveChanges;

import React from "react";
import { Button } from "flowbite-react";
import edit from "../../assets/img/edit.png";

const Tags = () => {
  return (
    <div className="flex bg-[#f1f5f9] h-[55px] w-[240px] items-center justify-evenly rounded-md">
      <div>
        <Button color="purple" pill>
          <span className="font-poppinsSemiBold text-[19px]">Purple</span>
        </Button>
      </div>

      <div>
        <Button color="dark" pill>
          <span className="font-poppinsSemiBold text-[19px]">PLA</span>
        </Button>
      </div>

      <button>
        <img src={edit} className="h-[30px]" />
      </button>
    </div>
  );
};

export default Tags;

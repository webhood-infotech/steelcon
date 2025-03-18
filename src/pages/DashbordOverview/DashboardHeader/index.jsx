import React from "react";
import menu from "../../../assets/icon/menu.png";
const DashboardHeader = () => {
  return (
    <div className="container mx-auto">
      <div className="p-8 pb-0 flex flex-col gap-8">
        <div className="font-semibold text-3xl text-[#101828]">Dashboard</div>
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-lg">Overview</h4>
          <div className="">
            <img src={menu}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;

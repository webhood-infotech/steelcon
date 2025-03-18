import React from "react";

const OverviewCard = () => {
  const cardData = [
    {
      title: "Employees",
      value: "8.8k",
    },
    {
      title: "Managers",
      value: "500",
    },
    {
      title: "Average Employee Attendance",
      value: "46.2%",
    },
    {
      title: "Last Month Payout",
      value: "INR 48,00,000",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-5 border-t border-b mt-1">
      {/* Cards Grid */}
      <div className="grid grid-cols-4 ">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white rounded-lg  px-5 ">
            <div className="text-sm font-medium text-[#475467] mb-3">
              {card.title}
            </div>
            <div className="text-3xl font-semibold text-[#101828]">
              {card.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OverviewCard;

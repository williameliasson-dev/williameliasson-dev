import React from "react";

interface ArrowDownIconProps {}

const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-down"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};

export default ArrowDownIcon;

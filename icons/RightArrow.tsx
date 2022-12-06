import React from "react";

interface RightArrowProps {}

const RightArrow: React.FC<RightArrowProps> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-right"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
};

export default RightArrow;

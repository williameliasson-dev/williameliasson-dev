import React from "react";

interface ArrowDownCurveProps {}

const ArrowDownCurve: React.FC<ArrowDownCurveProps> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-corner-right-down"
    >
      <polyline points="10 15 15 20 20 15" />
      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
    </svg>
  );
};

export default ArrowDownCurve;

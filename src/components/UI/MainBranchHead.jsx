import React from "react";

const MainBranchHead = ({ text, className }) => {
  return (
    <div className={`${className}`}>
      <h3 className="py-2 px-4 text-xl bg-white text-mainColorLight">{text}</h3>
      <span className="inline-block h-[2px] bg-white w-full"></span>
    </div>
  );
};

export default MainBranchHead;

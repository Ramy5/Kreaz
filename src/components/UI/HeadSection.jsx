import React from "react";

const HeadSection = ({ title, className }) => {
  return (
    <h3
      className={`${className} mb-8 py-2 px-4 text-xl bg-mainColorLight text-white`}
    >
      {title}
    </h3>
  );
};

export default HeadSection;

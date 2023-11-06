import React from "react";

const loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="spinner">
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default loading;

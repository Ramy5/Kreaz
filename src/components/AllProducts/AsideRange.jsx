import { useState } from "react";

const AsideRange = ({ min, max, onChange }) => {
  const [value, setValue] = useState(min);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="range"
        name="range_price"
        id="range_price"
        min={min}
        max={max}
        value={value}
        step={20}
        onChange={handleChange}
        className="range-input"
      />
      <span className="">{value}</span>
    </div>
  );
};

export default AsideRange;

"use client";

import React from "react";
import { useFormikContext } from "formik";

const SaveDataCheckbox = ({ name, label }) => {
  const { values, setFieldValue } = useFormikContext();

  const handleChange = () => {
    setFieldValue(name, !values[name]);
  };

  return (
    <div className="self-start animate_from_left animation_delay-7">
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          name={name}
          checked={values[name]}
          onChange={handleChange}
          className="h-5 w-5"
        />
        <span className="text-lg text-white">{label}</span>
      </label>
    </div>
  );
};

export default SaveDataCheckbox;

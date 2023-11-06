"use client";

const Error = ({ error, reset }) => {
  return (
    <div className="m-auto mt-8 text-xl w-60 text-center">
      <h2>{error.message || "Something went wrong!"}</h2>
      <button
        className="text-white mt-4 bg-mainColorLight rounded-md py-2 px-4 border-none font-semibold"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default Error;

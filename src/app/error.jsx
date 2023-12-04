"use client";

const Error = ({ error, reset }) => {
  return (
    <div className="m-auto mt-8 text-xl w-96 text-center h-screen flex flex-col items-center justify-center ">
      <h2 className="text-4xl text-mainColorLight">
        {"Something went wrong!, please try again"}
      </h2>
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

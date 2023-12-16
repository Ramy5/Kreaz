"use client";

import { useCallback, useEffect, useState } from "react";

const Countdown = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const timeTody = new Date().getTime();
    const timeDiffrence = countDownTime - timeTody;

    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;

    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;

    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;

    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;

    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const customDate = new Date("Mon Nov 5 2023 23:00:00 GMT+0200"); // HERE IS THE VALUE FROM THE API OFFER
    // const countDownDate = new Date(
    //   customDate.getFullYear(),
    //   customDate.getMonth() + 1,
    //   customDate.getDate(),
    //   customDate.getHours(),
    //   customDate.getMinutes(),
    //   customDate.getSeconds()
    // );
    setInterval(() => {
      getTimeDifference(customDate.getTime());
    }, 1000);
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <div className="w-full mx-2 xl:w-auto">
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-16">
        <div className="flex justify-center gap-3 sm:gap-8">
          <div className="flex flex-col gap-3 relative">
            <div className="h-16 w-16 xl:w-25 xl:h-25 flex justify-center items-center bg-[#E17698]">
              <span className="lg:text-4xl sm:text-2xl text-xl font-semibold text-white">
                {countDownTime?.seconds}
              </span>
            </div>
            <span className="text-mainColorLight text-xl sm:text-2xl text-center capitalize">
              ثانية
            </span>
          </div>
          <div className="flex flex-col gap-3 relative">
            <div className="h-16 w-16 xl:w-25 xl:h-25 flex justify-center items-center bg-[#E17698]">
              <span className="lg:text-4xl sm:text-2xl text-xl font-semibold text-white">
                {countDownTime?.minutes}
              </span>
            </div>
            <span className="text-mainColorLight text-xl sm:text-2xl text-center capitalize">
              دقيقة
            </span>
          </div>
          <div className="flex flex-col gap-3 relative">
            <div className="h-16 w-16 xl:w-25 xl:h-25 flex justify-center items-center bg-[#E17698]">
              <span className="lg:text-4xl sm:text-2xl text-xl font-semibold text-white">
                {countDownTime?.hours}
              </span>
            </div>
            <span className="text-mainColorLight text-xl sm:text-2xl text-center font-medium">
              ساعة
            </span>
          </div>
          <div className="flex flex-col gap-3 relative">
            <div className="h-16 w-16 xl:w-25 xl:h-25 flex justify-center items-center bg-[#E17698]">
              <span className="lg:text-4xl sm:text-2xl text-xl font-semibold text-white">
                {countDownTime?.days}
              </span>
            </div>
            <span className="text-mainColorLight text-xl sm:text-2xl text-center capitalize">
              يوم
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

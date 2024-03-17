import React, { useState } from "react";

const Header = () => {
  const [isShowingHeader, setIsShowingHeader] = useState(false);

  return (
    <div className="w-[90%] my-7 max-w-[1600px] relative flex justify-between items-center mx-auto">
      <img src="./toas-logo.svg" alt="TOAS" />
      <img
        src="./eclispe.svg"
        className="absolute top-0 -z-10 w-[120px] right-[20%]"
        alt=""
      />
      <button
        onClick={() => setIsShowingHeader(true)}
        className="sm:hidden w-10"
      >
        <img src="./bars.svg" alt="bars" />
      </button>

      <div
        className={`sm:items-center flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-5 fixed sm:static top-0 right-0 bottom-0 bg-[#333] sm:bg-transparent z-50 max-w-[320px] w-full sm:w-auto sm:max-w-none transition-all duration-500 pt-[72px] sm:p-0 px-6 ${
          isShowingHeader
            ? "translate-x-0"
            : "translate-x-full sm:translate-x-0"
        }`}
      >
        <button
          className="absolute top-7 right-[5vw] w-10 sm:hidden"
          onClick={() => setIsShowingHeader(false)}
        >
          <img src="./x-mark.svg" alt="close" />
        </button>

        <div className="flex justify-center sm:justify-normal items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 flex-wrap sm:flex-nowrap">
          <a
            href="https://taos.gitbook.io/taos/"
            className="w-11 sm:w-[48px] h-11 sm:h-[48px] rounded-full bg-[#222325] flex justify-center items-center"
            target="_blank"
          >
            <img
              className="w-[21px] sm:w-[25px]"
              src="./gitbook.svg"
              alt="gitbook"
            />
          </a>

          <a href="https://twitter.com/TAOS_ERC20" target="_blank">
            <img
              src="./twitter.svg"
              alt="twitter"
              className="w-11 sm:w-[48px] h-11 sm:h-[48px]"
            />
          </a>
          <a href="https://t.me/Dextensor" target="_blank">
            <img
              src="./telegram.svg"
              alt="telegram"
              className="w-11 sm:w-[48px] h-11 sm:h-[48px]"
            />
          </a>
        </div>

        <div className="flex sm:flex-row flex-col gap-3 md:gap-4 lg:gap-5 items-center">
          <button className="sm:mt-0 mt-5 border-0 w-[40px] sm:w-[45px] bg-transparent">
            <img src="./menu-button.svg" className="w-full" alt="" />
          </button>
          <a href="https://app.uniswap.org/swap?outputCurrency=0xE94E8E29Bd3dB22917E83D019af7baBDF8b9adf6&chain=ethereum" target="_blank" className="sm:my-0 my-5 border-0 bg-transparent relative w-[100px] sm:w-[120px] flex justify-center items-center">
            <img
              src="./buy-button.svg"
              className="absolute -z-10 w-full"
              alt="buy now"
            />
            <span className="text-white uppercase text-sm">
              Buy Now
            </span>
          </a>
          <a href="https://swap.dextensor.ai/" target="_blank" className="sm:my-0 my-3 border-0 bg-transparent relative w-[120px] sm:w-[120px] flex justify-center items-center">
            <img
              src="./buy-button.svg"
              className="absolute -z-10 w-full"
              alt="Launch app"
            />
            <span className="text-white uppercase text-sm">
              LAUNCH APP
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";

const Involved = () => {
  return (
    <div className="relative w-full">
      <img
        src="./big_ellipse.svg"
        className="left-[10%] absolute -z-20 w-[220px] top-[40%]"
        alt=""
      />
      <div className="relative mx-auto min-h-[90vh] mt-0 md:mt-[500px] max-w-[1400px] w-[90%]">
        <h1 className="font_osake text-center text-white text-3xl sm:text-3xl md:text-5xl">
          Exchange cleverly, switch uniquely.
        </h1>

        <p className="text-lg sm:text-2xl text-center text-[#808080] mt-4">
          AI-powered access to decentralized finance
          {/* <strong className="text-white">how to build on TAOS</strong>. */}
        </p>
        <div className="w-full mt-[90px] flex justify-center">
          <button className="border-0 cursor-pointer bg-transparent px-6 py-0 relative h-[20px] flex justify-center items-center">
            <img
              src="./buy-button.svg"
              className="absolute -z-10 w-full "
              alt="telegram"
            />
            <a
              href="https://t.me/Dextensor"
              target="_blank"
              className="text-white uppercase text-sm sm:text-base"
            >
              Telegram
            </a>
          </button>
        </div>
      </div>

      <img
        src="./half_ellipse.png"
        className="right-[10%] absolute w-[220px] bottom-0"
        alt=""
      />
    </div>
  );
};

export default Involved;

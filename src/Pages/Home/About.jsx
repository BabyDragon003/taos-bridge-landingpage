import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-[90%] flex-wrap flex justify-between max-w-[1600px] my-[100px] mx-auto"
    >
      <div className=" w-full flex flex-col text-center mb-11">
        <strong className="text-white px-5 mb-2 text-3xl">CA</strong>
        <p
          className="break-words text-white text-base px-5 md:text-2xl font-sans"
         
        >
          0xE94E8E29Bd3dB22917E83D019af7baBDF8b9adf6
        </p>
      </div>
      <div className=" w-full flex justify-center text-center mb-11 md:mb-32">
        <a href="https://dexscreener.com/ethereum/0x117cc77874e4eb73e087e5639dafc5ebdc4ec7cb" target="_blank" className="border-0 text-white bg-transparent relative w-[100px] sm:w-[120px] flex justify-center items-center">
          <img
            src="./buy-button.svg"
            className="absolute -z-10 w-full"
            alt="Chart"
          />
            Chart
        </a>
      </div>
      <div className="w-full lg:w-[50%] flex flex-col">
        <h1 className="font_osake text-white text-4xl sm:text-4xl md:text-6xl">
          MULTICHAIN DEX AGGREGATOR
        </h1>

        <p className="text-lg text-white font-medium mt-4">
          $TAOS easily connects AMM pools, regardless of their providers, and
          smartly uncovers the best direct or multi-hop routes between any two
          tokens across different blockchains
        </p>

        <div className="mt-11">
          <div className="flex items-center gap-3">
            <div>
              <img className="object-contain" src="./bullet.svg" alt="" />
            </div>
            <span className="text-lg text-white font-semibold">
              Finds the most efficient direct or multi-hop pathways between any
              two tokens
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <img className="object-contain" src="./bullet.svg" alt="" />
            </div>
            <span className="text-lg text-white font-semibold">
              Works seamlessly on various blockchains to facilitate exchange
              operations
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <img className="object-contain" src="./bullet.svg" alt="" />
            </div>
            <span className="text-lg text-white font-semibold">
              Identifies the best route for transactions optimizing the user
              experience
            </span>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-7">
          <a href="https://swap.dextensor.ai/" target="_blank" className="border-0 bg-transparent relative w-[120px] sm:w-[150px] flex justify-center items-center">
            <img
              src="./buy-button.svg"
              className="absolute -z-10 w-full"
              alt="Launch app"
            />
            <span className="text-white uppercase text-sm sm:text-base">
              LAUNCH APP
            </span>
          </a>

          <button className="text-white uppercase text-sm sm:text-base">
            docs
          </button>
        </div>
      </div>

      <div className="w-full mt-11 lg:mt-0 lg:w-[50%]">
        <img src="./big_img.png" className="object-contain" alt="" />
      </div>
    </div>
  );
};

export default About;

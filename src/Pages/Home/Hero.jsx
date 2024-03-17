import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <img
        src="./line.svg"
        // className="absolute top-0 mx-auto left-[50%] translate-x-[-50%] w-[1600px]"
        className="absolute object-cover hidden lg:block top-[20px] h-[1600px] -z-[20] left-0 w-[1500px]"
        alt=""
      />

      <div className="w-[90%] max-w-[1600px] mt-11 md:mt-0 mx-auto relative">
        <div className="flex flex-col items-center gap-y-6">
          {/* <h1 className="font_sora text-white text-xl">INTRODUCING</h1> */}
          <h1 className="font_osake text-white text-5xl sm:text-6xl md:text-8xl">
            $TAOS
          </h1>
          <h1 className="font_osake text-white text-5xl sm:text-6xl md:text-8xl">
            Dextensor
          </h1>

          {/* <p className="font_sora text-white max-w-[800px] mx-auto text-center">
            TAOS delivers tamper-proof inputs, outputs, and computations to
            support advanced smart contracts on any blockchain
          </p> */}

          <img
            src="./img_center.svg"
            className="max-w-[150px] sm:max-w-[250px] lg:max-w-[400px] z-30 object-contain"
            alt=""
          />
         
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-11 lg:mt-0 lg:translate-y-[320px]">
          <Link
            to="about"
            className="relative flex cursor-pointer justify-center items-center w-[80px]"
          >
            <img src="./scroll_icon.svg" className="absolute -z-20" alt="" />
            <div className="up_down_animation w-[8px] h-[25px] rounded-full bg-white"></div>
          </Link>
          <h1 className="text-white font-bold translate-y-[40px]">
            SCROLL TO EXPLORE
          </h1>
        </div>
        <img
          src="./img_left.svg"
          className="object-contain absolute w-[50px] lg:w-[70px] xl:w-[100px] left-[10px] lg:left-[220px] top-[55%] lg:top-[45%]"
          alt=""
        />
        <img
          src="./img_right.svg"
          className="object-contain absolute w-[80px] lg:w-[120px] xl:w-[200px] right-[10px] lg:right-[100px] top-[55%] lg:top-[45%]"
          alt=""
        />
        <img
          src="./img_smile.svg"
          className="object-contain absolute w-[80px] lg:w-[110px] xl:w-[160px] left-[10px] lg:left-[100px] bottom-[15%]"
          alt=""
        />
        <img
          src="./img_eye.svg"
          className="object-contain absolute w-[80px] lg:w-[110px] xl:w-[160px] right-[10px] lg:right-[100px] bottom-[-5%]"
          alt=""
        />
      </div>
      
    </>
  );
};

export default Hero;

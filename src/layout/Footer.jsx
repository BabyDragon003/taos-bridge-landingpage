import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#101010]">
      <div className="w-[90%] py-11 max-w-[1600px] mx-auto">
        <div className="flex w-full justify-between gap-y-6 gap-x-3 flex-wrap">
          <img src="./toas-logo.svg" alt="" />
          <div className="flex items-center flex-wrap gap-5">
            <span className="text-base text-white">Community</span>
            <span className="text-base text-white">Technology</span>
            <span className="text-base text-white">Funding</span>
            <span className="text-base text-white">About us</span>
            <span className="text-base text-white">Blog</span>
            <span className="text-base text-white">Careers</span>
            <span className="text-base text-white">Contact</span>
          </div>
        </div>
        <div className="w-full gap-5 mt-[80px] flex-wrap flex justify-center items-center">
          <span className="text-base text-[#5E6B7E]">
            © 2024 TAOS Systems. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

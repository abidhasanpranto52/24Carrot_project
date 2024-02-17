/* eslint-disable no-unused-vars */
import React from "react";
import Bannerbg from '../../../../public/24carrtos-home-banner.mp4'

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      // style={{
      //   backgroundImage:
      //     "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      // }}
    >
    <video className=" " src={Bannerbg} autoPlay loop muted></video>
      <div className="hero-overlay bg-opacity-30">
      </div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-5 text-9xl font-medium font-serif">Simply the Finest</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;

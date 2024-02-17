// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./About.css";

// import required modules
import { EffectCreative } from "swiper/modules";

const About = () => {
  return (
    <div className="grid grid-cols-2  py-9 mx-auto justify-between content-center bg-[#E9E4E0] gap-10">
      <div className="justify-center content-center items-center text-center w-[70%] m-auto">
        <div>
          <h5 className="uppercase font-semibold my-2">
            Welcome To 24 Carrots
          </h5>
          <h1 className="text-7xl font-serif my-2">
            Remarkable Catering & Events
          </h1>
          <p className="text-xl font-sans">
            24 Carrots is the premier catering and events company of choice in
            Southern California. We create remarkable experiences by offering
            the finest quality foods and providing unsurpassed personalized
            service, driven by our passion for life’s special occasions.
          </p>
          <button className="btn btn-xs sm:btn-sm md:btn-md rounded-full bg-red-500 my-5 uppercase font-bold">
            Get in touch
          </button>
        </div>
      </div>

      <div className="">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;

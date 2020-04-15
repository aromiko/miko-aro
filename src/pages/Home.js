import Bonfire from "../assets/images/bonfire.jpg";
import Crossing from "../assets/images/crossing2.jpg";
import Daraitan from "../assets/images/daraitan.jpeg";
import Port from "../assets/images/port.jpeg";
import ProfilePicture from "../assets/images/face.jpg";
import React from "react";
import Sunset from "../assets/images/sunset.jpeg";
import Venice from "../assets/images/venice.jpg";
import Windmill from "../assets/images/windmill.jpg";

const Home = () => {
  return (
    <div className="px-6 xl:px-60">
      <div className="flex flex-col">
        <div className="text-3xl py-20 lg:py-40 lg:order-1 order-2">
          I'm Miko, a web developer with a focus on front end development, user
          experience and design. Discover more about my life here.
        </div>
        <div className="lg:order-2 order-1 pt-20 lg:p-0">
          <img
            src={Windmill}
            alt="windmill"
            className="object-cover h-64 md:h-full w-full"
          />
        </div>
      </div>
      {/* <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 p-6">
          <img
            src={Bonfire}
            alt="bonfire"
            className="object-cover h-64 md:h-104 w-full"
          />
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <img
            src={Crossing}
            alt="crossing"
            className="object-cover h-64 md:h-104 w-full"
          />
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <img
            src={Daraitan}
            alt="daraitan"
            className="object-cover h-64 md:h-104 w-full"
          />
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <img
            src={Port}
            alt="port"
            className="object-cover h-64 md:h-104 w-full"
          />
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <img
            src={Sunset}
            alt="sunset"
            className="object-cover h-64 md:h-104 w-full"
          />
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <img
            src={Venice}
            alt="venice"
            className="object-cover h-64 md:h-104 w-full"
          />
        </div>
      </div> */}
    </div>
  );
};
export default Home;

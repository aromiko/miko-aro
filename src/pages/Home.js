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
    <div className="px-6 lg:px-50">
      <div className="text-3xl py-20 md:py-40">
        I'm Miko, a front end developer with a focus on front end development,
        user experience and design. Discover more about my life here.
      </div>
      <div>
        <img src={Windmill} alt="profile" />
      </div>
      {/* <div className="flex items-center flex-col md:flex-row p-6 justify-between">
        <div className="md:order-1 order-2 text-center md:text-left md:pr-6">
          <h2 className="font-bold">Hi! I'm Miko</h2>
          <p className="pb-6">Web Developer</p>
          <p>
            I'm a web developer from Philippines with a focus in front end
            development and design.
          </p>
        </div>
        <div className="md:order-2 order-1">
          <img
            src={ProfilePicture}
            alt="profile"
            className="rounded-full w-50"
          />
        </div>
      </div> */}
      <div className="flex flex-wrap">
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
      </div>
    </div>
  );
};
export default Home;

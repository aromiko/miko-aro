import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

const Footer = () => {
  const navbarToggle = useSelector((state) => state.navbarToggle);
  const [footerToggle, setFooterToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.body.offsetHeight - 10
      ) {
        setFooterToggle(true);
      } else {
        setFooterToggle(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const getCurrentYear = new Date().getFullYear();
  return (
    <div
      className={`flex flex-col justify-center items-center fixed w-full p-6 z-50 transition-all ease-in-out duration-400 ${
        footerToggle === false || navbarToggle === true
          ? "-bottom-24 opacity-0"
          : "bottom-0 opacity-1"
      }`}
    >
      <div>
        <a href="mailto:contact@miko-aro.com">contact@miko-aro.com</a>
      </div>
      <div>© {getCurrentYear}</div>
    </div>
  );
};

export default Footer;

import { useDispatch, useSelector } from "react-redux";

import { NavbarToggle } from "../ducks/Actions";
import React from "react";

const Navbar = () => {
  const navbarToggle = useSelector(state => state.navbarToggle);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center fixed w-full p-6 z-50">
      <h2
        className={`font-bold transition ease-in-out duration-500 ${
          navbarToggle === true ? "text-black" : ""
        }`}
      >
        miko aro
      </h2>
      <button
        className={`flex items-center rounded-full font-bold p-3 transition ease-in-out duration-500 ${
          navbarToggle === true
            ? "text-black hover:bg-grayTransparent-500"
            : "hover:bg-grayTransparent-300"
        }`}
        onClick={() => dispatch(NavbarToggle(!navbarToggle))}
      >
        <span className="material-icons">
          {navbarToggle === true ? "close" : "menu"}
        </span>
      </button>
    </div>
  );
};

export default Navbar;

import { NAVBAR_TOGGLE } from "./Types";

export const NavbarToggle = navbarToggle => {
  return {
    type: NAVBAR_TOGGLE,
    payload: { navbarToggle }
  };
};

import { NAVBAR_TOGGLE } from "./Types";

const initialState = [{ navbarToggle: false }];

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case NAVBAR_TOGGLE:
      return (state = action.payload);
    default:
      return state;
  }
};

export default Reducers;

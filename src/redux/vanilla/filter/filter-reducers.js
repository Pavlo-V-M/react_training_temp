import { SET_FILTER } from "./filter-types";

const initialState ="";

const filterReducer = (state = initialState, action) => {
  // action can be restructured in {type, payload}
  switch (action.type) {
    case SET_FILTER:
      console.log("🛠 SET_FILTER: Changing filter to", action.payload);
    // return { ...state, filter: action.payload, }; // Directly set the payload (true/false/"")
      return action.payload; // Directly set the payload (true/false/"")
    default:
      return state;
  };
};

export default filterReducer;
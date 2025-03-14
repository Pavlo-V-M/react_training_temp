import { combineReducers } from "redux";

import usersReucer from "./users/users-reducers";
import filterReucer from "./filter/filter-reducers";

const rootReducer = combineReducers({
  users: usersReucer,
  filter: filterReucer,
});

export default rootReducer;


// import { ADD_USER, DELETE_USER, UPDATE_USER } from "./users/users-types";
// import { SET_FILTER } from "./filter/filter-types";
// // { ADD_USER, DELETE_USER, UPDATE_USER } variables are imported from types.js, 
// // so it is without double quotes;

// const initialState = {
//   users: [
//     { 
//       id: "gKyg_rr3_FNrbmmxvyhWu",
//       name: "Zeus",
//       descript: "Olympic God. Son of the titan Kronos and the titanide Rhea.",
//       enabled: false,
//     },
//     {
//       id: "rNTSxPh6qKgYl11Rk3drB",
//       name: "Jacques Gluke",
//       descript: "Some One Dude",
//       enabled: false,
//     },
//     { 
//       id: "CCgDl71UFjuxE2tJLi7FL",
//       name: "Keylock Eeighttenten",
//       descript: "A mysterious character.",
//       enabled: false,
//     },
//     { 
//       id: "GUL-Ie5oU8ZxxCR7698zd",
//       name: "Hercules",
//       descript: "The one who constantly stepped on the rake.",
//       enabled: false,
//     },
//   ],
//   filter: "",
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
    
//     case "SET_USERS": //  when fetching users from an API.
//       return {...state, users: action.payload};
    
//     case ADD_USER:
//       return {...state, users: [...state.users, action.payload]};
    
//     case DELETE_USER:
//       return {
//         ...state,
//         users: state.users.filter(user => user.id !== action.payload)
//       };
    
//     case UPDATE_USER:
//       return {
//         ...state,
//         users: state.users.map(user => user.id === action.payload.id
//           ? action.payload : user)
//       };

//     case SET_FILTER:
//       console.log("🛠 SET_FILTER: Changing filter to", action.payload);
//       return {
//         ...state, 
//         filter: action.payload, // Directly set the payload (true/false/"")
//       };
    
//     default:
//       return state;
//   };
// };

// export default rootReducer;

// // another way of case expressing
// // case "ADD_USER":
// //   const newUsers = [...state.users, action.payload]
// //   return { ...state, users: newUsers };
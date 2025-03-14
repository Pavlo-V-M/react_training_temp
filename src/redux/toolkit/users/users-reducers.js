import { createReducer } from '@reduxjs/toolkit';
import { addUser, updateUser, deleteUser } from "./users-actions";

const initialState = [
  {
    id: "gKyg_rr3_FNrbmmxvyhWu",
    name: "Zeus",
    descript: "Olympic God. Son of the titan Kronos and the titanide Rhea.",
    enabled: false,
  },
  {
    id: "rNTSxPh6qKgYl11Rk3drB",
    name: "Jacques Gluke",
    descript: "Some One Dude",
    enabled: false,
  },
  {
    id: "CCgDl71UFjuxE2tJLi7FL",
    name: "Keylock Eeighttenten",
    descript: "A mysterious character.",
    enabled: false,
  },
  {
    id: "GUL-Ie5oU8ZxxCR7698zd",
    name: "Hercules",
    descript: "The one who constantly stepped on the rake.",
    enabled: false,
  },
];

const usersReducer = createReducer(initialState, builder => {
  builder.addCase(addUser, (state, { payload }) => {
    state.push(payload); // що відповідає: return [... state, payload];
  })
  .addCase(updateUser, (state, { payload }) => { 
    return state.map(user => user.id === payload.id ? payload : user);
  })
  .addCase(deleteUser, (state, { payload }) => {
    return state.filter(item => item.id !== payload);
  })
});

export default usersReducer;

// const initialState = [
//   {
//     id: "gKyg_rr3_FNrbmmxvyhWu",
//     name: "Zeus",
//     descript: "Olympic God. Son of the titan Kronos and the titanide Rhea.",
//     enabled: false,
//   },
//   {
//     id: "rNTSxPh6qKgYl11Rk3drB",
//     name: "Jacques Gluke",
//     descript: "Some One Dude",
//     enabled: false,
//   },
//   {
//     id: "CCgDl71UFjuxE2tJLi7FL",
//     name: "Keylock Eeighttenten",
//     descript: "A mysterious character.",
//     enabled: false,
//   },
//   {
//     id: "GUL-Ie5oU8ZxxCR7698zd",
//     name: "Hercules",
//     descript: "The one who constantly stepped on the rake.",
//     enabled: false,
//   },
// ];

// const usersReducer = (state = initialState, action) => {
//   switch (action.type) {
    
//     case "SET_USERS": //  when fetching users from an API.
//       // return { ...state, users: action.payload };
//       return action.payload;
    
//     case ADD_USER:
//     // return {...state, users: [...state.users, action.payload]};
//       return [...state, action.payload];
    
//     case DELETE_USER:
//     // return { ...state, users: state.users.filter(user => user.id !== action.payload)};
//       return state.filter(item => item.id !== action.payload);
    
//     case UPDATE_USER:
//     // return { ...state, users: state.users.map(user => user.id === action.payload.id ? action.payload : user)};
//       return state.map(user => user.id === action.payload.id ? action.payload : user);
    
//     default:
//       return state;
//   };
// };

// export default usersReducer;

// another way of case expressing
// case "ADD_USER":
//   const newUsers = [...state.users, action.payload]
//   return { ...state, users: newUsers };
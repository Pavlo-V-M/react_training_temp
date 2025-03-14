import { ADD_USER, DELETE_USER, UPDATE_USER } from "./users-types";
import { nanoid } from "nanoid";

export const setUsers = (users) => ({
  type: "SET_USERS",
  payload: users,
});

// export const addUser = (user) => ({
//   type: "ADD_USER",
//   payload: user,
// });
// another way of actions expressing
export const addUser = payload => {
  return {
    type: ADD_USER,
    payload: {
      id: nanoid(),
      ...payload
    },
  }
};

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});

export const updateUser = (updatedUser) => ({
  type: UPDATE_USER,
  payload: updatedUser, // This should be the full updated user object
});

// const newUser = {
//   id: "abc123", name: "John Doe", description: "A test user", enabled: false
// };
// console.log(addUser(newUser));

// In work, you can define the value of the type key in the actions.js file in different ways:
// For example, put it in a separate types.js file:
// export const ADD_USER = "ADD_USER"; or export const ADD_USER = "user/add";
// Both cases are imported the same way in actions.js & reducers.js:
// import { ADD_USER } from "./types";
// export const addUser = (payload) => ({
// type: ADD_USER, // Uses the constant instead of a string
// payload,
// });
// Both versions work, but "user/add" is often better for organization in larger apps.
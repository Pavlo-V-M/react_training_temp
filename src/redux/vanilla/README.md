How it work ? 🛠️ Think of it as a Factory:

Actions bring the raw material (data).

Reducers process the material into a final product (new state).

Store holds the final product and updates it as needed.

---

# ACTIONS - bring the raw material (data).

## export const addUser = (user) => ({type: "ADD_USER", payload: user,})

In this expression:

- Arrow function declaretion with implicit return and with a parameter (user);
- When this function is called, the parameter will receive an argument;
- Implicit return creates an object;
- Type & payload is a keys in the object & user is the value assigned to the payload key;
- Payload is a dynamic parameter that is associated with the data flow;
- Type is a static parameter that conditionally provides the ability to determine what action to take with the received data;

## Calling actions functions:

### directly in the actions.js, reducer.js, or index.js files for debugging :

const newUser = {
id: "abc123", name: "John Doe", description: "A test user", enabled: false
};
console.log(addUser(newUser));

### Inside a React component using a hook useDispatch() for updating Redux state:

import { useDispatch } from "react-redux";
const dispatch = useDispatch();
dispatch(addUser({ id: "xyz456", name: "New User", description: "Test", enabled: true }));

The next two action expressions are one and the same. The difference is in how the dynamic payload parameter for the function is defined:

## export const addUser = user => {return { type: "ADD_USER", payload: user,}};

## export const addUser = payload => {return { type: "ADD_USER", payload,}};

---

# REDUCERS - process the material into a final product (new state)

## A reducer is always a pure function that has this basic structure:

- Takes the current STATE and an ACTION as inputs parameters;
- Processes the ACTION based on its type;
- Returns the new STATE;

const initialState = {
users: [], // The starting state (can be empty or preloaded data)
};

const rootReducer = (state = initialState, action) => {
switch (action.type) {
case "ADD_USER":
return {
...state,
users: [...state.users, action.payload],
};

    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      };

    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    default:
      return state; // Always return the current state if no action matches

}
};

export default rootReducer;

## How Reducers Work Step by Step

### 1️⃣ Works together with a hook useDispatch();

import { useDispatch } from "react-redux";
const dispatch = useDispatch();
dispatch(addUser({ id: "xyz456", name: "New User", description: "Test", enabled: true }));

- The store dispatches an action.
  ✅ This sends an action object to the reducer:
  dispatch(addUser({ id: "abc123", name: "John Doe", description: "Test", enabled: false }));
  { type: "ADD_USER",
  payload: { id: "abc123", name: "John Doe", description: "Test", enabled: false }
  }

### 2️⃣ The reducer processes the action;

- When ADD_USER is dispatched:
  🔹 The reducer checks the action's type:
  case "ADD_USER":
  return { ...state, users: [...state.users, action.payload] };
  ✅ It takes the existing users array and adds the new user to it.

### 3️⃣ The store updates with new state

✔ Redux automatically updates the store with the new state.
✔ Any component that uses this state will automatically re-render.

### Reducers Must Follow These Rules

1️⃣ They must be pure functions (no API calls, no modifying external variables).
2️⃣ They must return a new state (never mutate the existing state).
3️⃣ They must handle the default case (default: return state to avoid errors).

### 💡 Final Summary of REDUCER:

✅ useDispatch() sends actions to the reducer.
✅ dispatch(actionFunction(data)) → Dispatch takes an action function that returns an action object.
✅ The reducer updates the store based on the action’s type.
✅ Redux automatically updates React components when the store changes.

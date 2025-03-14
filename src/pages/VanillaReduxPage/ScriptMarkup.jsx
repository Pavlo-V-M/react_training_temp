import DefMarkup from "../../shared/components/DefMarkup/DefMarkup";
import CodeAreaComponent from "../../shared/components/CodeArea/CodeAreaComponent";

const ScriptMarkup = () => {
  // const initialCode = "export const addUser = (user) => ({ type: ADD_USER, payload: user });";
  return (
    <>
      <DefMarkup // <h2> tag here
        text = "When you use Vanilla Redax"
      />
      <div>
        <ul style={{ borderBottom: "2px solid #123b7d" }}>
          <li>
            <p>Redux works in tandem with React-Redux.</p>
            <p>The first creates a global data store, and the second provides access to receive and process them.</p>
          </li>
          <li>
            <p>Most likely, you are loading a heavy and large tool for 5% maximum of its capabilities.</p>
          </li>
          <li>
            <p>You are limited to the location of Provider and Store.</p>
            <p>They should only be at the top level of the application.</p>
          </li>
          <li>
            <p>You have to organize Stor, Reducers, Actions separately.</p>
          </li>
          <li>
            <p>You have a data flow from a single source of truth.</p>
          </li>
          <li>
            <p>You have a convenient tool for selecting the necessary data slice from the state.</p>
          </li>
          <li>
            <p>You can connect a component of any nesting, without exhausting propі-drilling.</p>
          </li>
        </ul>
        <h2>How it work ?</h2>
        <ul style={{ borderBottom: "2px solid #123b7d" }}>
          <li>🛠️ Think of it as a Factory:
            <p> 📦 ACTIONS bring the raw material (data).</p>
            <p> ⚙️ REDUCERS process the material into a final product (new state) 🗂️.</p>
            <p> 🗄️ STORE holds the final product and updates it as needed 🗃️.</p>
          </li>
          <li style={{ marginBottom: "10px" }}> # ACTIONS - bring the raw material (data).
            <CodeAreaComponent
              nestedСode="export const addUser = (user) => ({ type: 'ADD_USER', payload: user });"
            />
            <p>In this expression:</p>
            <p>- Arrow function declaretion with implicit return and with a parameter (user);</p>
            <p>- When this function is called, the parameter will receive an argument;</p>
            <p>- Implicit return creates an object;</p>
            <p>- Type & payload is a keys in the object & user is the value assigned to the payload key;</p>
            <p>- Payload is a dynamic parameter that is associated with the data flow;</p>
            <p>- Type is a static parameter that conditionally provides the ability to determine what action to take with the received data;</p>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <p>Calling actions functions:</p>
            <p>Directly in the actions.js, reducer.js, or index.js files for debugging :</p>
            <CodeAreaComponent
              nestedСode="const newUser = {
              id: 'abc123', 
              name: 'John Doe', 
              description: 'A test user', 
              enabled: false}; 
              console.log(addUser(newUser));"
            />
            <p>Inside a React component using a hook useDispatch() for updating Redux state:</p>
            <CodeAreaComponent
              nestedСode="import { useDispatch } from 'react-redux';
              const dispatch = useDispatch();
              dispatch(addUser({ 
              id: 'xyz456', 
              name: 'New User', 
              description: 'Test', 
              enabled: true }));"
            />
          </li>
          <li style={{ marginBottom: "10px" }}>
            <p>The next two action expressions are one and the same. The difference is in how the dynamic payload parameter for the function is defined:</p>
            <CodeAreaComponent
              nestedСode="export const addUser = user => {return { type: 'ADD_USER', payload: user,}};"
            />
            <CodeAreaComponent
              nestedСode="export const addUser = payload => {return { type: 'ADD_USER', payload,}};"
            />
          </li>
          <li style={{ marginBottom: "10px" }}># REDUCERS - process the material into a final product (new state).
            <p>A reducer is always a pure function that has this basic structure:</p>
            <p>- Takes the current STATE and an ACTION as inputs parameters;</p>
            <p>- Processes the ACTION based on its type;</p>
            <p>- Returns the new STATE;</p>
            <CodeAreaComponent
              nestedСode=" // The starting state (can be empty or preloaded data)
              const initialState = { users: [], };
              const rootReducer = (state = initialState, action) => { switch (action.type) {
                case 'ADD_USER':
                  return { ...state, users: [...state.users, action.payload],};

                case 'DELETE_USER':
                  return { ...state,
                    users: state.users.filter(user => user.id !== action.payload),
                  };

                case 'UPDATE_USER': 
                  return { ...state, users: state.users.map(user =>
                    user.id === action.payload.id ? action.payload : user),
                  };

                default: return state; // Always return the current state if no action matches
              }};

              export default rootReducer;"
            />
          </li>
          <li>How Reducers Work Step by Step
            <p>1️⃣ Works together with a hook useDispatch();</p>
            <CodeAreaComponent
              nestedСode="import { useDispatch } from 'react-redux';
              const dispatch = useDispatch();
              dispatch(addUser({ id: 'xyz456', name: 'New User', description: 'Test', enabled: true }));"
            />
            <p>The store dispatches an action. This sends an action object to the reducer:</p>
            <CodeAreaComponent
              nestedСode="dispatch(addUser({ id: 'abc123', name: 'John Doe', description: 'Test', enabled: false }));
              { type: 'ADD_USER',
              payload: { id: 'abc123', name: 'John Doe', description: 'Test', enabled: false }}"
            />
            <p>2️⃣ The reducer processes the action</p>
            <p>When ADD_USER is dispatched - the reducer checks the action's type:</p>
            <CodeAreaComponent
              nestedСode="case 'ADD_USER':
              return { ...state, users: [...state.users, action.payload] };"/>
            <p>✅ It takes the existing users array and adds the new user to it.</p>
            <p>3️⃣ The store updates with new state</p>
          </li>
          <li>Reducers Must Follow These Rules
            <p>They must be pure functions (no API calls, no modifying external variables).</p>
            <p>They must return a new state (never mutate the existing state).</p>
            <p>They must handle the default case (default: return state to avoid errors).</p>
          </li>
          <li>Final Summary of REDUCER:
            <p>useDispatch() sends actions to the reducer.</p>
            <p>dispatch(actionFunction(data)) → Dispatch takes an action function that returns an action object.</p>
            <p>The reducer updates the store based on the action’s type.</p>
            <p>Redux automatically updates React components when the store changes.</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ScriptMarkup;
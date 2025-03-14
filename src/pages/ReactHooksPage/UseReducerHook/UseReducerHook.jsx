import { useReducer } from 'react';
import DefMarkup from "../../../shared/components/DefMarkup/DefMarkup"

const UseReducerHook = () => {

  function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  else if (action.type === 'dicremented_age') {
    return {
      age: state.age - 1
    };
  }
  throw Error('Unknown action.');
  }

  const [state, dispatch] = useReducer(reducer, { age: 1 });
  
  return (
    <div>
      <DefMarkup
        text="hook {useReducer}"
      />
      <ul>
        <li>
          <p>You don't need to use Redux additionally.</p>
        </li>
        <li>
          <p>Just import hook useReducer from 'react' ...</p>
        </li>
        <li>
          <p>It lets you move the state update logic from event handlers into a single function outside of your component. So, if necessary, for convenience, you can move the logic of actions to a separate file.</p>
        </li>
        <li>
          <p>Define the main actions. Organize them using switch - case. Pass the case type to dispatch.</p>
        </li>
        <li>
          <p>For a more detailed guide with examples, see the link: https://react.dev/reference/react/useReducer</p>
        </li>
      </ul>
      
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <button
        onClick={() => {dispatch({ type: 'dicremented_age' })}}
        style={{ width: "79px", height: "40px" }}
        >Dicrement age
        </button>

        <p>Hello! You are = {state.age}</p>

        <button
          onClick={() => {dispatch({ type: 'incremented_age' })}}
          style={{ width: "79px", height: "40px" }}
        >Increment age
        </button>
      </div>
    </div>
  )
}

export default UseReducerHook;
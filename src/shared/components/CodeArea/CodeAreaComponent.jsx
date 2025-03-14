import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const CodeAreaComponent = ({ nestedСode }) => {

  // const [value, setValue] = React.useState("export const addUser = (user) => ({type: ADD_USER, payload: user,})/};");
  const [value, setValue] = React.useState(nestedСode || ""); // Default to empty string if no code is passed

  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', val);
    setValue(val);
  }, []);

  return (
    <CodeMirror 
      value={value} 
      // height="100px"
      // extensions={[javascript({ jsx: true })]}
      extensions={[javascript()]}
      onChange={onChange} 
    />
  );
};

export default CodeAreaComponent;
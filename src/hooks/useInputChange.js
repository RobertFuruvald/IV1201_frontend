import {useState} from "react";

// Custom hook to handle input changes
function useInputChange(initialState) {
  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
}
export default useInputChange;

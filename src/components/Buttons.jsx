import React from "react";
import { useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "../redux/actions";
function Buttons() {
  console.log(incrementCount);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(incrementCount())}>+</button>
      <button onClick={()=>dispatch(decrementCount())}>-</button>
    </div>
  );
}

export default Buttons;

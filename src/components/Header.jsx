import React from "react";
import { useSelector } from "react-redux";
function Header() {
  const { count } = useSelector((state) => state.counter);
  console.log(count);
  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
}

export default Header;

import React from "react";
import { Wrapper } from "./style.js";
import { useSelector, useDispatch } from "react-redux";

export default function Toggle(props) {
  const darkMode = useSelector((state) => state.UI.darkMode);
  const dispatch = useDispatch();

  function handleToggleDarkMode(event) {
    event.preventDefault();
    dispatch({ type: "TOGGLE_THEME" });
  }

  return <Wrapper onClick={handleToggleDarkMode} darkMode={darkMode}></Wrapper>;
}

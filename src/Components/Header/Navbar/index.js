import React from "react";
import { Wrapper } from "./style.js";
import { useDispatch } from "react-redux";

export default function Navbar(props) {
  const dispatch = useDispatch();

  function handleChangeLocaleEn(event) {
    event.preventDefault();
    dispatch({ type: "CHANGE_LOCALE_TO_ENG" });
  }

  function handleChangeLocaleFr(event) {
    event.preventDefault();
    dispatch({ type: "CHANGE_LOCALE_TO_FR" });
  }

  function handleToggleTheme(event) {
    event.preventDefault();
    dispatch({ type: "TOGGLE_THEME" });
  }
  return (
    <Wrapper>
      <div>
        <button onClick={handleChangeLocaleEn}>En</button>
        <button onClick={handleChangeLocaleFr}>Fr</button>
        <button onClick={handleToggleTheme}>Switch</button>
      </div>
    </Wrapper>
  );
}

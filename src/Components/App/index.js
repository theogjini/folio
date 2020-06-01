import React from "react";
import { Body } from "./style.js";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const locale = useSelector((state) => state.UI.locale);

  const isDarkMode = useSelector((state) => state.UI.darkMode);

  console.log(isDarkMode);

  const title = useSelector((state) => {
    console.log(state.content[locale].general.title);
    return state.content[locale].general.title;
  });

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
    <Body darkMode={isDarkMode}>
      {title}
      <div>
        <button onClick={handleChangeLocaleEn}>En</button>
        <button onClick={handleChangeLocaleFr}>Fr</button>
        <button onClick={handleToggleTheme}>Switch</button>
      </div>
    </Body>
  );
}

import React, { useState } from "react";
import { Wrapper, Title, Menu, LeftSide, MenuElement } from "./style.js";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar(props) {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.UI.locale);
  const isDarkMode = useSelector((state) => state.UI.darkMode);

  const [selected, setSelected] = useState("Home");

  const menu = useSelector((state) => {
    return state.content[locale].general.menu;
  });

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

  function handleSelect(event, item) {
    event.preventDefault();
    setSelected(item);
  }

  return (
    <Wrapper darkMode={isDarkMode}>
      <LeftSide>
        <Title darkMode={isDarkMode}>Théo Gjini</Title>
        <Menu>
          {menu.map((item) => {
            const active = item === selected;
            return (
              <MenuElement
                key={item}
                onClick={(event) => handleSelect(event, item)}
                active={active}
              >
                {item}
              </MenuElement>
            );
          })}
        </Menu>
      </LeftSide>
      <div>
        <button onClick={handleChangeLocaleEn}>En</button>
        <button onClick={handleChangeLocaleFr}>Fr</button>
        <button onClick={handleToggleTheme}>Switch</button>
      </div>
    </Wrapper>
  );
}

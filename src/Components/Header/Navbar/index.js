import React, { useState } from "react";
import { Wrapper, Title, Menu, LeftSide, MenuElement } from "./style.js";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Toggle from "./Toggle";

export default function Navbar(props) {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.UI.locale);
  const isDarkMode = useSelector((state) => state.UI.darkMode);
  const history = useHistory();

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

  function handleNavigate(event, item) {
    event.preventDefault();
    if (item === "Moi" || item === "Me") {
      history.push("/me");
      setSelected("me");
    }
    if (item === "Projects" || item === "Projets") {
      history.push("/projects");
      setSelected("projects");
    }
  }

  function handleGoHome(event) {
    event.preventDefault();
    history.push("/");
    setSelected("home");
  }

  return (
    <Wrapper darkMode={isDarkMode}>
      <LeftSide>
        <Title darkMode={isDarkMode} onClick={handleGoHome}>
          Théo Gjini
        </Title>
        <Menu>
          {menu.map((item) => {
            const matchingRoute =
              item === "Moi" || item === "Me" ? "me" : "projects";
            const active = matchingRoute === selected;
            return (
              <MenuElement
                key={item}
                onClick={(event) => handleNavigate(event, item)}
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
        <Toggle onClick={handleToggleTheme}>Switch</Toggle>
      </div>
    </Wrapper>
  );
}

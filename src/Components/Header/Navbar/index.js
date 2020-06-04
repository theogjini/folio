import React, { useState } from "react";
import {
  Wrapper,
  Title,
  Menu,
  LeftSide,
  MenuElement,
  RightSide,
  Button,
} from "./style.js";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Toggle from "./Toggle";
import useInterval from "use-interval";

export default function Navbar(props) {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.UI.locale);
  const isDarkMode = useSelector((state) => state.UI.darkMode);
  const history = useHistory();

  const initialPath = history.location.pathname.split("/")[1];

  const [path, setPath] = useState(initialPath);
  const [value, setValue] = useState();
  const shadowValue = () => {
    const values = [15, 4, 25];
    const random = Math.floor(Math.random() * values.length);
    setValue(values[random]);
  };
  useInterval(shadowValue, 1000);

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
      setPath("me");
    }
    if (item === "Projects" || item === "Projets") {
      history.push("/projects");
      setPath("projects");
    }
  }

  function handleGoHome(event) {
    event.preventDefault();
    history.push("/");
    setPath("home");
  }

  return (
    <Wrapper darkMode={isDarkMode}>
      <LeftSide>
        <Title darkMode={isDarkMode} onClick={handleGoHome} value={value}>
          THEO GJINI
        </Title>
        <Menu>
          {menu.map((item) => {
            const matchingRoute =
              item === "Moi" || item === "Me" ? "me" : "projects";
            const active = matchingRoute === path;
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
      <RightSide>
        <Button onClick={handleChangeLocaleEn} active={locale === "en"}>
          En
        </Button>
        <Button onClick={handleChangeLocaleFr} active={locale === "fr"}>
          Fr
        </Button>
        <Toggle onClick={handleToggleTheme}>Switch</Toggle>
      </RightSide>
    </Wrapper>
  );
}

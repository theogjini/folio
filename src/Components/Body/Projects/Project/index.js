import React from "react";
import { Wrapper, Plus, Details } from "./style.js";
import { useSelector } from "react-redux";

export default function Project(props) {
  const darkMode = useSelector((state) => state.UI.darkMode);
  // description, stack, lien, image
  const { idx, title, description, open, handleOpen } = props;

  const even = idx % 2 === 0;

  function handleOpenDetails(event, idx) {
    event.preventDefault();
    handleOpen(event, idx);
  }
  return (
    <Wrapper even={even} darkMode={darkMode}>
      <Plus
        onClick={(event) => handleOpenDetails(event, idx)}
        even={even}
        darkMode={darkMode}
      >
        "{title}"
      </Plus>
      <Details open={open} even={even}>
        <p>{description}</p>
      </Details>
    </Wrapper>
  );
}

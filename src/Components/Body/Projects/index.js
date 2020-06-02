import React, { useState } from "react";
import { Wrapper } from "./style.js";
import { useSelector } from "react-redux";
import Project from "./Project";

export default function App(props) {
  const locale = useSelector((state) => state.UI.locale);

  const projects = useSelector((state) => state.content[locale].projects);

  const [open, setOpen] = useState(projects.map((project) => false));

  function handleOpen(event, idx) {
    event.preventDefault();
    let openUpdate = projects.map((project) => false);
    if (open[idx] === true) {
      return setOpen(openUpdate);
    }
    openUpdate[idx] = true;
    setOpen(openUpdate);
  }

  return (
    <Wrapper>
      {projects.map((project, idx) => {
        const props = {
          ...project,
          idx,
          open: open[idx],
        };
        return (
          <Project
            {...props}
            key={idx}
            handleOpen={(event) => handleOpen(event, idx)}
          />
        );
      })}
    </Wrapper>
  );
}

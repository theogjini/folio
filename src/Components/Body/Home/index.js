import React from "react";
import { Wrapper, Nav, ProjectsLink } from "./style.js";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Mtl from "./mtl.js";
import Arrow from "../Projects/Project/images/arrow.svg";

export default function Home(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const locale = useSelector((state) => state.UI.locale);
  const title = useSelector((state) => state.content[locale].home.title);
  const mail = useSelector((state) => state.content.footer.mail);

  const presentation = useSelector(
    (state) => state.content[locale].home.presentation
  );

  const contact = locale === "fr" ? "Contactez moi" : "Contact me";

  const redirect = locale === "fr" ? "Voir mes projets" : "See projects";

  function handleGoToProjects(event) {
    event.preventDefault();
    history.push("/folio/projects");
    dispatch({ type: "CHANGE_PATH", path: "/folio/projects" });
  }

  return (
    <Wrapper>
      <h1>{title}</h1>
      <p>{presentation}</p>
      <ProjectsLink onClick={handleGoToProjects}>
        <Nav>
          <img src={Arrow} alt="Arrow" height="15px" />
          {redirect}
        </Nav>
      </ProjectsLink>
      <a href={mail}>
        <Nav>
          <img src={Arrow} alt="Arrow" height="15px" />
          {contact}
        </Nav>
      </a>

      <Mtl />
    </Wrapper>
  );
}

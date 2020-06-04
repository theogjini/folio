import React from "react";
import { Wrapper, Nav } from "./style.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Mtl from "./mtl.js";
import Arrow from "../Projects/Project/images/arrow.svg";

export default function Home(props) {
  const locale = useSelector((state) => state.UI.locale);
  const title = useSelector((state) => state.content[locale].home.title);
  const mail = useSelector((state) => state.content.footer.mail);

  const presentation = useSelector(
    (state) => state.content[locale].home.presentation
  );

  const contact = locale === "fr" ? "Contactez moi" : "Contact me";

  const redirect = locale === "fr" ? "Voir mes projets" : "See projects";

  return (
    <Wrapper>
      <h1>{title}</h1>
      <p>{presentation}</p>
      <Link to="/folio/projects">
        <Nav>
          <img src={Arrow} alt="Arrow" height="15px" />
          {redirect}
        </Nav>
      </Link>
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

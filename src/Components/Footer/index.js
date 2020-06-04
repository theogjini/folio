import React from "react";
import { useSelector } from "react-redux";
import { Wrapper } from "./style.js";
import { Github, Gitlab, Mail, Linkedin } from "./picto.js";

export default function Footer(props) {
  const infos = useSelector((state) => state.content.footer);

  console.log("linkedin", infos.linkedin);
  return (
    <Wrapper>
      <p>{infos.sig}</p>
      <div>
        <a href={infos.mail}>
          <Mail height="30" width="30" />
        </a>
        <a href={infos.github} target="_blank" rel="noreferrer noopener">
          <Github height="30" width="30" />
        </a>
        <a href={infos.gitlab} target="_blank" rel="noreferrer noopener">
          <Gitlab height="30" width="30" />
        </a>
        <a href={infos.linkedin} target="_blank" rel="noreferrer noopener">
          <Linkedin height="30" width="30" />
        </a>
      </div>
    </Wrapper>
  );
}

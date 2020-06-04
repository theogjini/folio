import React from "react";
import { useSelector } from "react-redux";
import { Wrapper, Footbar, Sig, Liens } from "./style.js";
import { Github, Gitlab, Mail, Linkedin } from "./picto.js";

export default function Footer(props) {
  const infos = useSelector((state) => state.content.footer);
  const locale = useSelector((state) => state.UI.locale);

  const note = locale === "fr" ? "Code du site" : "See site code";

  return (
    <Wrapper>
      <Footbar>
        <Sig>
          {infos.sig}{" "}
          <a href={infos.thisRepo} target="_blank" rel="noreferrer noopener">
            {note}
          </a>
        </Sig>
        <Liens>
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
        </Liens>
      </Footbar>
    </Wrapper>
  );
}

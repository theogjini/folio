import React from "react";
import { Wrapper, Link, Span } from "./style.js";
import { Video, Github, Web, Responsive } from "./picto.js";

export default function Pictograms(props) {
  const { repo, link, responsive, isVideoLink, even } = props;
  return (
    <Wrapper>
      {repo && (
        <Link even={even} href={repo} target="_blank" rel="noreferrer noopener">
          <Github height="30" width="30" />
        </Link>
      )}
      {link && isVideoLink && (
        <Link even={even} href={link} target="_blank" rel="noreferrer noopener">
          <Video height="30" width="30" />
        </Link>
      )}
      {link && !isVideoLink && (
        <Link even={even} href={link} target="_blank" rel="noreferrer noopener">
          <Web height="30" width="30" />
        </Link>
      )}
      {responsive && (
        <Span even={even}>
          <Responsive height="30" width="40" />
        </Span>
      )}
    </Wrapper>
  );
}

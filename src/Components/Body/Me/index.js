import React from "react";
import { useSelector } from "react-redux";
import { Wrapper, Activity, Details } from "./style.js";
import Fisher from "./fisher.js";
import Guitarist from "./guitarist.js";
import DBX from "./images/dbx.png";
import Caligram from "./images/calig.png";

export default function Me(props) {
  const locale = useSelector((state) => state.UI.locale);
  const infos = useSelector((state) => state.content[locale].about);

  const workTitle = locale === "fr" ? "Ma job actuelle" : "My actual job";

  const caligramLink = "http://pro.caligram.com/";
  const dboxLink = "https://www.d-box.com/";
  return (
    <Wrapper>
      <h3>{workTitle}</h3>
      <Activity even={true}>
        <Details even={true}>
          <p>{infos.work}</p>
          <a href={dboxLink} target="_blank" rel="noreferrer noopener">
            <img src={DBX} alt="dbox" />
          </a>
        </Details>
      </Activity>
      <Activity even={false}>
        <Details even={false}>
          <p>{infos.calig}</p>
          <a href={caligramLink} target="_blank" rel="noreferrer noopener">
            <img src={Caligram} alt="dbox" />
          </a>
        </Details>
      </Activity>
      <h3>{infos.freetimeTitle}</h3>
      <Activity even={true}>
        <Details even={true}>
          <p>{infos.music}</p>
          <a
            href="https://www.youtube.com/watch?v=jQE13qVFOug"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Guitarist />
          </a>
        </Details>
      </Activity>
      <Activity even={false}>
        <Details even={false}>
          <p>{infos.fish}</p>
          <Fisher />
        </Details>
      </Activity>
    </Wrapper>
  );
}

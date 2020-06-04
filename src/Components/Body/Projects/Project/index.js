import React from "react";
import {
  Wrapper,
  Plus,
  Details,
  UseCase,
  TableSpec,
  Section,
} from "./style.js";
import { useSelector } from "react-redux";
import Liane from "./images/Liane.png";
import Entrepreunariat from "./images/lvl.png";
import Moulin from "./images/lmdc.png";
import Guithub from "./images/guithub.jpg";
import Arrow from "./images/arrow.svg";
import Dave from "./images/dave.jpg";

export default function Project(props) {
  const darkMode = useSelector((state) => state.UI.darkMode);
  // description, stack, lien, image
  const {
    idx,
    title,
    description,
    open,
    handleOpen,
    date,
    illus,
    usecase,
    specs,
    // lien,
    // repo,
    // responsive,
  } = props;

  const even = idx % 2 === 0;

  const images = { Liane, Entrepreunariat, Moulin, Guithub, Dave };

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
        open={open}
      >
        "{title}"<span>{date}</span>
      </Plus>
      <Details open={open} even={even}>
        <img src={images[illus]} alt={title} />
        <Section even={even}>
          <article>
            <UseCase even={even}>{usecase}</UseCase>
            <TableSpec even={even}>
              {specs && (
                <div>
                  <h3>Technologies</h3>
                  <ul>
                    {specs.split(" ").map((spec) => (
                      <li>
                        <img src={Arrow} alt="arrow" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </TableSpec>
          </article>
        </Section>
        <p>{description}</p>
      </Details>
    </Wrapper>
  );
}

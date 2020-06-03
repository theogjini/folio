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
import Moulin from "./images/mtl.svg";
import Guithub from "./images/fisher.svg";

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
    techs,
  } = props;

  const even = idx % 2 === 0;

  const images = { Liane, Entrepreunariat, Moulin, Guithub };

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
        <Section>
          <div>
            <UseCase even={even}>{usecase}</UseCase>
            <TableSpec>
              {specs && (
                <ul>
                  {specs.split(" ").map((spec) => (
                    <li>{spec}</li>
                  ))}
                </ul>
              )}
              {techs && (
                <ul>
                  {techs.split(" ").map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
              )}
            </TableSpec>
          </div>
        </Section>
        <img src={images[illus]} alt={title} />
        <div>
          <p>{description}</p>
        </div>
      </Details>
    </Wrapper>
  );
}

import React from "react";
import { Wrapper } from "./style.js";
import { useSelector } from "react-redux";
import Mtl from "./mtl.js";

export default function Home(props) {
  const locale = useSelector((state) => state.UI.locale);

  const title = useSelector((state) => state.content[locale].general.title);
  return (
    <Wrapper>
      <div>{title}</div>
      <Mtl />
    </Wrapper>
  );
}

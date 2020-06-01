import React from "react";
import { useSelector } from "react-redux";
import { Wrapper } from "./style.js";

export default function Body(props) {
  const locale = useSelector((state) => state.UI.locale);
  const title = useSelector((state) => {
    console.log(state.content[locale].general.title);
    return state.content[locale].general.title;
  });

  return <Wrapper>{title}</Wrapper>;
}

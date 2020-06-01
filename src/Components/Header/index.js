import React from "react";
import { Wrapper } from "./style.js";
import Navbar from "./Navbar";
import LineUp from "./LineUp.js";

export default function Header(props) {
  return (
    <Wrapper>
      <Navbar />
      <LineUp height="50px" />
    </Wrapper>
  );
}

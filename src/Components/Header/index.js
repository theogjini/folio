import React from "react";
import { Wrapper } from "./style.js";
import Navbar from "./Navbar";
import Line from "./Line.js";

export default function Header(props) {
  return (
    <Wrapper>
      <Navbar />
      <Line />
    </Wrapper>
  );
}

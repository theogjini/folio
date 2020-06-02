import React from "react";
import { Wrapper } from "./style.js";
import Fisher from "./fisher.js";
import Guitarist from "./guitarist.js";

export default function Me(props) {
  return (
    <Wrapper>
      <h3>What do I do in my spare time</h3>
      <Guitarist />
      <Fisher />
    </Wrapper>
  );
}

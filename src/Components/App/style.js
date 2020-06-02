import styled from "styled-components";

import { darkColors, colors } from "../styleVariables.js";

const Wrapper = styled.div`
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  width: 100%;
  height: 100vh;
  color: ${(props) =>
    props.darkMode === false ? darkColors.deepBlue : "white"};
  background-color: ${(props) =>
    props.darkMode === false ? colors.cream : darkColors.deepBlue};
  transition: 1.5s ease-in-out;
`;

const Narrow = styled.div`
  max-width: 1180px;
  margin: auto;
`;

export { Wrapper, Narrow };

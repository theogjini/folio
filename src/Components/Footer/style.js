import styled from "styled-components";
import { colors } from "Components/styleVariables.js";

const Wrapper = styled.div`
  position: fixed;
  bottom: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
  @media screen and (min-width: 900px) {
    width: 1180px;
    display: block;
    margin: auto;
  }
`;

const Footbar = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  color: ${colors.darkBlue};
  @media screen and (min-width: 1180px) {
    width: 1180px;
  }
  svg {
    margin-left: 15px;
  }
`;

const Sig = styled.div`
  font-size: 0.885rem;
  a {
    color: ${colors.darkBlue};
    text-decoration: none;
    margin-left: 15px;
  }
`;

const Liens = styled.div`
  max-width: 100px;
  @media screen and (min-width: 1180px) {
    max-width: 500px;
  }
`;

export { Wrapper, Footbar, Sig, Liens };

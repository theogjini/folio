import styled from "styled-components";
import { colors } from "Components/styleVariables.js";

const Wrapper = styled.div`
  height: 70vh;
  overflow: auto;
  padding: 15px;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
    background: white;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${colors.green};
  }
`;

const Nav = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
  font-size: 1.615rem;
  text-decoration: none;
  color: ${colors.darkBlue};
  margin: 30px;
  :hover {
    color: ${colors.green};
    img {
      margin-left: 20px;
      margin-right: 10px;
    }
  }
  img {
    margin-left: 15px;
    margin-right: 15px;
    transition: 0.2s ease-in-out;
  }
`;

const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    position: relative;
    margin: auto;
  }
  @media screen and (min-width: 1180px) {
    svg {
      max-width: 1180px;

      position: fixed;
      bottom: 0;
      margin: auto;
    }
  }
`;

export { Wrapper, Nav, SvgWrapper };

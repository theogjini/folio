import styled from "styled-components";
import { colors, darkColors } from "../../../styleVariables.js";

const Wrapper = styled.div`
  font-size: 1rem;
  text-align: ${(props) => (props.even === true ? "left" : "right")};
`;

const Plus = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 50px 50px 0;
  padding: 10px;
  cursor: pointer;
  font-size: 2rem;
  transition: 0.4s ease-in-out;
  color: ${(props) =>
    props.darkMode === true ? colors.green : darkColors.deepBlue};
  opacity: 0.6;
  :hover {
    padding-left: 18px;
    padding-right: 18px;
    opacity: 1;
  }
  :before {
    position: absolute;
    bottom: 0;
    height: 5px;
    width: 2px;
    content: "";
    left: ${(props) => (props.even === true ? "-5px" : null)};
    right: ${(props) => (props.even === true ? null : "-5px")};
    background-color: ${colors.lemon};
    transition: 0.8s cubic-bezier(0.17, 0.67, 0, 0.96);
  }
  :after {
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 5px;
    content: "";
    left: ${(props) => (props.even === true ? "-5px" : null)};
    right: ${(props) => (props.even === true ? null : "-5px")};
    background-color: ${colors.lemon};
    transition: 0.8s cubic-bezier(0.17, 0.67, 0, 0.96);
  }
  :hover:after {
    width: 95%;
  }
  :hover:before {
    height: 80%;
  }
`;

const Details = styled.div`
  overflow: hidden;
  transition: 0.4s ease-in-out;
  height: ${(props) => (props.open === true ? "150px;" : "0")};
  p {
    display: inline-block;
    font-family: "Roboto", sans-serif;
    font-size: 0.885rem;
    max-width: 50%;
    color: ${(props) => (props.even === true ? colors.cherry : colors.yellow)};
  }
`;

export { Wrapper, Plus, Details };

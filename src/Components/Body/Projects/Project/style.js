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
  padding: ${(props) => (props.open === true ? "10px 18px 10px 18px" : "10px")};
  cursor: pointer;
  font-size: 2rem;
  transition: 0.4s ease-in-out;
  color: ${(props) =>
    props.darkMode === true ? colors.green : darkColors.deepBlue};
  opacity: ${(props) => (props.open === true ? "1" : "0.6")};

  :hover {
    padding-left: 18px;
    padding-right: 18px;
    opacity: 1;
  }

  :before {
    position: absolute;
    bottom: 0;
    height: ${(props) => (props.open === true ? "80%" : "5px")};
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
    width: ${(props) => (props.open === true ? "95%" : "5px")};
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

  span {
    font-size: 1rem;
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    margin-left: 15px;
    margin-right: 15px;
    font-style: italic;
  }
`;

const Details = styled.div`
  position: relative;
  overflow: hidden;
  transition: 0.4s ease-in-out;
  height: ${(props) => (props.open === true ? "500px" : "0")};
  flex-wrap: ${(props) => (props.even === false ? "wrap-reverse" : "wrap")};

  p {
    display: inline-block;
    font-family: "Roboto", sans-serif;
    font-size: 1.115rem;
    font-weight: 400;
    margin: 0 0 0 0;
    max-width: 50%;
    color: ${(props) => (props.even === true ? colors.cherry : colors.yellow)};
  }

  img {
    position: absolute;
    right: ${(props) => (props.even === false ? "none" : 0)};
    left: ${(props) => (props.even === true ? "none" : 0)};
    margin-right: 30px;
    margin-left: 30px;
    display: inline-block;
    height: 200px;
    max-width: 50%;
    object-fit: contain;
  }
`;

const UseCase = styled.div`
  text-align: ${(props) => (props.even === false ? "right" : "left")};
  font-style: italic;
  font-weight: 400;
  color: ${colors.middleGreen};
  max-width: 50%;
`;

const Section = styled.section`
  display: flex;
  justify-content: ${(props) =>
    props.even === false ? "flex-start" : "flex-end"};
`;

const TableSpec = styled.div`
  max-width: 50%;
`;

export { Wrapper, Plus, Details, UseCase, TableSpec, Section };

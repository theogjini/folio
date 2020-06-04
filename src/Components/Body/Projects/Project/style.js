import styled from "styled-components";
import { colors, darkColors } from "../../../styleVariables.js";

const Wrapper = styled.div`
  font-size: 1rem;
  text-align: center;
  @media screen and (min-width: 900px) {
    text-align: ${(props) => (props.even === true ? "left" : "right")};
  }
`;

const Plus = styled.div`
  position: relative;
  display: inline-block;
  padding: ${(props) => (props.open === true ? "10px 18px 10px 18px" : "10px")};
  font-size: 1rem;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  color: ${(props) =>
    props.darkMode === true ? colors.green : darkColors.deepBlue};
  opacity: ${(props) => (props.open === true ? "1" : "0.6")};
  @media screen and (min-width: 900px) {
    margin: 0 50px 50px 0;
    font-size: 2rem;

    text-align: ${(props) => (props.even === true ? "left" : "right")};

    :hover {
      padding-left: 18px;
      padding-right: 18px;
    }
  }

  :hover {
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
  overflow: hidden;
  position: relative;
  transition: 0.4s ease-in-out;
  height: ${(props) => (props.open === true ? "auto" : "0")};
  margin-bottom: 25px;
  @media screen and (min-width: 900px) {
    height: ${(props) => (props.open === true ? "420px" : "0")};
  }

  p {
    display: inline-block;
    font-family: "Roboto", sans-serif;
    font-size: 1.115rem;
    text-align: left;
    font-weight: 400;
    margin: auto;
    max-width: 80%;
    color: ${(props) => (props.even === true ? colors.cherry : colors.yellow)};
    @media screen and (min-width: 900px) {
      margin: 0 0 0 0;
      max-width: 50%;
    }
  }

  img {
    position: relative;
    top: 0;
    margin-right: 30px;
    margin-left: 30px;
    display: inline-block;
    max-width: 60%;
    object-fit: cover;
    @media screen and (min-width: 900px) {
      max-width: 90%;
      position: absolute;
      right: ${(props) => (props.even === false ? "none" : 0)};
      left: ${(props) => (props.even === true ? "none" : 0)};
      top: 0;
    }
  }
`;

const Section = styled.section`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 900px) {
    display: flex;
    text-align: ${(props) => (props.even === true ? "left" : "right")};
    justify-content: ${(props) =>
      props.even === true ? "flex-start" : "flex-end"};
  }
  article {
    max-width: 80%;

    @media screen and (min-width: 900px) {
      max-width: 50%;
    }
  }
`;

const UseCase = styled.div`
  display: block;
  text-align: left;
  font-style: italic;
  font-weight: 400;
  min-width: 100%;
  color: ${colors.middleGreen};
`;

const TableSpec = styled.div`
  h3 {
    color: ${(props) => (props.even === true ? colors.cherry : colors.yellow)};
    text-align: left;
  }

  ul {
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 20px;

    li {
      color: ${(props) =>
        props.even === true ? colors.cherry : colors.yellow};
      text-align: left;
      margin-top: 5px;
      width: 160px;
      img {
        position: relative;
        height: 12px;
        margin: 0 10px;
      }
    }
  }
`;

export { Wrapper, Plus, Details, UseCase, TableSpec, Section };

import styled from "styled-components";
import { colors } from "Components/styleVariables.js";

const Wrapper = styled.div`
  height: 70vh;
  overflow: auto;
  padding: 15px;
  text-align: center;

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
  h3 {
    padding-top: 50px;
    font-size: 2rem;
  }

  h4 {
    font-size: 0.885rem;
  }

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const Activity = styled.div`
  color: ${(props) => (props.even === true ? colors.cherry : colors.yellow)};
  margin: ${(props) =>
    props.even === true ? " 0 auto 0 auto" : "auto 0 auto 0"};
`;

const Details = styled.div`
  margin: 50px 0 50px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 2px;
    width: 300px;
    max-height: 300px;
    :hover {
      opacity: 0.6;
    }
  }

  a {
    width: 300px;

    :hover {
      opacity: 0.6;
      svg {
        path {
          fill: ${colors.yellow};
        }
      }
    }
  }

  p {
    margin: 50px;
    font-weight: 400;
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
    max-width: 60%;
  }

  @media screen and (min-width: 768px) {
    justify-content: ${(props) =>
      props.even === true ? "flex-start" : "flex-end"};
    flex-direction: ${(props) => (props.even === true ? "row" : "row-reverse")};
  }
`;

export { Wrapper, Activity, Details };

import styled from "styled-components";
import { colors } from "Components/styleVariables.js";

const Wrapper = styled.div`
  margin-top: 15px;
  span {
    margin: 15px;
  }
`;

const Link = styled.a`
  margin: 15px;
  svg {
    path {
      fill: ${(props) => (props.even === true ? colors.cherry : colors.yellow)};
    }
  }
  :hover {
    svg {
      path {
        fill: ${(props) =>
          props.even === true ? colors.yellow : colors.cherry};
      }
    }
  }
`;

const Span = styled.span`
  margin: 15px;
  svg {
    path {
      fill: ${(props) => (props.even === true ? colors.cherry : colors.yellow)};
    }
  }
`;

export { Wrapper, Link, Span };

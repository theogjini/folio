import styled from "styled-components";
import { colors } from "Components/styleVariables.js";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  border-top: 1px solid ${colors.darkBlue};
  color: ${colors.darkBlue};
  height: 60px;
  width: 1180px;
  p {
    font-size: 0.885rem;
  }
  svg {
    margin-left: 15px;
  }
`;

export { Wrapper };

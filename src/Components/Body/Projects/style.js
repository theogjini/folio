import styled from "styled-components";
import { colors } from "../../styleVariables.js";

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

export { Wrapper };

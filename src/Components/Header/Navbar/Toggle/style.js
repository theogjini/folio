import styled from "styled-components";
import { colors, darkColors } from "../../../styleVariables.js";

const colorChange = (props) => {
  return props.darkMode === false ? darkColors.deepBlue : colors.lemon;
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 33px;
  height: 17px;
  border: 2px solid ${colorChange};
  border-radius: 25px;
  box-shadow: 0px 0px 4px 0px ${colorChange};
  text-align: center;
  cursor: pointer;
  :after {
    position: absolute;
    top: 1px;
    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    left: ${(props) => (props.darkMode === false ? "1px" : "17px")};
    background-color: ${colorChange};
    content: "";
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
`;

export { Wrapper };

import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 37px;
  height: 17px;
  border: 2px solid black;
  border-radius: 25px;
  text-align: center;
  cursor: pointer;
  :after {
    position: absolute;
    top: 1px;
    transition: 0.3s cubic-bezier(0.44, 0.18, 0.4, 1.5);
    left: ${(props) => (props.darkMode === false ? "1px" : "22px")};
    background-color: black;
    content: "";
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
`;

export { Wrapper };

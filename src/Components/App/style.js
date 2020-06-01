import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  width: 100%;
  height: 100vh;
  color: ${(props) => (props.darkMode === false ? "#001011" : "#fffffc")};
  background-color: ${(props) =>
    props.darkMode === false ? "#fffffc" : "#001011"};
  transition: 1.5s ease-in-out;
`;

export { Wrapper };

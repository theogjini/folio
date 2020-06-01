import styled from "styled-components";

const Body = styled.div`
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.25rem;
  width: 100%;
  height: 100%;
  color: ${(props) => (props.darkMode === false ? "#001011" : "#fffffc")};
  background-color: ${(props) =>
    props.darkMode === false ? "#fffffc" : "#001011"};
  transition: 0.4s ease-in-out;
`;

export { Body };

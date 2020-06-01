import React from "react";
import { Wrapper, Narrow } from "./style.js";
import { useSelector } from "react-redux";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";

export default function App() {
  const isDarkMode = useSelector((state) => state.UI.darkMode);

  return (
    <Wrapper darkMode={isDarkMode}>
      <Narrow>
        <Header />
        <Body />
        <Footer />
      </Narrow>
    </Wrapper>
  );
}

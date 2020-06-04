import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Wrapper, Narrow } from "./style.js";
import Header from "../Header";
import { Home, Projects, Me } from "../Body";
import Footer from "../Footer";

export default function App() {
  const isDarkMode = useSelector((state) => state.UI.darkMode);

  return (
    <BrowserRouter>
      <Wrapper darkMode={isDarkMode}>
        <Narrow>
          <Header />
          <Route exact={true} path="/folio" render={() => <Home />} />
          <Route
            exact={true}
            path="/folio/projects"
            render={() => <Projects />}
          />
          <Route exact={true} path="/folio/me" render={() => <Me />} />
          <Footer />
        </Narrow>
      </Wrapper>
    </BrowserRouter>
  );
}

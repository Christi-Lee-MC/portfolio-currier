import React, { useState } from "react";
import About from "./component/About";
import ContactForm from "./component/Contact";
import Nav from "./component/Nav";
// import Portfolio from "./component/Portfolio";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [page] = useState([
    {
      name: "About Me",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Contact",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(page[0]);

  return (
    <div>
      <Nav
        page={page}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <About></About>
            </Route>
            {/* <Route exact path="/portfolio" ><Portfolio></Portfolio></Route> */}
            <Route path="/contact">
              <ContactForm></ContactForm>
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

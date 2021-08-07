import React, { useState } from "react";
import About from "./component/About";
import ContactForm from "./component/Contact";
import Nav from "./component/Nav";
import Portfolio from "./component/Portfolio";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [page] = useState([
    {
      name: "About Me"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Contact"
    },
  ])
  const [currentPage, setCurrentPage] = useState(page[0]);

  return (
    <div>
      <Nav
        page={page}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
              ></Nav>
      <main>
      {!contactSelected ? (
  <>
    {/* <Portfolio ></Portfolio> */}
    <About></About>
  </>
) : (
    <ContactForm></ContactForm>
  )}
      </main>
    </div>
  );
}

export default App;


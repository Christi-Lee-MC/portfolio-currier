import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    page = [],
    setCurrentPage,
    currentPage,
      } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <header className="flex-row px-1">
      <h2>
        
         Portfolio: Christi-Lee Currier 
       
      </h2>
      <nav>
        <ul className="flex-row">
{
    page.map(location =>(
        <li className={`mx-5 ${currentPage.name === location.name && "navActive"}`} key={location.name}>
<span onClick={() => setCurrentPage(location)}>
    {capitalizeFirstLetter(location.name)}
</span>
        </li>
    ))
}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

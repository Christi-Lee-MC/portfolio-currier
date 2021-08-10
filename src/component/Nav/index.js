import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { BrowserRouter, Link } from "react-router-dom";

function Nav(props) {
  const { page = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <header className="flex-row px-1">
      <BrowserRouter>
        <h2>Portfolio: Christi-Lee Currier</h2>
        <nav>
          <ul className="flex-row">
            <li className={`mx-5`}>
              {/* implement react router in nav "/" is = about change later as all are going to About right now */}

              <Link to="/">{capitalizeFirstLetter("about")}</Link>
            </li>
            <li className={`mx-5`}>
              <Link to="/portfolio">{capitalizeFirstLetter("portfolio")}</Link>
            </li>
            <li className={`mx-5`}>
              <Link to="/contact">{capitalizeFirstLetter("contact")}</Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    </header>
  );
}

export default Nav;

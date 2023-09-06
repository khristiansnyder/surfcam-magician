import React from "react";
import PropTypes from "prop-types";

import Favorites from "./Favorites";
import Search from "./Search";

const Layout = ({ favorites, children }) => {
  return (
    <>
      {/* ... (Previous code for header and sections) */}
      
      <section className="section">
        <div className="container is-fluid">
          <Favorites favorites={favorites} />
        </div>
      </section>

      {/* Add buttons with links here */}
      <section className="section">
        <div className="container is-fluid">
          <div className="buttons">
            <a
              href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a77088cf"
              className="button is-primary"
            >
              State Park
            </a>
            <a
              href="https://kssurfcams.netlify.app/spot/5cc8b55739a02e0001ac69f8"
              className="button is-primary"
            >
              Pier
            </a>
            <a
              href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a770888a"
              className="button is-primary"
            >
              Lowers
            </a>
            <a
              href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a7708887"
              className="button is-primary"
            >
              Uppers
            </a>
            <a
              href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a770888b"
              className="button is-primary"
            >
              Churches
            </a>
            <a
              href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a77088d7"
              className="button is-primary"
            >
              Doheney
            </a>
          </div>
        </div>
      </section>

      {/* ... (Previous code for Search and footer) */}
    </>
  );
};

Layout.propTypes = {
  favorites: PropTypes.object.isRequired
};

export default Layout;

import React from "react";
import PropTypes from "prop-types";

import Favorites from "./Favorites";
import Search from "./Search";

const Layout = ({ favorites, children }) => {
  return (
    <>
      <section
        className="section"
        style={{
          background: "linear-gradient(to right bottom, #00c1ff, #141f27)";
}
        }}
      >
        <div className="container">
          <h1 className="title has-text-white">KS Surf Cams 2.0</h1>
          <h2 className="subtitle has-text-light">Pull in!</h2>
        </div>
      </section>
      <section className="section">
        <div className="container is-fluid">
          <Favorites favorites={favorites} />
        </div>
      </section>
      <section className="section">
        <div className="container is-fluid">
          {children}
        </div>
      </section>
      <section className="section">
        <div className="container is-fluid">
          <Search />
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Built by Maxworld Technologies</p>
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  favorites: PropTypes.object.isRequired
};

export default Layout;

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
          background: "linear-gradient(to right bottom, #00c1ff, #141f27)",
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
          <div className="buttons">
            <a href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a7708890" className="button is-primary">Pipe</a> 
            <a href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a7708dbf" className="button is-primary">Tahiti</a> 
            <a href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a77088ed" className="button is-primary">HB</a> 
            <a href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a7708e54" className="button is-primary">Newport</a> 
            <a href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a77088f3" className="button is-primary">CDM</a> 
            <a href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a7708f21" className="button is-primary">Crystal Cove</a> 
            <a href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a770882e" className="button is-primary">Creek</a>
            <a href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a77088d7" className="button is-primary">Doho</a> 
            <a href="https://kssurfcams.netlify.app/spot/5cc8b55739a02e0001ac69f8" className="button is-primary">SC Pier</a> 
            <a href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a7708830" className="button is-primary">T-Street</a> 
            <a href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a77088cf" className="button is-primary">Park</a> 
            <a href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a7708887" className="button is-primary">Uppers</a> 
            <a href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a770888a" className="button is-primary">Lowers</a> 
            <a href="https://kssurfcams.netlify.app/spot/5842041f4e65fad6a770888b" className="button is-primary">Church</a> 
            <a href="https://kssurfcams.netlify.app/spot/584204204e65fad6a77099d4" className="button is-primary">Sano</a>
          </div>
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
          <p>Shred on</p>
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  favorites: PropTypes.object.isRequired
};

export default Layout;

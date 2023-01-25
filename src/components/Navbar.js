import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  About 
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle mx-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : props.mode === 'green' ? 'primary' :props.mode === 'blue' ? 'success' : 'dark' }`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" aria-checked="false" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Mode</label>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'blue' ? 'green' : 'blue'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" aria-checked="false" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Mode</label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired, //make it required field
};
// used when values are not passed
Navbar.defaultProps = {
  title: "default title",
  about: "default about",
  num: "{07}",
};

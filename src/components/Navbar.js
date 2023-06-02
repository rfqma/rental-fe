import React from "react";
import Helmet from "react-helmet";

const Navbar = () => {
  return (
    <div>
      <Helmet>
        <script src="scripts/script.js" type="text/javascript" />
      </Helmet>
      {/*navbar*/}
      <nav id="navbar-scroll" className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="images/LandingPage/logo.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            aria-controls="offcanvasExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-pills ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#our-service__section"
                >
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why-us__section">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimoni__section">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq__section">
                  FAQ
                </a>
              </li>
              <li>
                <button className="btn btn-success ms-2 fw-bold">
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*end navbar*/}
      {/*off canvass*/}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">
            BCR
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#our-service__section" className="nav-link">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#why-us__section" className="nav-link">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimoni__section" className="nav-link">
                Testimony
              </a>
            </li>
            <li className="nav-item">
              <a href="#faq__section" className="nav-link">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-success fw-bold btn-offcanvas">
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/*end off canvas*/}
    </div>
  );
};

export default Navbar;

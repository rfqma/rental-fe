import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Maincontent from "./Maincontent";
import CariMobil from "./CariMobil";
//import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
//import Sewamobil from "../pages/Sewamobil";
//import Sewamobil from "../pages/Sewamobil";

const Jumbotron = () => {
  /*
  const navigate = useNavigate();

  const CariMobil = () => {
    navigate("/carimobil");
  };
  */
  return (
    <div>
      {/*header website*/}
      <header>
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
        {/*Jumbotron*/}
        <div className="jumbotron jumbotron-fluid">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-lg-5 col-md-5 col-sm-12 col-xs-12 jumbotron-kiri me-4"
                data-aos="fade-down"
              >
                <h1 className="fw-bold">
                  Sewa &amp; Rental Mobil Terbaik di kawasan Yogyakarta
                </h1>
                <p>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <Link to="/carimobil">
                  <a
                    id="mulaiSewa"
                    className="btn btn-success fw-bold"
                    tabIndex={-1}
                    role="button"
                    href=" "
                  >
                    Mulai Sewa Mobil
                  </a>
                </Link>
              </div>
              <div
                className="col jumbotron-kanan"
                data-aos="fade-left"
                data-aos-delay={500}
              >
                <img
                  src="images/LandingPage/img_car.png"
                  width="100%"
                  className="img-banner"
                  alt="img-banner"
                />
              </div>
            </div>
          </div>
        </div>
        {/*end jumbotron*/}
      </header>
      {/*end header*/}
      <Routes>
        <Route exact path="/" element={<Maincontent />} />

        <Route exact path="/carimobil" element={<CariMobil />} />
      </Routes>
    </div>
  );
};

export default Jumbotron;

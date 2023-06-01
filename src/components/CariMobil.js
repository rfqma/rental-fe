import React from "react";
import Helmet from "react-helmet";
import CarContainer from "./CarContainer";
import Filter from "./Filter";

const CariMobil = () => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="css/carimobilstyle.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker3.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.js"></script>
      </Helmet>
      {/*header website*/}
      <header>
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
      <main>
        <section id="section1-card">
          <div className="container">
            <Filter />
          </div>
        </section>
        <section className="section-2">
          {/* start alert */}
          <div id="not-found"></div>
          {/* end alert */}
          <div className="container">
            <div className="car-list">
              <CarContainer />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CariMobil;

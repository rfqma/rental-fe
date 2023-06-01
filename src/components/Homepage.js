import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import axios from "axios";

const Homepage = () => {

  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetchData()


  }, [])

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3001/api/testimonials')
    const data = await response.data.data

    setTestimonials(data)
  }
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="css/style.css" />
        <script src="scripts/script.js" type="text/javascript" />
        <script src="scripts/flickity.pkgd.min.js" type="text/javascript" />
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

      {/*main content*/}
      <main>
        {/*section our-service*/}
        <section id="our-service__section">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-lg-5 col-md-5 col-sm-12 col-xs-12 me-4 text-center"
                data-aos="fade-right"
              >
                <img
                  src="images/LandingPage/img_service.png"
                  width="100%"
                  className="our-service__img"
                  alt="our-service"
                />
              </div>
              <div
                className="col-lg-5 col-md-5 col-sm-12 col-xs-12"
                data-aos="fade-left"
              >
                <h3 className="mb-3 fw-bold">
                  Best Car Rental for any kind of trip in Yogyakarta!
                </h3>
                <p>
                  Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
                  harga lebih murah dibandingkan yang lain, kondisi mobil baru,
                  serta kualitas pelayanan terbaik untuk perjalanan wisata,
                  bisnis, wedding, meeting, dll.
                </p>
                <p>
                  <span>
                    <img
                      src="images/LandingPage/checklis.png"
                      alt="checklis"
                      width="24px"
                      className="me-2"
                    />
                  </span>
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </p>
                <p>
                  <span>
                    <img
                      src="images/LandingPage/checklis.png"
                      alt="checklis"
                      width="24px"
                      className="me-2"
                    />
                  </span>
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </p>
                <p>
                  <span>
                    <img
                      src="images/LandingPage/checklis.png"
                      alt="checklis"
                      width="24px"
                      className="me-2"
                    />
                  </span>
                  Sewa Mobil Jangka Panjang Bulanan
                </p>
                <p>
                  <span>
                    <img
                      src="images/LandingPage/checklis.png"
                      alt="checklis"
                      width="24px"
                      className="me-2"
                    />
                  </span>
                  Gratis Antar - Jemput Mobil di Bandara
                </p>
                <p>
                  <span>
                    <img
                      src="images/LandingPage/checklis.png"
                      alt="checklis"
                      width="24px"
                      className="me-2"
                    />
                  </span>
                  Layanan Airport Transfer / Drop In Out
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*end our service section*/}
        {/* section why-us */}
        <section id="why-us__section">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="row">
              <div className="col-12 why-us__title">
                <h3 className="fw-bold">Why Us?</h3>
                <p>Mengapa harus pilih Binar Car Rental?</p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="card why-us__card">
                  <div className="card-body">
                    <img
                      src="images/LandingPage/icon_complete.png"
                      width="32px"
                      alt="icon_complete"
                    />
                    <h5 className="card-title mt-3 fw-bold">Mobil Lengkap</h5>
                    <p className="card-text">
                      Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                      dan terawat
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="card why-us__card">
                  <div className="card-body">
                    <img
                      src="images/LandingPage/icon_price.png"
                      width="32px"
                      alt="icon_price"
                    />
                    <h5 className="card-title mt-3 fw-bold">Harga Murah</h5>
                    <p className="card-text">
                      Harga murah dan bersaing, bisa bandingkan harga kami
                      dengan rental mobil lain
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="card why-us__card">
                  <div className="card-body">
                    <img
                      src="images/LandingPage/icon_24hrs.png"
                      width="32px"
                      alt="icon_24hrs"
                    />
                    <h5 className="card-title mt-3 fw-bold">Layanan 24 Jam</h5>
                    <p className="card-text">
                      Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                      juga tersedia di akhir minggu
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="card why-us__card">
                  <div className="card-body">
                    <img
                      src="images/LandingPage/icon_professional.png"
                      width="32px"
                      alt="icon_professional"
                    />
                    <h5 className="card-title mt-3 fw-bold">
                      Sopir Profesional
                    </h5>
                    <p className="card-text">
                      Sopir yang profesional, berpengalaman, jujur, ramah dan
                      selalu tepat waktu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*end why-us-section*/}
        {/*testimoni section*/}
        <section id="testimoni__section">
          <div className="container-fluid">
            <div className="row">
              <div className="col text-center">
                <h3 className="fw-bold">Testimonial</h3>
                <p>Berbagai review positif dari pelanggan kami</p>
              </div>
            </div>
            <div className="row">
              <div
                className="carousel"
                data-flickity='{ "wrapAround": true, "pageDots": false }'
              >
                <div className="carousel-cell">
                  <div className="card testimoni__slider-card">
                    <div className="card-body">
                      <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 testimoni__image">
                          <img
                            src="images/LandingPage/img_photo.png"
                            width="80px"
                            alt="img_photo"
                          />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                          <div className="star-icon">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                          </div>
                          <p style={{ width: '420px' }}>
                            "{testimonials[0].description}"
                          </p>
                          <p className="testimoni__user">{testimonials[0].name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-cell">
                  <div className="card testimoni__slider-card">
                    <div className="card-body">
                      <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 testimoni__image">
                          <img
                            src="images/LandingPage/img_photo3.png"
                            width="80px"
                            alt="img_photo"
                          />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                          <div className="star-icon">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                          </div>
                          <p style={{ width: '420px' }}>
                            "{testimonials[1].description}"
                          </p>
                          <p className="testimoni__user">{testimonials[1].name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-cell">
                  <div className="card testimoni__slider-card">
                    <div className="card-body">
                      <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 testimoni__image">
                          <img
                            src="images/LandingPage/img_photo.png"
                            width="80px"
                            alt="img_photo"
                          />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                          <div className="star-icon">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                          </div>
                          <p>
                            "Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            <br />
                            Quaerat, quod aperiam molestiae id deleniti illum
                            omnis eum nesciunt?"
                          </p>
                          <p className="testimoni__user">John Dee 32, Bromo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*end testimoni section*/}
        {/* section getting-started*/}
        <section id="getting-started__Section">
          <div className="container getstarted">
            <div
              className="card text-center sewa text-white"
              style={{ width: "100%" }}
            >
              <div className="card-body" data-aos="fade-down">
                <h1 className="card-title fw-bold text-white getting-started__title">
                  Sewa Mobil di Yogyakarta Sekarang
                </h1>
                <p className="card-text text-white font-bold">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-success mt-4 " id="mulaiSewa2">
                  <Link
                    to="/carimobil"
                    className="text-white fw-bold"
                    style={{ textDecoration: "none" }}
                  >
                    Mulai Sewa Mobil
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* end section getting-started*/}
        {/*FAQ Section*/}
        <section id="faq__section">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-xs-12 title-faq__section"
                data-aos="fade-right"
              >
                <h3 className="fw-bold">Frequently Asked Question</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                data-aos="fade-left"
              >
                <div
                  className="accordion accordion-flush"
                  id="accordionExample"
                >
                  <div className="accordion-item border rounded-1 ">
                    <h2 className="accordion-header " id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Apa saja syarat yang dibutuhkan?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil eum eius odit rem magni aut aspernatur nemo, quam
                        consequuntur consectetur culpa sunt reprehenderit
                        similique saepe?
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border rounded-1">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Berapa hari minimal sewa mobil lepas kunci?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil eum eius odit rem magni aut aspernatur nemo, quam
                        consequuntur consectetur culpa sunt reprehenderit
                        similique saepe?
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border rounded-1">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Berapa hari sebelumnya sebaiknya booking sewa mobil?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil eum eius odit rem magni aut aspernatur nemo, quam
                        consequuntur consectetur culpa sunt reprehenderit
                        similique saepe?
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border rounded-1">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Apakah ada biaya antar jemput?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil eum eius odit rem magni aut aspernatur nemo, quam
                        consequuntur consectetur culpa sunt reprehenderit
                        similique saepe?
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border rounded-1">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Bagaimana jika terjadi kecelakaan?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil eum eius odit rem magni aut aspernatur nemo, quam
                        consequuntur consectetur culpa sunt reprehenderit
                        similique saepe?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*end FAQ section*/}
      </main>
      {/*end main*/}
    </div>
  );
};

export default Homepage;

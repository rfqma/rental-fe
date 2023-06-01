import React from "react";

const Footer = () => {
  return (
    <div>
      {/*footer*/}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 footer-col">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 footer-col">
              <a className="d-block link-footer" href=" ">
                Our Sevices
              </a>
              <a className="d-block link-footer" href=" ">
                Why Us
              </a>
              <a className="d-block link-footer" href=" ">
                Testimonial
              </a>
              <a className="d-block link-footer" href=" ">
                FAQ
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 footer-col">
              <p>Connect with us</p>
              <div className="icon">
                <a href=" ">
                  <img
                    src="images/LandingPage/icon_facebook.png"
                    alt="icon-facebook"
                    width="32px"
                  />
                </a>
                <a href=" ">
                  <img
                    src="images/LandingPage/icon_instagram.png"
                    alt="icon-instagram"
                    width="32px"
                  />
                </a>
                <a href=" ">
                  <img
                    src="images/LandingPage/icon_twitter.png"
                    alt="icon-twitter"
                    width="32px"
                  />
                </a>
                <a href=" ">
                  <img
                    src="images/LandingPage/icon_mail.png"
                    alt="icon-mail"
                    width="32px"
                  />
                </a>
                <a href=" ">
                  <img
                    src="images/LandingPage/icon_twitch.png"
                    alt="icon-twitch"
                    width="32px"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 footer-col">
              <p>Copyright Binar 2022</p>
              <img src="images/LandingPage/logo.png" alt="logo" />
            </div>
          </div>
        </div>
      </footer>
      {/*end footer*/}
    </div>
  );
};

export default Footer;

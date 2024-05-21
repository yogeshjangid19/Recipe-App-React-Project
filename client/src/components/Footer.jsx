import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';
import logo from "../Resources/logo.png"
const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span className='ftrspan'>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/" className="me-4 link-secondary">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="/" className="me-4 link-secondary">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="/" className="me-4 link-secondary">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="/" className="me-4 link-secondary">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="/" className="me-4 link-secondary">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="/" className="me-4 link-secondary">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img src={logo} alt="" className='ftrlogo' />
                <p>
                  Yumm is here to help you cook delicious meals with less stress and more joy.
                  We offer recipes and cooking advice for home cooks, by home cooks.
                  Helping create “kitchen wins”.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  We Offer!
                </h6>
                <p>
                  <a href="#!" className="text-reset">North Indian</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">South Indian</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Fast Food</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Healthy Food</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <p><i class="fas fa-home me-3"></i>Jaipur , Rajasthan</p>
                <p>
                <i class="fas fa-envelope me-3"></i>
                  yumm@business.com
                </p>
                <p><i class="fas fa-phone me-3"></i>  +9192343434</p>
                <p><i class="fas fa-print me-3"></i> @makewithyumm</p>

              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}>
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="#!">yumm.com</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

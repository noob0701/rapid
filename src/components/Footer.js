import React from 'react'
import insta from "../assets/images/ins.svg"
import facebook from "../assets/images/facebook.svg"
import pinterest from "../assets/images/pinterest.svg"
import twitter from "../assets/images/twitter.svg"
import logo from "../assets/images/logo.svg"
const Footer = () => {
    return (
      <div className="container" style={{ paddingRight: "8%", paddingLeft: "8%" }}>
          <div className="container mt-5 row mb-3">
            <div className="col-12 col-lg-3">
              <img src={logo} alt="logo" className="mb-3" />
              <p className="mb-3">
                A better way to build.
              </p>
              <ul className="list-inline mb-6">
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none">
                    <img src={insta} alt="instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none">
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none">
                    <img src={twitter} alt="twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none">
                    <img src={pinterest} alt="pinterest" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2">
              <h6>
              PRODUCTS
              </h6>
              <ul className="list-unstyled text-muted">
                <li className="mb-3">
                  <a href="#" className="text-reset">
                    Page Builder
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-reset">
                    UI Kit
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-reset">
                    Styleguide
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-reset">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-reset">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2">
              <h6>
              SERVICES
              </h6>
              <ul className="list-unstyled text-muted">
                <li className="mb-3">
                  <a href="#" className="text-reset">
                    Documentation
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-reset">
                    Changelog
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-reset">
                    Pagebuilder
                  </a>
                </li>
                <li>
                  <a href="#" className="text-reset">
                    UI Kit
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 ">
              <h6>
                CONNECT
              </h6>
              <ul className="list-unstyled text-muted">
                <li className="mb-3">
                  <a href="#" className="text-reset">
                    Page Builder
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-reset">
                    UI Kit
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-reset">
                    Styleguide
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-reset">
                    Documentation
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-reset">
                    Changelog
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-reset">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-reset">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h6>
                LEGAL
              </h6>
              <ul className="list-unstyled text-muted">
                <li className="mb-3">
                  <a href="#" className="text-reset">
                    Documentation
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-reset">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-reset">
                    Pagebuilder
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
    )
}

export default Footer

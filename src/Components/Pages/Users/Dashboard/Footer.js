import React from "react";
import { NavLink, Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-white text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <Link to="/" className="me-4 " style={{ textDecoration: "none" }}>
            <BsIcons.BsFacebook size={30} />
          </Link>
          <Link
            to="/"
            className="me-4 link-secondary"
            style={{ textDecoration: "none" }}
          >
            <BsIcons.BsInstagram size={30} />
          </Link>
          <Link
            to="/"
            className="me-4 link-secondary"
            style={{ textDecoration: "none" }}
          >
            <BsIcons.BsTwitter size={30} />
          </Link>
          <Link
            to="/"
            className="me-4 link-secondary"
            style={{ textDecoration: "none" }}
          >
            <BsIcons.BsTiktok size={30} />
          </Link>
          <Link
            to="/"
            className="me-4 link-secondary"
            style={{ textDecoration: "none" }}
          >
            <BsIcons.BsGithub size={30} />
          </Link>
        </div>
      </section>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-secondary"></i>Intern Jewelry
              </h6>
              <p style={{ textAlign: "justify" }}>
                Browse our online collection or visit our store to experience
                the allure of our jewelry firsthand. Our knowledgeable and
                friendly staff is dedicated to providing exceptional service and
                guiding you in selecting the perfect piece that will become a
                cherished heirloom for generations to come.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase text-warning fw-bold mb-4">Products</h6>
              <p>
                <NavLink to="/product"  className="me-4 link-secondary" style={{ textDecoration: "none" }}>
                  Diamond
                </NavLink>
              </p>
              <p>
                <NavLink to="/product" className="me-4 link-secondary" style={{ textDecoration: "none" }}>
                  Gold
                </NavLink>
              </p>
              <p>
                <NavLink to="/product"  className="me-4 link-secondary" style={{ textDecoration: "none" }}>
                  Silver
                </NavLink>
              </p>
              <p>
                <NavLink to="/product"  className="me-4 link-secondary" style={{ textDecoration: "none" }}>
                  Collections
                </NavLink>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase text-warning fw-bold mb-4">Useful Links</h6>
              <p>
              <Link
            to="/"
            className="me-4 link-secondary"
            style={{ textDecoration: "none" }}
          >
            Pricing
          </Link>
              </p>
              <p>
              <Link
            to="/"
            className="me-4 link-secondary"
            style={{ textDecoration: "none" }}
          >
            Settings
          </Link>
              </p>
              <p>
              <Link
            to="/"
            className="me-4 link-secondary"
            style={{ textDecoration: "none" }}
          >
            Orders
          </Link>
              </p>
              <p>
              <Link
            to="/"
            className="me-4 link-secondary"
            style={{ textDecoration: "none" }}
          >
            Help
          </Link>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase text-warning fw-bold mb-4">Contact</h6>
              
              <p>
              <BsIcons.BsHouse style={{marginRight:'10px'}}/>
                Itahari,Sunsari
                5007, Nepal
              </p>
              <p>
              <BsIcons.BsEnvelope style={{marginRight:'10px'}}/>
                intern@gmail.com
              </p>
              <p>
              <BsIcons.BsPhone style={{marginRight:'10px'}}/>
              025-533331
              </p>
              <p>
              <BsIcons.BsPrinter style={{marginRight:'10px'}}/>+00 00 00 00
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
      >
        <p className="mb-0">
          © {new Date().getFullYear()} Intern Jewelry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

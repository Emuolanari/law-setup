import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGem, faHome, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted mt-5">
        <section className="container text-center d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="" className="me-4 text-reset">
            <FontAwesomeIcon className="fa-lg me-3 fa-fw" icon={faFacebook} />
            </a>
            <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon className="me-3" icon={faGem} />Law Setup
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">Lorem ipsum</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settle</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Court stuff</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Land disputes</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#" className="text-reset">Help</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Contact
                </h6>
                <p><FontAwesomeIcon className="me-3" icon={faHome} /> Port Harcourt, Nigeria</p>
                <p>
                <FontAwesomeIcon className="me-3" icon={faEnvelope} />
                  info@example.com
                </p>
                <p> <FontAwesomeIcon className="me-3" icon={faPhone} /> +234 234 567 88</p>
                <p><FontAwesomeIcon className="me-3" icon={faPrint} /> +234 234 567 89</p>
              </div>

            </div>

          </div>
        </section>

        <div className="text-center p-4">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="#">Lawsetup.com</a>
        </div>

      </footer>

    </>
  )
}

export default Footer
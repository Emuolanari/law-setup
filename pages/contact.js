import { faEnvelope, faMapMarkerAlt, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function contact() {
  return (
    <div className="container mt-4">

      <section className="mb-4">
        <p className="w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to
          contact us directly. Our team will come back to you within
          a matter of hours to help you.</p>

        <div className="row">


          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form">

              <div className="row">


                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="name" name="name" className="form-control" />
                    <label htmlFor="name" className="">Your name</label>
                  </div>
                </div>



                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="email" name="email" className="form-control" />
                    <label htmlFor="email" className="">Your email</label>
                  </div>
                </div>


              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input type="text" id="subject" name="subject" className="form-control" />
                    <label htmlFor="subject" className="">Subject</label>
                  </div>
                </div>
              </div>

              <div className="row">


                <div className="col-md-12">

                  <div className="md-form">
                    <textarea type="text" id="message" name="message" rows="2"
                      className="form-control md-textarea"></textarea>
                    <label htmlFor="message">Your message</label>
                  </div>

                </div>
              </div>


            </form>

            <div className="text-center text-md-left">
              <a className="btn btn-primary form-control">Send</a>
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li><FontAwesomeIcon className="" icon={faMapMarkerAlt} />
                <p>Port Harcourt, Nigeria</p>
              </li>

              <li><FontAwesomeIcon className="" icon={faPhone} />
                <p>+234 234 567 88</p>
              </li>

              <li><FontAwesomeIcon className="" icon={faEnvelope} />
                <p>contact@law-setup.com</p>
              </li>
            </ul>
          </div>


        </div>

      </section>

    </div>
  )
}

export default contact
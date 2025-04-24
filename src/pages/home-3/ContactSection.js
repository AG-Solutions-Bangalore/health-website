import React, { useRef } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import emailjs from "@emailjs/browser";

import shapeImg from "../../assets/img/contact/shape-2-1.png";

const ContactMain = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <main>
      <div className="it-contact__area  pb-120" id="it-contact">
        <div className="container">
          <div className="it-contact__wrap fix z-index-3 p-relative">
            <div className="it-contact__shape-1 d-none d-xl-block">
              <img src={shapeImg} alt="" />
            </div>
            <div className="row align-items-end">
              <div className="col-xl-12">
                <div className="it-contact__section-box pb-20">
                  <h4 className="it-contact__title pb-15">Get in Touch </h4>
                  <p>Have a question? We have all the answers.</p>
                </div>
                <div className="it-contact__form-box">
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-4 col-lg-4 mb-25">
                        <div className="it-contact-input-box">
                          <label>First Name*</label>
                          <input type="text" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4 mb-25">
                        <div className="it-contact-input-box">
                          <label>Last Name*</label>
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4 mb-25">
                        <div className="it-contact-input-box">
                          <label>Email Address*</label>
                          <input type="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4 mb-25">
                        <div className="it-contact-input-box">
                          <label>Business Type</label>
                          <input type="text" placeholder="Business Type" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4 mb-25">
                        <div className="it-contact-input-box">
                          <label>Company Name</label>
                          <input type="text" placeholder="Company Name" />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-lg-4 mb-25">
                        <div className="it-contact-input-box">
                          <label>Phone Number</label>
                          <input type="text" placeholder="Phone Number" />
                        </div>
                      </div>

                      <div className="col-12 mb-25">
                        <div className="it-contact-textarea-box">
                          <label>Message</label>
                          <textarea placeholder="Message"></textarea>
                        </div>
                      </div>
                      <div className="col-12 mb-25">
                        <div className="form-check d-flex align-items-start">
                          <input
                            className="mt-2"
                            type="checkbox"
                            id="termsCheckbox"
                          />
                          <label
                            className="form-check-label text-justify"
                            htmlFor="termsCheckbox"
                            style={{ textAlign: "justify", fontSize: "12px" }}
                          >
                            I agree to receive other communications from VoCare.
                            You can unsubscribe from these communications at any
                            time. For more information on how to unsubscribe,
                            our privacy practices, and how we are committed to
                            protecting and respecting your privacy, please
                            review our Privacy Policy. By clicking submit below,
                            you consent to allow VoCare to store and process the
                            personal information submitted above to provide you
                            the content requested.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        type="submit"
                        className="btn btn-primary rounded ed-btn-square purple-4"
                      >
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactMain;

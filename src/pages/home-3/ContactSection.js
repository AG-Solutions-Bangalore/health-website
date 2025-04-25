import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import emailjs from "@emailjs/browser";
import shapeImg from "../../assets/img/contact/shape-2-1.png";
import Toast from "./Toast";

const ContactMain = () => {
  const [formData, setFormData] = useState({
    webEnquiry_fullName: "",
    webEnquiry_mobile: "",
    webEnquiry_email: "",
    webEnquiry_message: "",
    // agreed: false,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (msg, type = "success") => {
    setToast({ show: true, message: msg, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "webEnquiry_mobile"
          ? val.replace(/\D/g, "").slice(0, 10)
          : val,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.webEnquiry_fullName.trim())
      newErrors.webEnquiry_fullName = "Full name is required";
    if (!formData.webEnquiry_mobile.trim())
      newErrors.webEnquiry_mobile = "Phone number is required";
    if (!formData.webEnquiry_email.trim())
      newErrors.webEnquiry_email = "Email is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      const response = await fetch(
        "https://qurithealthcare.com/crmapi/public/api/web-create-enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const responseData = await response.json();

      if (response.ok && responseData.code === 200) {
        console.log("Success!", responseData);
        showToast(responseData.msg, "success");

        setFormData({
          webEnquiry_fullName: "",
          webEnquiry_mobile: "",
          webEnquiry_email: "",
          webEnquiry_message: "",
        });
      } else {
        showToast(responseData.msg || "Something went wrong", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showToast("An error occurred while sending the form", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Toast show={toast.show} message={toast.message} type={toast.type} />

      <div className="it-contact__area pb-120" id="it-contact">
        <div className="container">
          <div className="it-contact__wrap fix z-index-3 p-relative">
            <div className="it-contact__shape-1 d-none d-xl-block">
              <img src={shapeImg} alt="" />
            </div>
            <div className="row align-items-end">
              <div className="col-xl-12">
                <div className="it-contact__section-box pb-20">
                  <h4 className="it-contact__title pb-15">Get in Touch</h4>
                  <p>Have a question? We have all the answers.</p>
                </div>
                <div className="it-contact__form-box">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-4 mb-25">
                        <div className="it-contact-input-box">
                          <label>
                            Full Name<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Full Name"
                            name="webEnquiry_fullName"
                            value={formData.webEnquiry_fullName}
                            onChange={handleChange}
                          />
                          {errors.webEnquiry_fullName && (
                            <small className="text-danger">
                              {errors.webEnquiry_fullName}
                            </small>
                          )}
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-lg-4 mb-25">
                        <div className="it-contact-input-box">
                          <label>
                            Phone Number<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Phone Number"
                            name="webEnquiry_mobile"
                            value={formData.webEnquiry_mobile}
                            onChange={handleChange}
                          />
                          {errors.webEnquiry_mobile && (
                            <small className="text-danger">
                              {errors.webEnquiry_mobile}
                            </small>
                          )}
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-lg-4 mb-25">
                        <div className="it-contact-input-box">
                          <label>
                            Email<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="Email"
                            name="webEnquiry_email"
                            value={formData.webEnquiry_email}
                            onChange={handleChange}
                          />
                          {errors.webEnquiry_email && (
                            <small className="text-danger">
                              {errors.webEnquiry_email}
                            </small>
                          )}
                        </div>
                      </div>

                      <div className="col-12 mb-25">
                        <div className="it-contact-textarea-box">
                          <label>Message</label>
                          <textarea
                            placeholder="Message"
                            name="webEnquiry_message"
                            value={formData.webEnquiry_message}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>

                      {/* Terms Checkbox */}
                      <div className="col-12 mb-25">
                        <div className="form-check d-flex align-items-start">
                          <input
                            className="mt-2"
                            type="checkbox"
                            id="termsCheckbox"
                            name="agreed"
                            // checked={formData.agreed}
                            // onChange={handleChange}
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
                        <span>{loading ? "Sending" : "Send Message "}</span>
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

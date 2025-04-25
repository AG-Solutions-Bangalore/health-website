import React from "react";

const FloatingContact = () => {
  return (
    <div
      className="position-fixed"
      style={{ right: "2.5rem", bottom: "150px", zIndex: 1050 }}
    >
      <div className="position-relative">
        <div
          className="d-flex flex-column align-items-end gap-2 position-absolute end-100 pe-3"
          style={{
            bottom: "0",
            visibility: "hidden",
            opacity: 0,
            transition: "opacity 0.3s ease, visibility 0.3s ease",
          }}
          id="floating-contact-options"
        >
          <a
            href="mailto:example@email.com"
            className="btn btn-light shadow d-flex align-items-center gap-2"
          >
            <i className="fa fa-envelope"></i> Email
          </a>
          <a
            href="https://wa.me/918557566766"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light shadow d-flex align-items-center gap-2"
          >
            <i className="fa fa-whatsapp"></i> WhatsApp
          </a>
          <a
            href="tel:+918557566766"
            className="btn btn-light shadow d-flex align-items-center gap-2"
          >
            <i className="fa fa-phone"></i> Call
          </a>
        </div>

        <div
          className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow"
          style={{ width: "56px", height: "56px", cursor: "pointer" }}
          onMouseEnter={() => {
            const options = document.getElementById("floating-contact-options");
            options.style.visibility = "visible";
            options.style.opacity = 1;
          }}
          onMouseLeave={() => {
            const options = document.getElementById("floating-contact-options");
            options.style.opacity = 0;
            setTimeout(() => {
              options.style.visibility = "hidden";
            }, 300);
          }}
        >
          <i className="fa fa-comment" style={{ fontSize: "20px" }}></i>
        </div>
      </div>
    </div>
  );
};

export default FloatingContact;

import React, { useState } from "react";

const FloatingContact = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="position-fixed"
      style={{ right: "2.5rem", bottom: "150px", zIndex: 1050 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="position-relative">
        {/* Floating contact buttons */}
        <div
          className={`d-flex flex-column align-items-end gap-2 position-absolute end-100 pe-3 ${
            hovered ? "visible opacity-100" : "invisible opacity-0"
          }`}
          style={{
            bottom: "0",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
          }}
        >
          {/* Email */}
          <a
            href="mailto:sales@vocare.com"
            className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow"
            style={{ width: "56px", height: "56px" }}
          >
            <i className="fa fa-envelope" style={{ fontSize: "20px" }}></i>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918557566766"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success rounded-circle d-flex align-items-center justify-content-center shadow"
            style={{ width: "56px", height: "56px" }}
          >
            <i
              class="fab fa-whatsapp"
              aria-hidden="true"
              style={{ fontSize: "20px" }}
            ></i>
          </a>

          {/* Phone */}
          <a
            href="tel:+918557566766"
            className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow"
            style={{ width: "56px", height: "56px" }}
          >
            <i
              className="fa fa-phone"
              aria-hidden="true"
              style={{
                fontSize: "20px",
                color: "white",
              }}
            ></i>
          </a>
        </div>

        {/* Main trigger button */}
        <div
          className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow"
          style={{ width: "56px", height: "56px" }}
        >
          <i className="fa fa-comment" style={{ fontSize: "20px" }}></i>
        </div>
      </div>
    </div>
  );
};

export default FloatingContact;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

import videoBG from "../../assets/img/video/bg-4-1.jpg";
import shapeImg1 from "../../assets/img/video/ed-shape-1-1.png";
import shapeImg2 from "../../assets/img/video/ed-shape-1-2.png";
import shapeImg3 from "../../assets/img/video/shape-1-5.png";
import subTitleSVG from "../../assets/img/video/svg.svg";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="PO_fBTkoznc"
        onClose={openModal}
      />

      <div className="row align-items-center">
        <div className="col-12">
          <div className="it-video-content">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 py-3">
              {/* Contact Button */}
              <div className="flex-shrink-0">
                <Link className="ed-btn-square theme" to="/about-us">
                  Contact Us
                </Link>
              </div>

              {/* Text */}
              <div className="flex-grow-1 text-center text-lg-start">
                <p className="mb-0 text-white">
                  How does the VoCare Vitals V360 Mobile Vital Signs Monitor
                  Operate?
                </p>
              </div>

              {/* Play Button */}
              <div className="flex-shrink-0">
                <Link
                  className="popup-video play btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center mx-auto"
                  style={{ width: "50px", height: "50px" }}
                  to="#"
                  onClick={openModal}
                >
                  <i className="fas fa-play"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

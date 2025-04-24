import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
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
        onClose={() => openModal()}
      />

      <div>
        <div className="row align-items-center">
          <div className="col-12">
            <div className="it-video-content">
              <div className="d-md-flex align-items-md-center justify-content-md-between gap-md-4 py-3 d-block space-y-4">
                <div className="flex-shrink-0 mb-3 mb-md-0 d-flex align-items-center justify-content-center rounded-circle">
                  <Link className="ed-btn-square theme" to="/about-us">
                    Contact Us
                  </Link>
                </div>
         

                <p className="text-white flex-grow-1 mb-3 md:mb-0">
                  How does the VoCare  Vitals V360 Mobile Vital Signs
                  Monitor Operate?
                </p>

                <div className="it-video-play text-center ms-3 mb-2 md:mb-0 d-flex align-items-center justify-content-center">
                  <Link
                    className="popup-video play btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                    to="#"
                    onClick={() => openModal()}
                  >
                    <i className="fas fa-play"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Video;

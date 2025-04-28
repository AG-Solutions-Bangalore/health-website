import React from "react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NextArrow from "../../components/SVG/NextArrow";
import PrevArrow from "../../components/SVG/PrevArrow";

import shapeImg1 from "../../assets/img/slider/shape-3-2.png";
import shapeImg2 from "../../assets/img/slider/shape-3-3.png";
import sliderImg1 from "../../assets/img/slider/slider-1-1.jpeg";
import sliderImg2 from "../../assets/img/slider/slider-1-2.jpeg";
import sliderImg3 from "../../assets/img/slider/slider-1-3.jpeg";
import BannerVideo from "./BannerVideoSection";

const Banner = () => {
  const sliderOption = {
    speed: 1500,
    loop: true,
    slidesPerView: "1",
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
    navigation: {
      nextEl: ".slider-prev",
      prevEl: ".slider-next",
    },
  };

  return (
    <div className="ed-slider-2-area p-relative fix">
      <div className="ed-slider-2-arrow-box">
        <button className="slider-prev">
          <PrevArrow />
        </button>
        <button className="slider-next">
          <NextArrow />
        </button>
      </div>
      <div className="ed-slider-2-box">
        <div className="swiper-container ed-slider-2-active">
          <Swiper
            modules={[Navigation, EffectFade, Autoplay]}
            {...sliderOption}
            className="swiper-wrapper"
          >
            <SwiperSlide className="swiper-slide">
              <div className="ed-slider-2-overley p-relative">
                <div className="line_wrap">
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                </div>

                <div className="ed-slider-2-shape-1">
                  <img src={shapeImg1} alt="" />
                </div>
                <div className="ed-slider-2-shape-2">
                  <img src={shapeImg2} alt="" />
                </div>
                <div className="ed-slider-2-wrap p-relative">
                  <div
                    className="ed-slider-2-thumb"
                    style={{
                      backgroundImage: `url(${sliderImg1})`,
                    }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-9">
                        <div className="ed-slider-2-content">
                          <div className="ed-slider-title text-white">
                            <div>
                              <span>Remote Patient</span>
                            </div>
                            <div>
                              <span>
                                <i>Monitoring</i>
                              </span>
                            </div>
                          </div>
                          <div className="ed-slider-2-text pb-25">
                            <div>
                              <p className=" text-white">
                                Discover the VoCare Vitals V360®
                                <br />
                                FDA Device Medical, a multiple vital signs
                                remote patient
                                <br />
                                monitoring device designed to enhance
                                value-based healthcare.{" "}
                              </p>
                            </div>
                          </div>

                          <BannerVideo />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="ed-slider-2-overley p-relative">
                <div className="line_wrap">
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                </div>

                <div className="ed-slider-2-shape-1">
                  <img src={shapeImg1} alt="" />
                </div>
                <div className="ed-slider-2-shape-2">
                  <img src={shapeImg2} alt="" />
                </div>
                <div className="ed-slider-2-wrap p-relative">
                  <div
                    className="ed-slider-2-thumb"
                    style={{
                      backgroundImage: `url(${sliderImg2})`,
                    }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-9">
                        <div className="ed-slider-2-content">
                          <div className="ed-slider-title text-white">
                            <div>
                              <span> Point of </span>
                            </div>
                            <div>
                              <span>
                                <i>Care</i>
                              </span>
                            </div>
                          </div>
                          <div className="ed-slider-2-text pb-25">
                            <div>
                              <p className=" text-white">
                                <span>
                                  {" "}
                                  The VoCare Vitals360® is a value-based Point
                                  of Care (POC)
                                </span>
                                solution for mobile workforces such as Medics,
                                Nurses or CNA Home Health Providers. It replaces
                                a bag full of vital signs
                                <br />
                                monitors with a single, easy-to-use
                                patient monitor device.{" "}
                              </p>
                            </div>
                          </div>
                          <BannerVideo />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="ed-slider-2-overley p-relative">
                <div className="line_wrap">
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                </div>

                <div className="ed-slider-2-shape-1">
                  <img src={shapeImg1} alt="" />
                </div>
                <div className="ed-slider-2-shape-2">
                  <img src={shapeImg2} alt="" />
                </div>
                <div className="ed-slider-2-wrap p-relative">
                  <div
                    className="ed-slider-2-thumb"
                    style={{
                      backgroundImage: `url(${sliderImg3})`,
                    }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-9">
                        <div className="ed-slider-2-content">
                          <div className="ed-slider-title text-white">
                            <div>
                              <span> Tele-Health</span>
                            </div>
                            <div>
                              <span>
                                <i> Solution</i>
                              </span>
                            </div>
                          </div>
                          <div className="ed-slider-2-text pb-25">
                            <div>
                              <p className=" text-white">
                                <span>
                                  {" "}
                                  The Vitals360® video enabled remote patient
                                  monitor Telehealth Solution.
                                </span>
                                The virtual medical care device enables two-way,
                                real-time telehealth communication between a
                                <br />
                                clinician and the patient monitoring
                                device from anywhere.
                              </p>
                            </div>
                          </div>
                          <BannerVideo />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Banner;

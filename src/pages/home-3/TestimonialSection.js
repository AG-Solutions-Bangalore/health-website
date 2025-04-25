import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle";
import SingleTestimonialThree from "../../components/Testimonial/SingleTestimonialThree";

const Testimonial = () => {
  const sliderOption = {
    speed: 1500,
    loop: true,
    slidesPerView: "3",
    spaceBetween: 50,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      1400: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <div
      className="it-testimonial-area ed-testimonial-style-2 pt-120 pb-120 fix p-relative"
      id="it-testimonials"
    >
      <div className="container">
        <div className="it-testimonial-title-wrap mb-65">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <SectionTitle
                itemClass="it-testimonial-title-box text-center"
                subTitleClass="ed-section-subtitle"
                subTitle="testimonial"
                titleClass="ed-section-title"
                title="Still not convinced?"
              />
              <h2 className="text-center">Hear what our clients had to say</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ed-testimonial-wrapper">
              <div className="swiper-container ed-testimonial-active">
                <Swiper
                  modules={[Autoplay]}
                  {...sliderOption}
                  className="swiper-wrapper"
                >
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonialThree
                      description={`The Vocare Vitals V360 state-of-the-art technology is the champion of our value based healthcare. - CEO, Health & Wellness Company`}
                      authorName="CEO, Health and Wellness Company"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonialThree
                      description={`Six vital signs, Mobile with accurate reads. Also, easy to operate, connect and clean. - VP, Medical Device Distributor`}
                      authorName="VP, Medical Device Distributor"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonialThree
                      description={`All these professional tools in one portable package. The telehealth quality is good. - Director, Home Health Reseller`}
                      authorName="Director, Home Health Value Added Reseller"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonialThree
                      description={`The Vocare Vitals V360 state-of-the-art technology is the champion of our value based healthcare. - CEO, Health & Wellness Company`}
                      authorName="CEO, Health and Wellness Company"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonialThree
                      description={`Six vital signs, Mobile with accurate reads. Also, easy to operate, connect and clean. - VP, Medical Device Distributor`}
                      authorName="VP, Medical Device Distributor"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonialThree
                      description={`All these professional tools in one portable package. The telehealth quality is good. - Director, Home Health Reseller`}
                      authorName="Director, Home Health Value Added Reseller"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;

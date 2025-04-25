import React from "react";
import Counter from "../../components/Counter";

import shapeImg1 from "../../assets/img/about/funfact-shape.png";
import shapeImg2 from "../../assets/img/about/funfact-shape-2.png";

const FunFact = () => {
  const counters = [
    {
      countNum: 2017,
      countSubtext: "",
      countTitle: "Since",
    },
    {
      countNum: 6,
      countSubtext: "",
      countTitle: "Vital reading types",
    },
    {
      countNum: 5,
      countSubtext: "",
      countTitle: "CPT Codes",
    },
    {
      countNum: 20,
      countSubtext: "+",
      countTitle: "Different Facilities Active",
    },
  ];
  return (
    <div className="it-funfact-4-area fix p-relative pt-75 pb-45 ">
      <div className="it-funfact-4-shape-1">
        <img src={shapeImg1} alt="" />
      </div>
      <div className="it-funfact-4-shape-2">
        <img src={shapeImg2} alt="" />
      </div>
      <div className="container">
        <div className="row">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-3 col-md-6 mb-30 d-flex justify-content-center"
            >
              <div className="it-funfact-4-wrap d-flex align-items-center justify-content-center">
                <div className="it-funfact-4-item">
                  <h4>
                    <Counter
                      start={0}
                      end={counter.countNum}
                      duration={2}
                      counterSubText={counter.countSubtext}
                      separator="" 
            
                    />
                  </h4>
                  <p>{counter.countTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FunFact;

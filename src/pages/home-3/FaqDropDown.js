import React from "react";
import FaqOne from "../../components/Faq";


const FaqDropDown = () => {
  const items = [
    {
      id: "a",
      btnText: "Why are Remote Health and CCM related?",
      description:
        "Being able to monitor patients remotely in between office visits will greatly promote patient autonomy, and alert the care provider when a change in care or intervention is required.",
      faqImage: "",
    },

    {
      id: "b",
      btnText: "Safer Post-Discharge Care",
      description:
        "ore and more, hospitals are under pressure to discharge patients quicker, sometimes at the cost of the paint's health. Being able to monitor and keep track of these patients remotely once they have been discharged will ensure they continue their care plans and reduce chances for readmission - a scenario that is extremely costly to providers",
      faqImage: "",
    },

    {
      id: "c",
      btnText: "Why are these measurements important?",
      description:
        "ital signs (also known as vitals) are a group of the four to six most important medical signs that indicate the status of the body's vital (life-sustaining) functions. These measurements are taken to help assess the general physical health of a person, give clues to possible diseases, and show progress toward recovery.Want to see more? Check out the Quick Guide for how the device works.",
      faqImage: "",
    },
    {
      id: "d",
      btnText: "Why is remote tele-health needed?",
      description:
        "Baby Boomers are Aging at an Alarming Rate Chronic Illnesses are at an All Time High A Broken System of Invisible Patients stemming from lack of accessCrippling healthcare Costs",
      faqImage: "",
    },
  ];

  return (
    <div id="it-faq" className="it-faq-area p-relative pt-120 pb-120">
      <div className="container">
        <div className="it-faq-wrap">
          <FaqOne items={items} />
        </div>
      </div>
    </div>
  );
};
export default FaqDropDown;

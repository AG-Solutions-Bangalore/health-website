import React from "react";
import HeaderThree from "../../components/Header/HeaderThree";
import ErrorMain from "./ErrorMain";
import FooterTwo from "../../components/Footer/FooterTwo";

import Logo from "../../assets/img/logo/logo-white-3.png";

const Error = () => {
  return (
    <>
      <HeaderThree onePage={true} parentMenu="home" />

      <ErrorMain />

      <FooterTwo
        footerClass="it-footer-area it-footer-bg it-footer-style-5 ed-footer-style-5 inner-style black-bg pb-70"
        footerLogo={Logo}
        btnClass="it-btn-white sky-bg"
        copyrightTextClass="it-copyright-text inner-style text-center"
      />
    </>
  );
};

export default Error;

import React from "react";

import partner2 from "/partner/infobeans_logo.png";
import partner3 from "/partner/logo.png";
// import partner3 from "../../assets/images/partner/3.png";
// import partner4 from "../../assets/images/partner/4.png";

const PartnersSection = () => {
  const partners = [
    { image: partner2, name: "Partner 2" },
    { image: partner3, name: "Partner 3" },
    // { image: partner3, name: "Partner 3" },
    // { image: partner4, name: "Partner 4" },
  ];

  return (
    <section className="mp-section" id="partners">
      <div className="container">
        <div className="section-header text-center">
          <h2>
            Our <span className="highlight">Informative Partner</span>
          </h2>
          <div className="mp-divider"></div>
          {/* <p className="section-subtitle">Supporting MP Art Propel's mission</p> */}
        </div>
        <div className="partners-container mt-5">
          {partners.map((partner, index) => (
            <div className="partner-logo" key={index}>
              <img src={partner.image} alt={partner.name} width="200px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

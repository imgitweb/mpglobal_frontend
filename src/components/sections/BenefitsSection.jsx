import React from "react";
import { Navigate } from "react-router-dom";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🤝",
      title: "Cross-Border Startup Matchmaking",
      description:
        "Connect with complementary startups, partners, and innovators from India and Germany to explore synergies and co-create impactful solutions.",
    },
    {
      icon: "🌍",
      title: "International Collaboration Opportunities",
      description:
        "Participate in joint projects, pilots, and co-development initiatives between Indian and German enterprises, academia, and institutions.",
    },
    {
      icon: "🛬",
      title: "Market Access & Soft-Landing Support",
      description:
        "Receive hands-on assistance for entering new markets, including regulatory guidance, workspace access, and on-ground support.",
    },
    {
      icon: "💡",
      title: "Innovation Exchange Programs",
      description:
        "Engage in structured exchange programs to share cutting-edge technologies, business models, and R&D capabilities across borders.",
    },
    {
      icon: "🎓",
      title: "Mentorship & Capacity Building",
      description:
        "Learn from global experts through mentorship, workshops, and training programs designed to build your global business acumen.",
    },
    {
      icon: "🏢",
      title: "Access to Incubation & Government Schemes",
      description:
        "Tap into startup incubators and benefit from bilateral government initiatives that promote innovation and entrepreneurship.",
    },
    {
      icon: "📡",
      title: "Virtual and In-Person Networking Events",
      description:
        "Join curated events, webinars, and business delegations to meet potential collaborators, investors, and ecosystem enablers.",
    },
    {
      icon: "🌐",
      title: "Cultural & Business Integration Support",
      description:
        "Get help navigating cultural nuances and business practices to ensure smooth integration and successful long-term collaborations.",
    },
  ];

  return (
    <section className="mp-section mp-section-alt" id="benefits">
      <div className="mp-art-pattern-top"></div>
      <div className="container">
        <div className="section-header text-center mt-3">
          <h2>
            What <span className="highlight">MP Global </span>
            Offers?
          </h2>
          <div className="mp-divider"></div>
          <p className="section-subtitle">
            Transform Your Business with These Exclusive Benefits
          </p>
        </div>
        <div className="row mt-5 g-4">
          {benefits.map((benefit, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <span className="emoji-icon">{benefit.icon}</span>
                </div>
                <h3>{benefit.title}</h3>
                {benefit.isList ? (
                  <>
                    <p>{benefit.description.split(":")[0] + ":"}</p>
                    <ul className="partner-perks-list">
                      {benefit.listItems.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p>{benefit.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="apply-now-container text-center mt-5">
          <div className="apply-banner">
            <h3>Limited spots available</h3>
            <p>
              Apply now to secure your place in this first-of-its-kind
              accelerator program by the Government of Madhya Pradesh.
            </p>
            <a href="#apply" className="btn btn-primary btn-apply">
              Apply Now
            </a>
          </div>
        </div> */}
      </div>
      <div className="mp-art-pattern-bottom"></div>
    </section>
  );
};

export default BenefitsSection;

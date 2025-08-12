import React, { useState } from "react";

// Categories
const faqCategories = [
  {
    id: "about",
    title: "About MP Global",
    icon: "fas fa-globe",
    color: "#f8981a",
  },
  {
    id: "eligibility",
    title: "Eligibility",
    icon: "fas fa-check-circle",
    color: "#28a745",
  },
  {
    id: "benefits",
    title: "Benefits",
    icon: "fas fa-star",
    color: "#17a2b8",
  },
  {
    id: "process",
    title: "Process & Application",
    icon: "fas fa-tasks",
    color: "#ffc107",
  },
  {
    id: "support",
    title: "Support",
    icon: "fas fa-hands-helping",
    color: "#6f42c1",
  },
];

// Grouped FAQs by category
const faqItems = {
  about: [
    {
      id: 1,
      question: "What is MP Global?",
      answer:
        "MP Global is a cross-border bridge program launched by the Government of Madhya Pradesh through MPIDC, designed to connect Madhya Pradesh-based startups with international ecosystems.",
    },
    {
      id: 2,
      question: "Which countries are included?",
      answer:
        "The first partner country is Germany. Other countries will be announced soon.",
    },
  ],
  eligibility: [
    {
      id: 3,
      question: "Who can participate in MP Global?",
      answer: `Eligible participants include:
      • Startups based in Madhya Pradesh
      • Startups from Germany or partner countries
      • Investors, incubators, corporates
      • Academic & research institutions`,
    },
  ],
  benefits: [
    {
      id: 4,
      question: "What are the benefits for startups?",
      answer: `Startups can access:
      • Cross-border mentorship
      • B2B matchmaking & investor connections
      • Soft landing support
      • Global innovation exposure`,
    },
    {
      id: 9,
      question: "How will German startups benefit?",
      answer: `German startups get:
      • Access to Indian markets
      • Local mentorship and incubation
      • Innovation exchange
      • Government support`,
    },
  ],
  process: [
    {
      id: 6,
      question: "How can a startup apply?",
      answer:
        "Apply via the official MP Global website or through recognized incubators. Watch for announcements under country-specific programs.",
    },
    {
      id: 5,
      question: "Is there a fee to participate?",
      answer:
        "No. The program is supported by the Government of MP. It may be free or subsidized depending on the program.",
    },
  ],
  support: [
    {
      id: 7,
      question:
        "What kind of support is provided for entering international markets?",
      answer: `Support includes:
      • Startup visa info
      • Market briefings & guidance
      • Local mentors & incubators
      • Business showcases`,
    },
    {
      id: 8,
      question: "What sectors does MP Global focus on?",
      answer: `Focus sectors:
      • Technology & AI
      • AgriTech & CleanTech
      • MedTech & Industrial Tech`,
    },
    {
      id: 10,
      question: "Who can I contact for more information?",
      answer: `Contact:
      • info@incubationmasters.com
      • 0755-2577145
      • Socials: LinkedIn, Instagram, YouTube, Facebook`,
    },
  ],
};

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("about");
  const [activeKey, setActiveKey] = useState(null);

  const toggleCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveKey(null);
  };

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section
      className="mp-section mp-section-alt"
      id="faq"
      style={{
        background: "linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div className="section-header text-center">
          <h2>
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <div className="mp-divider"></div>
          <p className="section-subtitle">
            Find answers to common questions about the MP Global Program
          </p>
        </div>

        <div className="row mt-5">
          {/* Sidebar */}
          <div className="col-lg-3">
            <div
              className="faq-categories"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
              }}
            >
              {faqCategories.map((category) => (
                <div
                  key={category.id}
                  className={`faq-category-item ${
                    activeCategory === category.id ? "active" : ""
                  }`}
                  onClick={() => toggleCategory(category.id)}
                  style={{
                    padding: "15px 20px",
                    borderBottom: "1px solid #eee",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor:
                      activeCategory === category.id
                        ? `${category.color}10`
                        : "white",
                    borderLeft:
                      activeCategory === category.id
                        ? `4px solid ${category.color}`
                        : "4px solid transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: `${category.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px",
                    }}
                  >
                    <i
                      className={category.icon}
                      style={{ color: category.color }}
                    ></i>
                  </div>
                  <span
                    style={{
                      fontWeight:
                        activeCategory === category.id ? "600" : "400",
                      color:
                        activeCategory === category.id
                          ? category.color
                          : "#333",
                    }}
                  >
                    {category.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Box */}
            <div
              className="contact-box mt-4"
              style={{
                backgroundColor: "#FFF8EE",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                borderLeft: "4px solid #FF8C00",
              }}
            >
              <h4 style={{ fontSize: "18px", fontWeight: "600" }}>
                Still have questions?
              </h4>
              <p style={{ fontSize: "14px", color: "#666" }}>
                Contact our team for assistance.
              </p>
              <div className="d-flex align-items-center mb-2">
                <i
                  className="fas fa-envelope"
                  style={{ color: "#FF8C00", marginRight: "10px" }}
                ></i>
                <span>exportcell@mpidc.co.in</span>
              </div>
              <div className="d-flex align-items-center">
                <i
                  className="fas fa-phone-alt"
                  style={{ color: "#FF8C00", marginRight: "10px" }}
                ></i>
                <span>0755-2577145</span>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="col-lg-9">
            <div
              className="faq-content"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "30px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
              }}
            >
              <h3
                style={{
                  color: faqCategories.find((c) => c.id === activeCategory)
                    .color,
                  marginBottom: "25px",
                  fontSize: "24px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i
                  className={
                    faqCategories.find((c) => c.id === activeCategory).icon
                  }
                  style={{ marginRight: "15px" }}
                ></i>
                {faqCategories.find((c) => c.id === activeCategory).title}
              </h3>

              <div className="accordion" id="faqAccordion">
                {faqItems[activeCategory].map((item, index) => (
                  <div
                    className="accordion-item"
                    key={index}
                    style={{
                      marginBottom: "15px",
                      border: "1px solid #eee",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
                        aria-expanded={activeKey === item.id}
                        style={{
                          padding: "15px 20px",
                          backgroundColor:
                            activeKey === item.id ? "#f8f9fa" : "white",
                          fontWeight: "600",
                          color:
                            activeKey === item.id
                              ? faqCategories.find(
                                  (c) => c.id === activeCategory
                                ).color
                              : "#333",
                          display: "flex",
                          alignItems: "center",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            width: "30px",
                            height: "30px",
                            backgroundColor:
                              activeKey === item.id
                                ? faqCategories.find(
                                    (c) => c.id === activeCategory
                                  ).color
                                : "#eee",
                            color: activeKey === item.id ? "#fff" : "#666",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            fontWeight: "bold",
                            marginRight: "15px",
                          }}
                        >
                          Q
                        </span>
                        {item.question}
                        <i
                          className={`fas ${
                            activeKey === item.id
                              ? "fa-chevron-up"
                              : "fa-chevron-down"
                          }`}
                          style={{
                            position: "absolute",
                            right: "20px",
                            color: "#999",
                          }}
                        ></i>
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${
                        activeKey === item.id ? "show" : ""
                      }`}
                    >
                      <div
                        className="accordion-body"
                        style={{
                          padding: "20px",
                          paddingLeft: "65px",
                          color: "#666",
                          lineHeight: "1.7",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: "20px",
                            top: "20px",
                            width: "30px",
                            height: "30px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#f5f5f5",
                            color: faqCategories.find(
                              (c) => c.id === activeCategory
                            ).color,
                            borderRadius: "50%",
                            fontWeight: "bold",
                          }}
                        >
                          A
                        </span>
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

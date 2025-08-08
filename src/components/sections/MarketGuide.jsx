import React from "react";

const features = [
  {
    text: "Types of Business",
    icon: "fas fa-building",
  },
  {
    text: "Company Incorporation",
    icon: "fas fa-globe",
  },
  {
    text: "Indian Startup Ecosystem",
    icon: "fas fa-map-marked-alt",
  },
  {
    text: "Visa Types & Processes",
    icon: "fas fa-lightbulb",
  },
  {
    text: "Government Initiatives",
    icon: "fas fa-user-graduate",
  },
  {
    text: "Company Incorporation",
    icon: "fas fa-building",
  },
  {
    text: "New Opportunities For Startups",
    icon: "fas fa-users",
  },
  {
    text: "Simplified Regulations For Startups",
    icon: "fas fa-language",
  },
  {
    text: "State & Sector Opportunities",
    icon: "fas fa-language",
  },
  {
    text: "Trade Policies",
    icon: "fas fa-language",
  },
];

const MarketGuideCircle = () => {
  return (
    <section
      className="py-5 bg-light text-center position-relative"
      id="market-guide"
    >
      <div className="mp-art-pattern-top mb-5"></div>
      <div className="text-center mb-5">
        <h2 className="fw-bold fs-1">
          Go-to-
          <span
            className="badge text-white fs-1 fw-bold"
            style={{
              backgroundColor: "#1a1c3c",
              borderRadius: "10px",
              padding: "6px 12px",
              marginLeft: "5px",
              fontSize: "1.5rem",
            }}
          >
            Market Guide
          </span>
        </h2>
        <h4 className="mt-3">
          <span className="fw-bold" style={{ color: "#d67933" }}>
            INDIA
          </span>{" "}
          & <span className="fw-bold text-dark">GERMANY</span>
        </h4>
      </div>

      {/* Circular Layout (Only on md and above) */}
      <div
        className="container position-relative d-none d-md-block"
        style={{ height: "600px" }}
      >
        {/* Center Image */}
        <div
          className="position-absolute top-50 start-50 translate-middle"
          style={{ width: "300px", height: "300px", zIndex: 2 }}
        >
          <img
            src="/assets/germany.gif"
            alt="Market Guide"
            className="img-fluid rounded-circle"
            style={{ width: "100%", height: "90%", objectFit: "contain" }}
          />
        </div>

        {/* Features Around the Circle */}
        <div className="position-absolute top-50 start-50 translate-middle w-100 h-100">
          {features.map((item, index) => {
            const angle = (index / features.length) * 360;
            const radius = 290;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={index}
                className="position-absolute text-center"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                  width: "160px",
                }}
              >
                <div
                  className="p-2 bg-white border rounded shadow-sm d-flex flex-column align-items-center"
                  style={{ fontSize: "0.85rem", minHeight: "100px" }}
                >
                  <i
                    className={`${item.icon} mb-2`}
                    style={{ fontSize: "1.4rem", color: "#ff9800" }}
                  ></i>
                  <span>{item.text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile View (Stacked Layout) */}
      <div className="container d-block d-md-none">
        <div className="row g-3">
          {features.map((item, index) => (
            <div key={index} className="col-12">
              <div className="p-3 bg-white border rounded shadow-sm d-flex align-items-center gap-3">
                <i
                  className={`${item.icon}`}
                  style={{
                    fontSize: "1.5rem",
                    color: "#ff9800",
                    minWidth: "24px",
                  }}
                ></i>
                <span className="text-start" style={{ fontSize: "0.95rem" }}>
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketGuideCircle;

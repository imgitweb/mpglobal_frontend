import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const IndustrialSnapshot = () => {
  const [activeView, setActiveView] = useState("india"); // default for small screens
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const facts = [
    {
      mp: "Strategically located at the heart of India.",
      germany: "Strategically located in the heart of Europe.",
      icon: "🌍",
      color: "#4ECDC4",
    },
    {
      mp: 'Known as the "Detroit of India" with a strong auto hub in Pithampur.',
      germany:
        "Global automotive powerhouse — home to BMW, Audi, VW, and Mercedes-Benz.",
      icon: "🚗",
      color: "#FF6B6B",
    },
    {
      mp: "Rich in minerals with Asia's only diamond mine.",
      germany:
        "World leader in precision engineering and industrial machinery.",
      icon: "💎",
      color: "#FFE66D",
    },
    {
      mp: "Major producer of wheat, pulses, and oilseeds fueling food processing industries.",
      germany:
        "Renowned for high-tech food processing and packaging equipment.",
      icon: "🌾",
      color: "#95E1D3",
    },
    {
      mp: "Houses over 70+ industrial areas and parks.",
      germany: "Hosts over 3,000 industrial clusters across federal states.",
      icon: "🏭",
      color: "#A8E6CF",
    },
    {
      mp: "Fast-growing pharmaceutical hub (Indore, Dewas).",
      germany:
        "Home to pharmaceutical giants like Bayer and Boehringer Ingelheim.",
      icon: "💊",
      color: "#C7CEEA",
    },
    {
      mp: "Leading textile manufacturing state with dedicated parks.",
      germany: "Advanced textile technology and fashion manufacturing hub.",
      icon: "🧵",
      color: "#FFDAC1",
    },
    {
      mp: "Rapidly growing renewable energy capacity, especially solar.",
      germany: "Global leader in green energy and sustainability innovation.",
      icon: "⚡",
      color: "#B5EAD7",
    },
    {
      mp: "Industrial corridors like DMIC and logistics hubs fuel growth.",
      germany: "Highly developed logistics and export-oriented manufacturing.",
      icon: "🚚",
      color: "#FFB7B2",
    },
    {
      mp: "Offers low operational costs with high potential.",
      germany: "Offers high-tech infrastructure with premium quality output.",
      icon: "💰",
      color: "#FFDAB9",
    },
  ];

  return (
    <section id="quickFacts">
      <div className="mp-art-pattern-top"></div>
      <div className="text-center mt-3 mb-3">
        <h1 className="display-4 fw-bold mb-3" style={{ color: "#FF9800" }}>
          Quick Facts
        </h1>
        <h2 className="h3 text-dark mb-4">Madhya Pradesh & Germany</h2>
      </div>
      <div className="position-relative min-vh-100">
        <div className="position-absolute w-100 h-100 overflow-hidden">
          <div
            className="position-absolute h-100"
            style={{
              left: 0,
              width: "50%",
              backgroundImage:
                'linear-gradient(rgba(255,152,0,0.85), rgba(255,152,0,0.85)), url("/assets/madhyaPradesh.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Germany side background */}
          <div
            className="position-absolute h-100"
            style={{
              right: 0,
              width: "50%",
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Mobile background overlay */}
          {isMobile && (
            <div
              className="position-absolute w-100 h-100"
              style={{
                backgroundImage:
                  activeView === "india"
                    ? 'linear-gradient(rgba(255,152,0,0.85), rgba(255,152,0,0.85)), url("/assets/madhyaPradesh.png")'
                    : 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 1,
              }}
            />
          )}
        </div>

        <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
          {/* Header */}
          <div className="text-center mb-5">
            {/* Toggle Buttons (visible only on mobile) */}
            {isMobile && (
              <div className="d-flex justify-content-center gap-3 mt-3">
                <button
                  className={`btn ${
                    activeView === "india" ? "btn-warning" : "btn-outline-light"
                  }`}
                  onClick={() => setActiveView("india")}
                >
                  Madhya Pradesh
                </button>
                <button
                  className={`btn ${
                    activeView === "germany"
                      ? "btn-light text-dark"
                      : "btn-outline-light"
                  }`}
                  onClick={() => setActiveView("germany")}
                >
                  Germany
                </button>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="row position-relative">
            {/* India Column */}
            {(!isMobile || activeView === "india") && (
              <div className="col-lg-5 d-flex flex-column justify-content-center">
                {/* Country Header */}
                <div className="text-center text-lg-end mb-4">
                  <div className="mb-3">
                    {/* <span
                      className="badge rounded-pill px-3 py-2 fs-6 fw-bold"
                      style={{ backgroundColor: "#FF9800", color: "white" }}
                    >
                      IN
                    </span> */}
                  </div>
                  <h3 className="text-white fw-bold mb-0 text-center">
                    MADHYA PRADESH
                  </h3>
                </div>

                {/* Facts */}
                <div className="text-lg-end">
                  {facts.map((fact, index) => (
                    <div key={index} className="mb-4">
                      <p className="mb-0 fs-5 text-white fw-normal text-end pe-4">
                        {fact.mp}
                      </p>
                      {index < facts.length - 1 && (
                        <hr
                          className="text-white opacity-25 ms-auto"
                          style={{ width: "80%" }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Center Timeline */}
            {!isMobile && (
              <div className="col-lg-2 d-flex justify-content-center">
                <div className="position-relative d-flex flex-column justify-content-center align-items-center h-100">
                  {/* Main Timeline Line */}
                  <div
                    className="position-absolute"
                    style={{
                      width: "4px",
                      height: "80%",
                      backgroundColor: "#ffffff",
                      top: "10%",
                    }}
                  />

                  {/* Timeline Icons */}
                  <div className="d-flex flex-column justify-content-around h-100 py-5">
                    {facts.map((fact, index) => (
                      <div
                        key={index}
                        className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold position-relative"
                        style={{
                          backgroundColor: fact.color,
                          width: "60px",
                          height: "60px",
                          fontSize: "1.5rem",
                          border: "4px solid white",
                          zIndex: 3,
                        }}
                      >
                        {fact.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Germany Column */}
            {(!isMobile || activeView === "germany") && (
              <div className="col-lg-5 d-flex flex-column justify-content-center">
                {/* Country Header */}
                <div className="text-center text-lg-start mb-4">
                  <div className="mb-3">
                    {/* <span
                      className="badge rounded-pill px-3 py-2 fs-6 fw-bold"
                      style={{ backgroundColor: "#000", color: "white" }}
                    >
                      DE
                    </span> */}
                  </div>
                  <h3
                    className="text-white fw-bold mb-0 text-center"
                    // style={{
                    //   fontSize: "2rem",
                    //   transform: "rotate(90deg)",
                    //   transformOrigin: "center",
                    //   writingMode: "vertical-lr",
                    //   textOrientation: "mixed",
                    // }}
                  >
                    GERMANY
                  </h3>
                </div>

                {/* Facts */}
                <div className="text-lg-start">
                  {facts.map((fact, index) => (
                    <div key={index} className="mb-4">
                      <p className="mb-0 fs-5 text-white fw-normal text-start ps-4">
                        {fact.germany}
                      </p>
                      {index < facts.length - 1 && (
                        <hr
                          className="text-white opacity-25 me-auto"
                          style={{ width: "80%" }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Statistics Section */}
          {!isMobile && (
            <div className="row mt-5">
              <div className="col-12">
                <div className="bg-white bg-opacity-10 backdrop-blur rounded p-4">
                  <div className="row text-center">
                    <div className="col-md-3 mb-3">
                      <div className="text-white">
                        <h4 className="fw-bold text-warning">70+</h4>
                        <p className="mb-0">Industrial Areas (MP)</p>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="text-white">
                        <h4 className="fw-bold text-info">3,000+</h4>
                        <p className="mb-0">Industrial Clusters (Germany)</p>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="text-white">
                        <h4 className="fw-bold text-success">Asia's Only</h4>
                        <p className="mb-0">Diamond Mine (MP)</p>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="text-white">
                        <h4 className="fw-bold text-danger">Global Leader</h4>
                        <p className="mb-0">Automotive (Germany)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Custom CSS */}
        <style jsx>{`
          .backdrop-blur {
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }

          @media (max-width: 991px) {
            .col-lg-2 {
              display: none !important;
            }

            h3[style*="rotate"] {
              transform: none !important;
              writing-mode: horizontal-tb !important;
              text-orientation: mixed !important;
              text-align: center !important;
            }
          }

          .min-vh-100 {
            min-height: 100vh;
          }

          /* Smooth transitions */
          .position-absolute {
            transition: all 0.3s ease;
          }

          /* Text alignment adjustments */
          @media (min-width: 992px) {
            .text-lg-end {
              text-align: end !important;
            }
            .text-lg-start {
              text-align: start !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default IndustrialSnapshot;

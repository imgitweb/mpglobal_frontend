import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const IndustrialSnapshot = () => {
  const [activeView, setActiveView] = useState("india");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    <section className="min-vh-100 position-relative" id="quickFacts">
      <div className="mp-art-pattern-top mb-5"></div>
      <div className="text-center">
        <h2 className="fw-bold text-warning">Quick Facts</h2>
        <h4 className="text-dark">Madhya Pradesh & Germany</h4>
      </div>

      {/* Background */}
      <div className="position-absolute w-100 h-100 overflow-hidden">
        <div
          className="position-absolute h-100"
          style={{
            left: 0,
            width: "50%",
            zIndex: 0,
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.9), rgba(240, 190, 120, 0.9))",
          }}
        />
        <div
          className="position-absolute h-100"
          style={{
            right: 0,
            width: "50%",
            zIndex: 0,
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Mobile background */}
        {isMobile && (
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              backgroundImage:
                activeView === "india"
                  ? "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))"
                  : 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
            }}
          />
        )}
      </div>

      <div className="container position-relative py-5" style={{ zIndex: 2 }}>
        <div className="text-center mb-4">
          {/* Toggle Buttons (Mobile Only) */}
          {isMobile && (
            <div className="mt-3 d-flex justify-content-center gap-3">
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
                    ? "btn-light text-light"
                    : "btn-outline-dark"
                }`}
                onClick={() => setActiveView("germany")}
              >
                Germany
              </button>
            </div>
          )}
        </div>

        {/* Facts */}
        <div className="row">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="row align-items-center mb-4 text-center text-lg-start"
            >
              {/* MP Fact */}
              {(!isMobile || activeView === "india") && (
                <div className="col-lg-5">
                  <p className="mb-0 fs-5 text-dark">{fact.mp}</p>
                  <hr />
                </div>
              )}

              {/* Icon */}
              {!isMobile && (
                <div className="col-lg-2 d-flex justify-content-center">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                    style={{
                      backgroundColor: fact.color,
                      width: "60px",
                      height: "60px",
                      fontSize: "1.5rem",
                      border: "4px solid white",
                    }}
                  >
                    {fact.icon}
                  </div>
                </div>
              )}

              {/* Germany Fact */}
              {(!isMobile || activeView === "germany") && (
                <div className="col-lg-5">
                  <p className="mb-0 fs-5 text-white">{fact.germany}</p>
                  <hr />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Stats (Desktop Only) */}
        {!isMobile && (
          <div className="row mt-5">
            <div className="col-12">
              <div className="bg-white bg-opacity-10 backdrop-blur rounded p-4">
                <div className="row text-center">
                  <div className="col-md-3 mb-3 text-white">
                    <h4 className="fw-bold text-warning">70+</h4>
                    <p>Industrial Areas (MP)</p>
                  </div>
                  <div className="col-md-3 mb-3 text-white">
                    <h4 className="fw-bold text-info">3,000+</h4>
                    <p>Industrial Clusters (Germany)</p>
                  </div>
                  <div className="col-md-3 mb-3 text-white">
                    <h4 className="fw-bold text-success">Asia's Only</h4>
                    <p>Diamond Mine (MP)</p>
                  </div>
                  <div className="col-md-3 mb-3 text-white">
                    <h4 className="fw-bold text-danger">Global Leader</h4>
                    <p>Automotive (Germany)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CSS */}
        <style>{`
          .min-vh-100 {
            min-height: 100vh;
          }
          .backdrop-blur {
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
        `}</style>
      </div>
    </section>
  );
};

export default IndustrialSnapshot;

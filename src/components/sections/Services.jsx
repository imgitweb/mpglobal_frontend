import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MPGlobalServices = () => {
  const [activeHover, setActiveHover] = useState(null);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const services = [
    {
      id: 1,
      icon: "💎",
      title: "Cross-Border Startup Matchmaking",
      description:
        "Connect with complementary startups, partners, and innovators from India and Germany to explore synergies and co-create impactful solutions.",
      color: "#FF9800",
    },
    {
      id: 2,
      icon: "🌍",
      title: "International Collaboration Opportunities",
      description:
        "Participate in joint projects, pilots, and co-development initiatives between Indian and German enterprises, academia, and institutions.",
      color: "#4CAF50",
    },
    {
      id: 3,
      icon: "✈️",
      title: "Market Access & Soft-Landing Support",
      description:
        "Receive hands-on assistance for entering new markets, including regulatory guidance, workspace access, and on-ground support.",
      color: "#2196F3",
    },
    {
      id: 4,
      icon: "💡",
      title: "Innovation Exchange Programs",
      description:
        "Engage in structured exchange programs to share cutting-edge technologies, business models, and R&D capabilities across borders.",
      color: "#FFC107",
    },
    {
      id: 5,
      icon: "🎓",
      title: "Mentorship & Capacity Building",
      description:
        "Learn from global experts through mentorship, workshops, and training programs designed to accelerate startup growth and innovation.",
      color: "#9C27B0",
    },
    {
      id: 6,
      icon: "🏢",
      title: "Access to Incubation & Government Schemes",
      description:
        "Tap into startup incubators and benefit from bilateral government initiatives that support cross-border entrepreneurship and innovation.",
      color: "#00BCD4",
    },
    {
      id: 7,
      icon: "🎯",
      title: "Virtual and In-Person Networking Events",
      description:
        "Join curated events, webinars, and business delegations to meet potential collaborators, investors, and industry leaders.",
      color: "#795548",
    },
    {
      id: 8,
      icon: "🌐",
      title: "Cultural & Business Integration Support",
      description:
        "Get help navigating cultural nuances and business practices to ensure smooth integration and successful partnerships across markets.",
      color: "#607D8B",
    },
  ];

  return (
    <div className="bg-light min-vh-100">
      {/* Services Section */}
      <section className="py-5" id="service">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-3">
              What Makes MP Global Different?
            </h1>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="bg-white rounded-4 shadow-sm p-4 mb-4">
                  <div className="row text-start">
                    <div className="col-md-4 mb-3">
                      <h5 className="fw-bold text-warning">
                        🔄 Boundaries Redefined: Collaboration
                      </h5>
                      <p className="text-muted mb-0">
                        We don't just connect — we collaborate. MP Global brings
                        together real startups, real investors, and real market
                        access across India and Germany.
                      </p>
                    </div>
                    <div className="col-md-4 mb-3">
                      <h5 className="fw-bold text-success">
                        🚀 Built for Builders: Innovation
                      </h5>
                      <p className="text-muted mb-0">
                        From AgriTech to Aerospace, from SaaS to Sustainable
                        Energy — we support future-ready sectors shaping the
                        global economy.
                      </p>
                    </div>
                    <div className="col-md-4 mb-3">
                      <h5 className="fw-bold text-primary">
                        🌍 A Community Without Borders: Expansion
                      </h5>
                      <p className="text-muted mb-0">
                        Think beyond demo days — our global startup network
                        thrives on shared growth, mentorship, and co-creation
                        opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-lg-3 col-md-6">
                <div
                  className={`card h-100 border-0 shadow-sm position-relative overflow-hidden transition-all ${
                    activeHover === service.id ? "shadow-lg" : ""
                  }`}
                  style={{
                    transform:
                      activeHover === service.id
                        ? "translateY(-10px)"
                        : "translateY(0)",
                    transition: "all 0.3s ease-in-out",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setActiveHover(service.id)}
                  onMouseLeave={() => setActiveHover(null)}
                >
                  {/* Left Border */}
                  <div
                    className="position-absolute top-0 start-0 h-100"
                    style={{
                      width: "4px",
                      backgroundColor: service.color,
                    }}
                  />

                  <div className="card-body p-4">
                    {/* Icon */}
                    <div className="mb-3">
                      <span
                        className="d-inline-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: service.color + "20",
                          fontSize: "1.5rem",
                        }}
                      >
                        {service.icon}
                      </span>
                    </div>

                    {/* Title */}
                    <h5
                      className="card-title fw-bold mb-3"
                      style={{ color: service.color }}
                    >
                      {service.title}
                    </h5>

                    {/* Description */}
                    <p className="card-text text-muted">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div
                    className={`position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center ${
                      activeHover === service.id ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                      transition: "opacity 0.3s ease-in-out",
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: service.color,
                        color: "white",
                        fontSize: "2rem",
                      }}
                    >
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .transition-all {
          transition: all 0.3s ease-in-out;
        }

        .accordion-button:focus {
          box-shadow: none;
          border: none;
        }

        .accordion-button:not(.collapsed) {
          background-color: #ff9800;
          color: white;
        }

        .accordion-button::after {
          transition: transform 0.3s ease-in-out;
        }

        .card:hover {
          transform: translateY(-2px);
        }

        .accordion-item:hover .card {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
        }

        /* Custom scrollbar for better UX */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #ff9800;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #f57c00;
        }
      `}</style>
    </div>
  );
};

export default MPGlobalServices;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MPGlobalServices = () => {
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

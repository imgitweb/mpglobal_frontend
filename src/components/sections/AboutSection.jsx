import React from "react";
const mplogo = "assets/m_p_map.png";

const AboutSection = () => {
  return (
    <section className="mp-section" id="about">
      <div className="container">
        <div className="section-header text-center">
          <h2>
            A Cross-Border Platform for Startup Collaboration & Innovation
          </h2>
          <div className="mp-divider"></div>
        </div>

        <div className="row mt-5 align-items-center">
          <div className="col-lg-6 pb-5">
            <div className="about-image-container">
              <div className="image-frame">
                <div className="mp-art-border">
                  <img
                    src={mplogo}
                    alt="MP Craft Heritage"
                    className="img-fluid"
                  />
                </div>
                <div className="frame-decoration frame-decoration-1"></div>
                <div className="frame-decoration frame-decoration-2"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content">
              <div className="intro-text">
                <p>
                  Ready to showcase your unique Madhya Pradesh product to the
                  world? Your global journey begins here.
                </p>
              </div>

              <p className="about-description">
                MP Global is a dynamic platform designed to connect startups,
                incubators, investors, and ecosystem enablers from Madhya
                Pradesh (India) and Germany. We enable global partnerships,
                technology collaborations, market access, and knowledge exchange
                between two thriving startup ecosystems.
              </p>

              <div className="join-section">
                <h4 className="section-subheading">
                  <span className="icon-circle">?</span>
                  Our Vision.
                </h4>
                <p>
                  To create a seamless innovation bridge where German precision
                  meets Indian scalability, enabling startups from both regions
                  to co-create global impact solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="features-section">
              <h4 className="section-subheading">
                <span className="icon-circle">
                  <i className="fas fa-star"></i>
                </span>
                Why MP Global?
              </h4>

              <div className="feature-items">
                <div className="feature-item">
                  <div className="feature-icon">🚀</div>
                  <div className="feature-content">
                    <h5>Cross-Border Partnerships :</h5>
                    <ul>
                      <li>
                        Facilitate collaboration between German and MP-based
                        startups.
                      </li>
                      <li>
                        Enable co-development of products, technology exchange,
                        and joint ventures.
                      </li>
                      <li>
                        Open up market access opportunities in both India and
                        Europe.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">💡</div>
                  <div className="feature-content">
                    <h5>Empowering Innovation Ecosystems:</h5>
                    <ul>
                      <li>
                        Connect with India’s fastest-growing startup hubs in
                        Madhya Pradesh.
                      </li>
                      <li>
                        Engage with incubators, accelerators, research bodies,
                        and industry leaders.
                      </li>
                      <li>
                        Explore emerging sectors like AI, Agritech, Clean
                        Energy, Social Impact, and Digital Manufacturing.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">💰</div>
                  <div className="feature-content">
                    <h5>Building Global Networks:</h5>
                    <ul>
                      <li>
                        Network with startups, investors, corporate innovation
                        teams, and policymakers.
                      </li>
                      <li>
                        Join a global community of entrepreneurs, innovators,
                        and mentors.
                      </li>
                      <li>
                        Participate in virtual events, business matchmaking, and
                        collaborative projects.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <div className="feature-item">
                  <div className="feature-icon">🔄</div>
                  <div className="feature-content">
                    <h5>Complete Transformation:</h5>
                    <p>
                      Walk in with a product; walk out with a brand that's ready
                      to conquer global markets.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="cta-section">
              <div className="cta-pattern"></div>
              <div className="cta-content">
                <h4>Are You Ready?</h4>
                <p>
                  Join the elite community of MP artisans and entrepreneurs who
                  are already watching their district products capture hearts
                  worldwide.
                </p>
                <button className="register-btn">
                  {" "}
                  <a
                    href="#apply"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Register Today{" "}
                  </a>
                </button>
                <p className="cta-footnote">
                  Start your journey from village workshops to global
                  marketplaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

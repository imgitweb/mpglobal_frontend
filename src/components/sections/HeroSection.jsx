import React from "react";

const HeroSection = ({ useVideo = false }) => {
  return (
    <section
      className="position-relative overflow-hidden"
      id="home"
      style={{
        minHeight: "80vh",
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, #fff 100%)",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 1 }}
      >
        {useVideo ? (
          <video
            autoPlay
            muted
            loop
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          >
            <source
              src="../../assets/videos/hero-background.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="position-relative w-100 h-100">
            <img
              src="assets/background_image.png"
              alt="Background"
              className="w-100 h-100"
              style={{ objectFit: "cover", opacity: 0.3 }}
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, #fff 100%)",
              }}
            ></div>
          </div>
        )}
      </div>
      <div className="position-relative" style={{ zIndex: 2 }}>
        <div className="container-fluid">
          <div
            className="row align-items-center  min-vh-70 py-5"
            style={{ marginTop: "9%" }}
          >
            <div className="col-lg-7 col-xl-6">
              <div className="pe-lg-4 mx-5">
                <div className="mb-4">
                  <span
                    className="badge px-3 py-2 fs-6 fw-semibold text-uppercase"
                    style={{
                      background: "rgba(248, 152, 26, 0.1)",
                      color: "#f8981a",
                      border: "1px solid rgba(248, 152, 26, 0.2)",
                      borderRadius: "20px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    International Partnership Initiative
                  </span>
                </div>

                <h1
                  className="display-3 fw-bold mb-4"
                  style={{ lineHeight: "1.1", color: "#1a1a1a" }}
                >
                  <div
                    className="d-block mb-2"
                    style={{ color: "#f8981a", fontSize: "3rem" }}
                  >
                    MP - Germany
                  </div>
                  <div
                    className="d-block fs-2"
                    style={{
                      background:
                        "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    MP Global Accelerator
                  </div>
                </h1>

                <p
                  className="fs-5 lh-lg text-muted mb-0"
                  style={{ maxWidth: "500px" }}
                >
                  Your launchpad to a cross-continental innovation journey.
                </p>
              </div>
            </div>

            {/* <div className="col-lg-5 col-xl-6 d-none d-lg-flex justify-content-center align-items-center">
              <div
                className="bg-white rounded-4 p-4 shadow-lg border w-100"
                style={{
                  maxWidth: "320px",
                  backdropFilter: "blur(10px)",
                  background: "rgba(255, 255, 255, 0.95)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <div className="text-center mb-4">
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <div
                      style={{
                        width: "40px",
                        height: "30px",
                        background:
                          "linear-gradient(to bottom, #ff9933 33.33%, #ffffff 33.33%, #ffffff 66.66%, #138808 66.66%)",
                      }}
                      className="rounded border"
                    ></div>
                    <span
                      className="fw-bold"
                      style={{ fontSize: "1.5rem", color: "#f8981a" }}
                    >
                      ⟷
                    </span>
                    <div
                      style={{
                        width: "40px",
                        height: "30px",
                        background:
                          "linear-gradient(to bottom, #000000 33.33%, #dd0000 33.33%, #dd0000 66.66%, #ffce00 66.66%)",
                      }}
                      className="rounded border"
                    ></div>
                  </div>
                </div>

                <div className="text-center">
                  <div
                    className="display-6 fw-bold mb-2"
                    style={{ color: "#f8981a" }}
                  >
                    25+
                  </div>
                  <div className="small text-muted fw-medium">
                    Partnership Programs
                  </div>
                </div>
              </div>
            </div> */}

            {/* Right Column (Mobile View) */}
            {/* <div className="col-12 mt-5 d-lg-none d-flex justify-content-center">
              <div
                className="bg-white rounded-4 p-4 shadow-lg border w-100"
                style={{
                  maxWidth: "320px",
                  backdropFilter: "blur(10px)",
                  background: "rgba(255, 255, 255, 0.95)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <div className="text-center mb-3">
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <div
                      className="rounded border"
                      style={{
                        width: "35px",
                        height: "25px",
                        background:
                          "linear-gradient(to bottom, #ff9933 33.33%, #ffffff 33.33%, #ffffff 66.66%, #138808 66.66%)",
                      }}
                    ></div>
                    <span
                      className="fw-bold"
                      style={{ fontSize: "1.25rem", color: "#f8981a" }}
                    >
                      ⟷
                    </span>
                    <div
                      className="rounded border"
                      style={{
                        width: "35px",
                        height: "25px",
                        background:
                          "linear-gradient(to bottom, #000000 33.33%, #dd0000 33.33%, #dd0000 66.66%, #ffce00 66.66%)",
                      }}
                    ></div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="h4 fw-bold mb-1" style={{ color: "#f8981a" }}>
                    25+
                  </div>
                  <div className="small text-muted fw-medium">
                    Partnership Programs
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

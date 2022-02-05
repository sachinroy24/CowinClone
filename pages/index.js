import Head from "next/head";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="d-flex justify-content-center">
          <a
            href="/login"
            className="btn btn-outline-primary btn-lg"
            style={{ marginTop: "70px" }}
          >
            Login to User Dashboard
          </a>
        </div>
        <div
          className="bg-light"
          style={{ height: "500px", marginTop: "100px" }}
        >
          <div className="d-flex justify-content-center">
            <h3 style={{ marginTop: "50px" }}>
              Get Vaccinated in 3 Easy Steps
            </h3>
          </div>
          <div
            style={{
              marginLeft: "300px",
              marginRight: "300px",
              marginTop: "30px",
            }}
          >
            <div className="row  row-cols-md-3 g-4">
              <div className="col">
                <div className="card">
                  <img
                    src="https://media.istockphoto.com/vectors/mobile-user-profile-line-icon-concept-vector-id950182166?k=20&m=950182166&s=612x612&w=0&h=17EwNij5JW9kFNw-bEhY-1yy_vaZ4Ox5uE09qUmU_Rg="
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-primary">
                          STEP-1
                        </button>
                      </div>
                    </h5>
                    <p className="card-text">
                      Book an appointment on Co-win or Walk into any centre.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="data:image/png;base64,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"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-primary">
                          STEP-2
                        </button>
                      </div>
                    </h5>
                    <p className="card-text">
                      Get Your Vaccination safely at time of your appointment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://c8.alamy.com/comp/2F38WDP/vaccination-passport-icon-vector-with-male-user-person-profile-avatar-symbol-for-medical-and-healthcare-certificate-in-a-glyph-pictogram-illustration-2F38WDP.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-primary">
                          STEP-3
                        </button>
                      </div>
                    </h5>
                    <p className="card-text">
                      Download your certificate from cowin and wait for dose-2.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ height: "400px", marginTop: "60px" }}
          className="bg-white"
        >
          <div className="row">
            <div className="col-md-7">
              <div style={{ marginLeft: "200px" }}>
                <h3 style={{ marginTop: "70px" }}>
                  Precaution Dose and Children Vaccination
                </h3>
                <article style={{ marginTop: "40px" }}>
                  Protect our Senior Citizens and Children. Precaution Dose is
                  available for fully vaccinated HCW/FLW and Senior Citizens
                  (60+ yrs) after 39 weeks from the 2nd dose. Citizens aged 60
                  years or more and having co-morbidities, should take
                  precaution dose, only after medical advice. Also, getting your
                  Children(15-18 yrs) vaccinated is the best thing you can do to
                  protect your child against COVID-19. Both online and walk-in
                  are available.
                </article>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-primary"
                    style={{ marginTop: "30px" }}
                  >
                    Book Your Slot
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div>
                <img src="https://st3.depositphotos.com/6064568/13768/v/600/depositphotos_137685578-stock-illustration-hospital-medical-staff-team-doctors.jpg"></img>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "500px",
            backgroundColor: "#007c7c",
            color: "white",
          }}
        >
          <div className="d-flex justify-content-center">
            <h3 style={{ marginTop: "50px" }}>Raise An Issue</h3>
          </div>
          <div className="d-flex justify-content-center">
            <p>
              Raise an issue or get solutions to your Co-WIN account and
              vaccination certificate related issues instantly.
            </p>
          </div>
          <div style={{ marginLeft: "50px", marginRight: "50px" }}>
            <div className="row  row-cols-md-5 g-4">
              <div className="col">
                <div className="card border-success mb-3 h-100 border border-rounded">
                  <div
                    className="card-header d-flex justify-content-center"
                    style={{ color: "#007c7c" }}
                  >
                    Certificate Correction
                  </div>
                  <div className="card-body text-dark d-flex justify-content-center">
                    <p className="card-text">
                      If your vaccination certificate is showing incorrect name,
                      gender, birth year or ID details, you can raise an issue
                      using “Certificate Correction”. Using this you can correct
                      any two fields at a time on the vaccination certificate
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-success mb-3 h-100">
                  <div
                    className="card-header d-flex justify-content-center"
                    style={{ color: "#007c7c" }}
                  >
                    Merge Certificates
                  </div>
                  <div className="card-body text-dark d-flex justify-content-center">
                    <p className="card-text">
                      In case you have multiple certificates of Dose 1 generated
                      from different accounts, you can merge them into the final
                      vaccination certificate.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-success mb-3 h-100">
                  <div
                    className="card-header d-flex justify-content-center"
                    style={{ color: "#007c7c" }}
                  >
                    Add Passport
                  </div>
                  <div className="card-body text-dark d-flex justify-content-center">
                    <p className="card-text">
                      You can link your passport to your vaccination
                      certificate. By adding a passport to your vaccination
                      certificate you can submit a request and get an
                      international travel certificate.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-success mb-3 h-100">
                  <div
                    className="card-header d-flex justify-content-center"
                    style={{ color: "#007c7c" }}
                  >
                    Report Unknown Member
                  </div>
                  <div className="card-body text-dark d-flex justify-content-center">
                    <p className="card-text">
                      You can link your passport to your vaccination
                      certificate. By adding a passport to your vaccination
                      certificate you can submit a request and get an
                      international travel certificate.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-success mb-3 h-100">
                  <div
                    className="card-header d-flex justify-content-center"
                    style={{ color: "#007c7c" }}
                  >
                    Report Technical Bug
                  </div>
                  <div className="card-body text-dark d-flex justify-content-center">
                    <p className="card-text">
                      You can transfer members associated with your existing
                      account to the new mobile number.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#00b3b3",
            height: "400px",
            color: "white",
          }}
        >
          <div
            className="row"
            style={{
              marginLeft: "150px",
              marginRight: "100px",
              paddingTop: "100px",
            }}
          >
            <div className="col-md-2">
              <h4>
                <a>Vaccine Service</a>
              </h4>
              <div style={{ marginTop: "10px" }}>
                <a>Register Members</a>
              </div>
              <div style={{ marginTop: "10px" }}>
                <a>Search Vaccination Centers</a>
              </div>
              <div style={{ marginTop: "10px" }}>
                <a>Book Vaccination Slots</a>
              </div>
              <div style={{ marginTop: "10px" }}>
                <a>Manage Appointments</a>
              </div>
            </div>
            <div className="col-md-2">
              <h4>
                <a>Platforms</a>
              </h4>
              <div style={{ marginTop: "10px" }}>
                <a>Cowin International</a>
              </div>
              <div style={{ marginTop: "10px" }}>
                <a>Vaccinator</a>
              </div>
              <div style={{ marginTop: "10px" }}>
                <a>Department Login</a>
              </div>
              <div style={{ marginTop: "10px" }}>
                <a>Verify Certificates</a>
              </div>
            </div>
            <div className="col-md-4">
              <h4>
                <a>Resources</a>
              </h4>
              <div style={{ marginTop: "10px" }}>
                <a>How to get vaccinated</a>
              </div>
              <div style={{ marginTop: "10px" }}>
                <a>Dos and Don'ts</a>
              </div>
              <div style={{ marginTop: "10px" }}>
                <a>Overview</a>
              </div>
              <div style={{ marginTop: "10px" }}>
                <a>API Guidelines</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-between">
                <h4>Support</h4>
                <h4>Contact Us</h4>
              </div>

              <div className="d-flex justify-content-between">
                <p>Frequently Asked Questions</p>
                <p>Helpline: +91-11-23978046 </p>
              </div>

              <div className="d-flex justify-content-between">
                <p>Certificate Correction</p>
                <p>Technical Helpline: 0120-4783222</p>
              </div>

              <hr></hr>
              <div className="d-flex justify-content-between">
                <p>Child : 1098</p>
                <p>Mental Health : 08046110007</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Senior Citizens : 14567</p>
                <p>NCW : 7827170170</p>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

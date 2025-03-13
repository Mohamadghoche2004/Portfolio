import "./Resume.css";
import { BsDownload } from "react-icons/bs";
function Resume() {
  return (
    <main className="flex-shrink-0 resume-container">
      <div className="container px-5 py-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Resume</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            {/* Experience Section*/}
            <section>
              <div className="d-flex align-items-center justify-content-between mb-4 flex-column flex-md-row">
                <h2 className="text-blue fw-bolder mb-3 mb-md-0">Experience</h2>
                <a
                  className="btn btn-primary px-4 py-2 py-md-3"
                  href="/resume.docx"
                  download="resume.docx"
                >
                  <BsDownload className="me-2" size={18} />
                  Download Resume
                </a>
              </div>

              {/* Experience Card 1*/}
              <div className="card shadow border-0 rounded-4 mb-4 mb-md-5">
                <div className="card-body p-4 p-md-5">
                  <div className="row align-items-center gx-4 gx-md-5">
                    <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
                      <div className="bg-light p-3 p-md-4 rounded-4">
                        <div className="text-blue fw-bolder mb-2">
                          2024 - Present
                        </div>
                        <div className="small fw-bolder">
                          Full Stack Web Developer
                        </div>
                        <div className="small text-muted">Bamptee</div>
                      </div>
                    </div>

                    <div className="col-12 col-md-8">
                      <div>
                        As a Fullstack Developer at Bamptee, I design and
                        develop web applications, focusing on both frontend and
                        backend functionalities. My role involves creating
                        seamless user experiences, building scalable systems,
                        and collaborating with cross-functional teams to deliver
                        high-quality solutions that align with business goals.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Card 2*/}
              <div className="card shadow border-0 rounded-4 mb-4 mb-md-5">
                <div className="card-body p-4 p-md-5">
                  <div className="row align-items-center gx-4 gx-md-5">
                    <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
                      <div className="bg-light p-3 p-md-4 rounded-4">
                        <div className="text-blue fw-bolder mb-2">
                          2024 - Present
                        </div>
                        <div className="small fw-bolder">Web Developer</div>
                        <div className="small text-muted">
                          Techryt | BPO & Call Center Services
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-8">
                      <div>
                        As a Web Developer at Techryt, I play a key role in
                        designing, developing, and maintaining web applications
                        that enhance business operations and improve user
                        experience.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow border-0 rounded-4 mb-4 mb-md-5">
                <div className="card-body p-4 p-md-5">
                  <div className="row align-items-center gx-4 gx-md-5">
                    <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
                      <div className="bg-light p-3 p-md-4 rounded-4">
                        <div className="text-blue fw-bolder mb-2">
                          2022 - 2023
                        </div>
                        <div className="small fw-bolder">IT Consultant</div>
                        <div className="small text-muted">
                          Islamic University of Lebanon (IUL)
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-8">
                      <div>
                        As an IT Consultant at IUL, I provided technical support
                        and strategic solutions to optimize IT operations. My
                        key responsibilities included Diagnosing and resolving
                        hardware, software, and network issues to ensure
                        seamless operations.Assisting in system maintenance,
                        security updates, and troubleshooting technical
                        challenges.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Education Section*/}
            <section>
              <h2 className="text-secondary fw-bolder mb-4">Education</h2>
              {/* Education Card 1*/}
              <div className="card shadow border-0 rounded-4 mb-4 mb-md-5">
                <div className="card-body p-4 p-md-5">
                  <div className="row align-items-center gx-4 gx-md-5">
                    <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
                      <div className="bg-light p-3 p-md-4 rounded-4">
                        <div className="text-secondary fw-bolder mb-2">
                          2021 - 2024
                        </div>
                        <div className="mb-2">
                          <div className="small fw-bolder">
                            Islamic University
                          </div>
                          <div className="small text-muted">
                            Wardeneieh, Lebanon
                          </div>
                        </div>
                        <div className="fst-italic">
                          <div className="small text-muted">
                            Computer Science
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-8">
                      <div>
                        Studied core concepts of computer science, including
                        software development, data structures, algorithms,
                        databases, and web technologies. Gained hands-on
                        experience in coding, system analysis, and
                        problem-solving, preparing me for a career in full-stack
                        web development.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Divider*/}
            <div className="pb-4 pb-md-5"></div>

            {/* Skills Section*/}
            <section>
              <div className="card shadow border-0 rounded-4 mb-4 mb-md-5">
                <div className="card-body p-4 p-md-5">
                  {/* Professional skills list*/}
                  <div className="mb-4 mb-md-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-tools"></i>
                      </div>
                      <h3 className="fw-bolder mb-0">
                        <span className="text-gradient d-inline">
                          Professional Skills
                        </span>
                      </h3>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-4">
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          Backend Development
                        </div>
                      </div>
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          Frontend Development
                        </div>
                      </div>
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          Web Development
                        </div>
                      </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          Database Management
                        </div>
                      </div>
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          Version Control
                        </div>
                      </div>
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          User Interface Design
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Languages list*/}
                  <div className="mb-0">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-code-slash"></i>
                      </div>
                      <h3 className="fw-bolder mb-0">
                        <span className="text-gradient d-inline">
                          Languages & Frameworks
                        </span>
                      </h3>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-4">
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          HTML
                        </div>
                      </div>
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          CSS
                        </div>
                      </div>
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          JavaScript
                        </div>
                      </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-4">
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          Python
                        </div>
                      </div>
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          Php
                        </div>
                      </div>
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          Node.js
                        </div>
                      </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-4">
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          C++
                        </div>
                      </div>
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          C#
                        </div>
                      </div>
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          SQL & NoSQL
                        </div>
                      </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-4">
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          React
                        </div>
                      </div>
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          Express Js
                        </div>
                      </div>
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          KoaJs
                        </div>
                      </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          Java
                        </div>
                      </div>
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          C
                        </div>
                      </div>
                      <div className="col mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">
                          Angular
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Resume;

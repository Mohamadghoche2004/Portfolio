import { Link } from "react-router-dom";
import dots from "./../../../assets/dots.svg";
import MohamadProfile from "./../../../assets/MohamadProfile.png";
import "./Home.css";

function Home() {
  return (
    <main className="flex-shrink-0 py-3 py-lg-3">
      {/* Header */}
      <header className="py-5">
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
              {/* Header text content */}
              <div className="text-center text-xxl-start">
                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                  <div className="text-uppercase">
                    Design &middot; Development &middot; Marketing
                  </div>
                </div>
                <div className="fs-3 fw-light text-muted">
                  I can help your business to
                </div>
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">
                    Get online and grow fast
                  </span>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <Link
                    className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                    to="/resume"
                  >
                    Resume
                  </Link>
                  <Link
                    className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                    to="/projects"
                  >
                    Projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-7">
              {/* Header profile picture */}

              <div className="d-flex justify-content-center mt-5 mt-xxl-0 ">
                <div className="profile bg-gradient-primary-to-secondary">
                  <div className="dots-3">
                    <img src={dots} alt="decorative  " />
                  </div>
                  <div className="dots-4">
                    <img src={dots} alt="decorative  " />
                  </div>
                  <img className="profile-img" src={MohamadProfile} alt="..." />

                  <div className=" dots-1 ">
                    <img src={dots} alt="decorative " />
                  </div>
                  <div className=" dots-2 ">
                    <img src={dots} alt="decorative " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">About Me</span>
                </h2>
                <p className="lead fw-light mb-4">
                  My name is Mohamad Al Ghoche and I help brands grow.
                </p>
                <p className="text-muted">
                  Ambitious web developer with a strong foundation in computer
                  science, Dedicated to creating innovative web solutions and
                  continuously expanding technical expertise. Excited to
                  collaborate on impactful projects and contribute to the tech
                  community.
                </p>
                <div className="d-flex justify-content-center fs-2 gap-4">
                  <a className="text-gradient" href="#!">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a className="text-gradient" href="#!">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a className="text-gradient" href="#!">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

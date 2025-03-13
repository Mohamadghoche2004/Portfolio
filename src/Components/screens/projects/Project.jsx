function Project() {
  return (
    <section className="py-5 d-flex flex-column" style={{ minHeight: "80vh" }}>
      <div className="container px-5">
        <div className="text-center mb-5 mt-4">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Projects</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center flex-grow-1 align-items-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            <div className="text-center">
              <div className="fs-3 fw-light text-muted mb-3">
                Coming Soon!
              </div>
              <p className="lead fw-light mb-4">
                Project showcase is under construction. Check back soon to see my latest work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

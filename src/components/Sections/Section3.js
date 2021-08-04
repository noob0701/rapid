import React from 'react'

const Section3 = () => {
  return (
    <div>
      <section className="pt-9 mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h1>
              Fair, simple pricing for all.
            </h1>
            <p className="lead text-gray-700">
              All types of businesses need access to development resources, so we give you the option to decide how much you need to use.
            </p>
            <form className="d-flex align-items-center justify-content-center mb-7 mb-md-9">
              <span className="text-muted">
                Annual
              </span>
              <div className="form-check form-switch mx-3">
                <input className="form-check-input" type="checkbox"/>
              </div>
              <span className="text-muted">
                Monthly
              </span>
            </form>
          </div>
        </div>
        <div className="row align-items-center gx-0 mt-5 mb-5">
          <div className="col-12 col-md-6">
            <div className="card rounded-lg shadow-lg mb-6 mb-md-0 aos-init aos-animate" style={{ zIndex: 1 }}>
              <div className="card-body py-6 py-md-8">
                <div className="row justify-content-center">
                  <div className="col-12 col-xl-9">
                    <div className="text-center mb-5">
                      <span className="badge rounded-pill bg-primary-soft">
                        <span className="h6 fw-bold text-uppercase">Standard</span>
                      </span>
                    </div>
                    <div className="d-flex justify-content-center">
                      <span className="h2 mb-0 mt-2">$</span>
                      <span className="price display-2 mb-0" data-annual={29} data-monthly={49}>29</span>
                      <span className="h2 align-self-end mb-1">/mo</span>
                    </div>
                    <p className="text-center text-muted mb-6 mb-md-8">
                      per seat
                    </p>
                    <div className="d-flex">
                      <div className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                        <i className="fe fe-check" />
                      </div>
                      <p>
                        Rich, responsive landing pages
                      </p>
                    </div>
                    <div className="d-flex">
                      <div className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                        <i className="fe fe-check" />
                      </div>
                      <p>
                        100+ styled components
                      </p>
                    </div>
                    <div className="d-flex">
                      <div className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                        <i className="fe fe-check" />
                      </div>
                      <p>
                        Flexible, simple license
                      </p>
                    </div>
                    <div className="d-flex">
                      <div className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                        <i className="fe fe-check" />
                      </div>
                      <p>
                        Speedy build tooling
                      </p>
                    </div>
                    <div className="d-flex">
                      <div className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                        <i className="fe fe-check" />
                      </div>
                      <p className="mb-0">
                        6 months free support included
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="card-btn btn w-100 btn-lg btn-primary">
                Get it now
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 ms-md-n3">
            <div className="card rounded-lg shadow-lg">
              <div className="card-body py-6 py-md-8">
                <div className="row justify-content-center">
                  <div className="col-12 col-xl-10">
                    <p className="text-center mb-8 mb-md-11">
                      <span className="badge rounded-pill bg-primary-soft">
                        <span className="h6 fw-bold text-uppercase">Enterprise</span>
                      </span>
                    </p>
                    <p className="lead text-center text-muted mb-0 mb-md-10">
                      We offer variable pricing with discounts for larger organizations. Get in touch with us and we’ll figure out something that works for everyone.
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" className="card-btn btn w-100 btn-lg btn-light bg-gray-300 text-gray-700">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 py-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <span className="badge rounded-pill bg-gray-700-soft mb-4">
                <span className="h6 fw-bold text-uppercase">Get started</span>
              </span>
              <h1 className="display-4">
                Get Theme and save your time.
              </h1>
              <p className="fs-lg text-muted mb-6 mb-md-8">
                Stop wasting time trying to do it the "right way" and build a site from scratch. Theme is faster, easier, and you still have complete control.
              </p>
              <a href="#" target="_blank" className="btn btn-success">
                Buy it now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section3


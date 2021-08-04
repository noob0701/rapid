import React from 'react'
import meeting from "../../assets/images/meeting.jpeg"
import dashboard from "../../assets/images/dashboard.jpeg"
import focus from "../../assets/images/focus.svg"
const Section2 = () => {
  return (
    <>
      <div className="row align-items-center justify-content-between mb-8 mb-md-11 mt-5 mb-5">
        <div className="col-12 col-md-6 order-md-2">
          <h2>
            The most useful resource <br />
            <span className="text-success">ever created for designer|</span>
          </h2>
          <p className="fs-lg text-muted mb-6">
            Using Theme to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.
          </p>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="d-flex">
                <div className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                  <i className="fe fe-check" />
                </div>
                <p className="text-success">
                  Lifetime updates
                </p>
              </div>
              <div className="d-flex">
                <div className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                  <i className="fe fe-check" />
                </div>
                <p className="text-success mb-lg-0">
                  Tons of assets
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-6 mb-md-0">
              <div className="d-flex">
                <span className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                  <i className="fe fe-check" />
                </span>
                <p className="text-success">
                  Tech support
                </p>
              </div>
              <div className="d-flex">
                <div className="badge badge-rounded-circle bg-success-soft me-1 me-4">
                  <i className="fe fe-check" />
                </div>
                <p className="text-success mb-0">
                  Integration ready
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5 order-md-1">
          <div className="card">
            <img src={meeting} alt="meeting"/>
            <div className="card-body">
              <form>
                <div className="form-floating">
                  <input type="text" className="form-control" placeholder="Name" />
                  <label>Name</label>
                </div>
                <div className="form-floating">
                  <input type="email" className="form-control" placeholder="Email" />
                  <label>Email</label>
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control" placeholder="Password" />
                  <label>Password</label>
                </div>
                <div className="mt-6">
                  <button className="btn w-100 btn-success">
                    Download a sample
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center mb-5">
        <div className="col-12 col-lg-6">
          <h2>
            We have lots of experience <br />
            <span className="text-primary">building Bootstrap themes</span>.
          </h2>
          <p className="fs-lg text-muted mb-6">
            We've built well over a dozen Bootstrap themes and sold tens of thousands of copies.
          </p>
          <div className="d-flex">
            <div className="icon text-primary">
            <img src="https://img.icons8.com/office/35/000000/grammarly.png"/></div>
            <div className="ms-5">
              <h4 className="mb-1">
                Bootstrap users since the beginning
              </h4>
              <p className="text-muted mb-6">
                We've been developing with Bootstrap since it was publicly released in 2011.
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="icon text-primary">
            <img src="https://img.icons8.com/fluency/30/000000/edit-link.png" /></div>
            <div className="ms-5">
              <h4 className="mb-1">
                Deep understanding of Bootstrap
              </h4>
              <p className="text-muted mb-6 mb-md-0">
                We've watched Bootstrap grow up over the years and understand it better than almost anyone.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-6">
          <div className="w-md-150 w-lg-130 position-relative aos-init aos-animate" data-aos="fade-left">
            <div className="shape shape-fluid-y shape-blur-4 text-gray-200">
            </div>
            <div className="img-skewed img-skewed-start">
              <img src={dashboard} className="img-fluid" alt="dashboard" />
            </div>
          </div>
        </div>
      </div>


      <div className="row justify-content-center mt-5">
        <div className="col-12 col-lg-8 text-center">
          <h2>
            Our customers are our biggest fans.
          </h2>
          <p className="fs-lg text-muted mb-7">
            We don't like to brag, but we don't mind letting our customers do it for us. Here are a few nice things folks have said about our themes over the years.
          </p>
        </div>
      </div>
      <section className="pt-12 mt-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <img src={focus} alt="focus" className="img-fluid mb-6 mb-md-0" />
            </div>
            <div className="col-12 col-lg-6">
              <h2>
                Stay focused on your business. <br />
                <span className="text-primary">Let us handle the design</span>.
              </h2>
              <p className="fs-lg mb-6">
                You have a business to run. Stop worring about cross-browser bugs, designing new pages, keeping your components up to date. Let us do that for you.
              </p>
              <div className="d-flex">
                <div className="pe-5">
                  <h3 className="mb-0">
                    100%
                  </h3>
                  <p className="mb-0">
                    Satisfaction
                  </p>
                </div>
                <div className="border-start border-gray-300" />
                <div className="px-5">
                  <h3 className="mb-0">
                    24/7
                  </h3>
                  <p className=" mb-0">
                    Support
                  </p>
                </div>
                <div className="border-start" />
                <div className="ps-5">
                  <h3 className="mb-0">
                    100k+
                  </h3>
                  <p className=" mb-0">
                    Sales
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Section2

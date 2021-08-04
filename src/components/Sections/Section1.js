import React from 'react'
import meet from "../../assets/images/meet.svg"
import airbnb from "../../assets/images/airbnb.svg"
import coinbase from "../../assets/images/coinbase.svg"
import dribbble from "../../assets/images/dribbble.svg"
import instagram from "../../assets/images/instagram.svg"
import netflix from "../../assets/images/netflix.svg"
import pinterest from "../../assets/images/pinterest2.svg"
const Section1 = () => {
    return (
        <div className="pt-4 pt-md-11 mt-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-md-2">
                        <img src={meet} className="img-fluid" alt="meet" />
                    </div>
                    <div className="col-lg-6 order-md-1">
                        <h1 className="display-3 text-center text-md-start">
                            Welcome to <span className="text-primary">Theme</span>. <br />
                            Develop anything.
                        </h1>
                        <p className="lead text-center text-md-start">
                            Build a beautiful, modern website with flexible Bootstrap components built from scratch.
                        </p>
                        <div className="text-center text-md-start">
                            <a href="#" className="btn btn-primary">
                                View all pages
                            </a>
                            <a href="#" className="btn btn-primary-soft">
                                Documentation
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="icon text-primary mb-3"><img src="https://img.icons8.com/office/35/000000/toggle-on.png" />
                        </div>
                        <h3>
                            Built for developers
                        </h3>
                        <p className="text-muted mb-6">
                            Theme is built to make your life easier. Variables, build tooling, documentation, and reusable components.
                        </p>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="icon text-primary mb-3">
                            <img src="https://img.icons8.com/windows/32/000000/16867-0-71617-triple-arrows-common.png" />
                        </div>
                        <h3>
                            Designed to be modern
                        </h3>
                        <p className="text-muted">
                            Designed with the latest design trends in mind. Theme feels modern, minimal, and beautiful.
                        </p>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="icon text-primary mb-3">
                            <img src="https://img.icons8.com/fluency/30/000000/edit-link.png" />
                        </div>
                        <h3>
                            Documentation for everything
                        </h3>
                        <p className="text-muted mb-0">
                            We've written extensive documentation for components and tools, so you never have to reverse engineer anything.
                        </p>
                    </div>
                </div>
            </div>



            <div>
                <section className="py-6 py-md-8 mt-5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                                <div className="img-fluid text-gray-600 mb-2 mb-md-0">
                                    <img src={airbnb} alt="airbnb" width="100%" />
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                                <div className="img-fluid text-gray-600 mb-2 mb-md-0">
                                    <img src={coinbase} alt="airbnb" width="100%" />
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                                <div className="img-fluid text-gray-600 mb-2 mb-md-0">
                                    <img src={dribbble} alt="dribble" width="100%" />
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                                <div className="img-fluid text-gray-600 mb-2 mb-md-0">
                                    <img src={pinterest} alt="pinterest" width="100%" />
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                                <div className="img-fluid text-gray-600 mb-2 mb-md-0">
                                    <img src={instagram} alt="instagram" width="100%" />
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                                <div className="img-fluid text-gray-600 mb-2 mb-md-0">
                                    <img src={netflix} alt="netflix" width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Section1

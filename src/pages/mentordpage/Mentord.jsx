import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './mentord.css';

const Mentor = () => {
    return (
        <>
            <Header />
            <div className="Mentord">




                {/* MENTOR 1 */}
                <div className="Mentord-1">
                    <div className="Mentord-1-1">
                        <div>Home | Mentor | <span>Kristin Watson</span></div>
                    </div>

                    <div className="Mentord-1-2">
                        <div className="Mentord-1-2-1">
                            <div className="Mentord-1-2-1-1"></div>

                            <div className="Mentord-1-2-1-2">
                                Kritsin Watson<br /><span>Founder & Mentor</span>
                            </div>
                        </div>

                        <div className="Mentord-1-2-2">
                            <div>Contact Now</div>
                        </div>
                    </div>
                </div>




                {/* MENTOR 2 SECTION */}

                <div className="Mentord-2">
                    <div className="Mentord-2-1">
                        <div className="Mentord-2-1-1">
                            <div className="Mentord-2-1-1-1">About</div>
                            <div className="Mentord-2-1-1-2">Courses</div>
                            <div className="Mentord-2-1-1-3">Reviews</div>
                        </div>

                        <div className="Mentord-2-1-2">
                            <h1>About Kritsin</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                            </p>
                        </div>

                        <div className="Mentord-2-1-3">
                            <h1>Certification</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>

                    <div className="Mentord-2-2">
                        <div className="Mentord-2-2-1">
                            <div className="Mentord-2-2-1-1 title">Total Course</div>
                            <div className="Mentord-2-2-1-2 response">30</div>
                        </div>

                        <div className="Mentord-2-2-2">
                            <div className="Mentor-2-2-2-1 title">Ratings</div>
                            <div className="Mentor-2-2-2-2 response">4.9(<span>153</span>)</div>
                        </div>

                        <div className="Mentord-2-2-3">
                            <div className="Mentord-2-2-3-1 title">Experiences</div>
                            <div className="Mentord-2-2-3-2 response">10 Years</div>
                        </div>

                        <div className="Mentord-2-2-4">
                            <div className="Mentord-2-2-4-1 title">Graduated</div>
                            <div className="Mentord-2-2-4-2 response">Yes</div>
                        </div>

                        <div className="Mentord-2-2-5">
                            <div className="Mentor-2-2-5-1 title">Language</div>
                            <div className="Mentor-2-2-5-2 response">English, French</div>
                        </div>

                        <div className="Mentord-2-2-6">
                            <div className="Mentor-2-2-6-1 title">Social</div>
                            <div className="Mentor-2-2-6-2 response"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Mentor;
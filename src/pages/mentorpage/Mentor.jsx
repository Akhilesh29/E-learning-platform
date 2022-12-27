import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './mentor.css';

const Mentor = () => {
    return (
        <>
            <Header />
            <div className="Mentor">
                <div className="Mentor-1">
                    <div className="Mentor-1-1">
                        <div className="Mentor-1-1-1">Home |</div>
                        <div className="Mentor-1-1-2">Our Mentors</div>
                    </div>
                    <div className="Mentor-title">Eduvi has the<br />qualified mentor</div>
                </div>

                <div className="Mentor-2">
                    <div className="Mentor-2-1"> All Mentors</div>
                    <div className="Mentor-2-2"> For Kindergarten</div>
                    <div className="Mentor-2-3"> For high school</div>
                    <div className="Mentor-2-4"> For college</div>
                    <div className="Mentor-2-5"> For Technology</div>
                </div>
                <div className="Mentor-3">
                <div className="Mentor-3-1"> 
                <div className="Mentor-3-1-1"></div>
                <div className="Mentor-3-1-2">Kristin Watson</div>
                <div className="Mentor-3-1-3">Founder & Mentor</div>
                {/* <div className="Mentor-3-1-3">^</div> */}
                </div>
                <div className="Mentor-3-2"> 
                <div className="Mentor-3-2-1"></div>
                <div className="Mentor-3-2-2">Brooklyn Simmons</div>
                <div className="Mentor-3-2-3">Founder & Mentor</div>
                </div>
                <div className="Mentor-3-3"> 
                <div className="Mentor-3-3-1"></div>
                <div className="Mentor-3-3-2">Robert Fox </div>
                <div className="Mentor-3-3-3">Founder & Mentor</div>
                </div>
                <div className="Mentor-3-4"> 
                <div className="Mentor-3-4-1"></div>
                <div className="Mentor-3-4-2">Wade Warren </div>
                <div className="Mentor-3-4-3">Founder & Mentor</div>
                </div>
                <div className="Mentor-3-5"> 
                <div className="Mentor-3-5-1"></div>
                <div className="Mentor-3-5-2">Bessie Cooper </div>
                <div className="Mentor-3-5-3">Founder & Mentor</div>
                </div>
                </div>
                </div>
            <Footer />
        </>

    );
}
export default Mentor;
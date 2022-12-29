import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Mentordescription.css';

const Mentor = () => {
    return (
        <>
            <Header />

            <div className="Mentordescription">
                <div className="mentordescription-1">
                    <div className="mentordescription-1-1">
                        <div className="mentordescription-1-1-1">Home |</div>
                        <div className="mentordescription-1-1-2">Mentor |</div>
                        <div className="mentordescription-1-1-3">Kristin Watson</div>
                        
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="mentordescription-2">
            <div className="mentordescription-2-1">Contact Now</div>

            </div>

            <Footer />
        </>

    );
}
export default Mentor;
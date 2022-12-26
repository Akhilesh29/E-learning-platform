
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teacher from "./pages/teacherpage/Teacher";
import Mentor from "./pages/mentorpage/Menor";
import Mentordescription from "./pages/mentordescriptionpage/Mentordescription";
import Signup from "./pages/signuppage/Signup";
import Login from "./pages/loginpage/Loggin";
import Error from "./Error";

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/contact-msg-sent" element={<MsgSent />} />
        <Route path="/product-description" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>

  )
}

export default App;
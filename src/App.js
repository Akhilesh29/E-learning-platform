
import React from "react";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teacher from "./pages/teacherpage/Teacher";
import Mentor from "./pages/mentorpage/Mentor";
import Mentordescription from "./pages/mentordescriptionpage/Mentordescription";
import Signup from "./pages/signuppage/Signup";
import Login from "./pages/loginpage/Loggin";
const App = () => {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/teacherpage" element={<Teacher />} />
        <Route path="/mentorpage" element={< Mentor/>} />
        <Route path="/mentordescriptionpage" element={<Mentordescription />} />
        <Route path="/signuppage" element={<Signup />} />
        <Route path="/loginpage" element={<Login />} />
      </Routes>
    </Router>
    </>

  )
}

export default App;
// import React, { useRef } from "react";
// import { Container } from "reactstrap";
// import "./header.css";

// const navLinks = [
//   {
//     display: "Home",
//     url: "#",
//   },
//   {
//     display: "About",
//     url: "#",
//   },

//   {
//     display: "Courses",
//     url: "#",
//   },
//   {
//     display: "Pages",
//     url: "#",
//   },
//   {
//     display: "Blog",
//     url: "#",
//   },
// ];

// const Header = () => {
//   const menuRef = useRef();

//   const menuToggle = () => menuRef.current.classList.toggle("active__menu");

//   return (
//     <header className="header">
//       <Container>
//         <div className="navigation d-flex align-items-center justify-content-between">
//           <div className="logo">
//             <h2 className=" d-flex align-items-center gap-1">
//               <i class="ri-pantone-line"></i> Learners.
//             </h2>
//           </div>

//           <div className="nav d-flex align-items-center gap-5">
//             <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
//               <ul className="nav__list">
//                 {navLinks.map((item, index) => (
//                   <li key={index} className="nav__item">
//                     <a href={item.url}>{item.display}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="nav__right">
//               <p className="mb-0 d-flex align-items-center gap-2">
//                 <i class="ri-phone-line"></i> +88 0123456789
//               </p>
//             </div>
//           </div>

//           <div className="mobile__menu">
//             <span>
//               <i class="ri-menu-line" onClick={menuToggle}></i>
//             </span>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Header;
import React from "react"
const Header= () => {
    return (
        <h1> this is Header </h1>
    )
}
export default Header;
// import logo from './images/logo.svg';
// import cart from './images/cart.svg';
// import account from './images/account.svg';
// import downArrow from './images/downarrow.svg';
// import './nav.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import {Container , Row, Col} from 'react-bootstrap'
// import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
// import ThemeProvider from 'react-bootstrap/ThemeProvider'


// function navbar(){
//     return (
//         <Navbar expand="lg" sticky="top" id='navs'>
//             <Container fluid>
//                     <Navbar.Brand  id="logo" href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
               

//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
                
//                     <Nav className="me-auto custom-nav">
//                         <Nav.Link id="shop-link" href="#shop">Shop</Nav.Link>
//                         {/* <Nav.Link href="#link">Link</Nav.Link> */}
//                         <NavDropdown title="For Kinder Garden" id="basic-nav-dropdown">
//                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.2">
//                             Another action
//                         </NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action/3.4">
//                             Separated link
//                         </NavDropdown.Item>
//                         </NavDropdown>

//                         <NavDropdown title="For High School" id="basic-nav-dropdown">
//                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.2">
//                             Another action
//                         </NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action/3.4">
//                             Separated link
//                         </NavDropdown.Item>
//                         </NavDropdown>
//                         <NavDropdown title="For Colleges" id="basic-nav-dropdown">
//                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.2">
//                             Another action
//                         </NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action/3.4">
//                             Separated link
//                         </NavDropdown.Item>
//                         </NavDropdown>
                   
//                         <NavDropdown title="Courses" id="basic-nav-dropdown">
//                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.2">
//                             Another action
//                         </NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action/3.4">
//                             Separated link
//                         </NavDropdown.Item>
//                         </NavDropdown>
//                         </Nav>
//                     <Nav>
//                             <Nav.Link id="cart-link" href="#Cart">Cart(0) <img src={cart} alt="cart" /> </Nav.Link>
//                             <Nav.Link id="account-link" href="#Account">My Account <img src={account} alt="Account" /> </Nav.Link>
//                     </Nav>
                  
//                     </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       );
// }

// export default navbar;
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { NavLink } from 'react-router-dom';
// import logo from '../images/urlshortnerlogo1.png';
// import './Navbar.css'; // Custom CSS for styling

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-lg">
//       {/* Logo */}
//       <NavLink className="navbar-brand d-flex align-items-center" to="/">
//         <img 
//           src={logo} 
//           alt="URL Shortener Logo" 
//           height="60px" 
//           width="150px" 
//           className="me-3 logo-hover"
//         />
//         <h3 className="mb-0 text-white brand-name">URL Shortener</h3>
//       </NavLink>

//       {/* Navbar toggle button for mobile view */}
//       <button 
//         className="navbar-toggler" 
//         type="button" 
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarSupportedContent" 
//         aria-controls="navbarSupportedContent" 
//         aria-expanded="false" 
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       {/* Navbar links */}
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ms-auto gap-4">
//           <li className="nav-item">
//             <NavLink 
//               className={({ isActive }) => `nav-link text-white nav-hover ${isActive ? 'active' : ''}`} 
//               to="/"
//             >
//               Home
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink 
//               className={({ isActive }) => `nav-link text-white nav-hover ${isActive ? 'active' : ''}`} 
//               to="/about"
//             >
//               About
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink 
//               className={({ isActive }) => `nav-link text-white nav-hover ${isActive ? 'active' : ''}`} 
//               to="/shortenurl"
//             >
//               Shorten URL
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink 
//               className={({ isActive }) => `nav-link text-white nav-hover ${isActive ? 'active' : ''}`} 
//               to="/dashboard"
//             >
//               Dashboard
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink 
//               className={({ isActive }) => `nav-link text-white nav-hover ${isActive ? 'active' : ''}`} 
//               to="/login"
//             >
//               Login
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink 
//               className={({ isActive }) => `nav-link text-white nav-hover ${isActive ? 'active' : ''}`} 
//               to="/register"
//             >
//               Register
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/urlshortnerlogo1.png';
import './Navbar.css'; // Custom CSS for styling

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-lg">
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src={logo} 
            alt="URL Shortener Logo" 
            height="60px" 
            width="150px" 
            className="me-3 logo-hover"
          />
          <h3 className="mb-0 text-white brand-name">URL Shortener</h3>
        </NavLink>

        {/* Navbar toggle button for mobile view */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto gap-4">
            <li className="nav-item">
              <NavLink className="nav-link text-white nav-hover" to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white nav-hover" to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white nav-hover" to="/shortenurl" activeClassName="active">
                Shorten URL
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white nav-hover" to="/dashboard" activeClassName="active">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white nav-hover" to="/login" activeClassName="active">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white nav-hover" to="/register" activeClassName="active">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { NavLink } from 'react-router-dom';
// import logo from '../images/urlshortnerlogo1.png';
// //import './Navbar.css'; // Import custom CSS for further styling

// function Navbar() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-danger bg-opacity-0 px-4">
//         {/* Logo */}
//         <NavLink className="navbar-brand d-flex align-items-center" to="/">
//           <img 
//             src={logo} 
//             alt="BrainStroke logo" 
//             height="60px" 
//             width="150px" 
//             className="me-3"
//           />
//           <h3 className="mb-0 text-white">URL Shortner</h3>
//         </NavLink>

//         {/* Navbar toggle button for mobile view */}
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse" // Updated to use 'data-bs-' for Bootstrap 5
//           data-bs-target="#navbarSupportedContent" 
//           aria-controls="navbarSupportedContent" 
//           aria-expanded="false" 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar links */}
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto gap-4"> {/* Increased gap between items */}
//             <li className="nav-item">
//               <NavLink className="nav-link text-white" to="/" activeClassName="active">Home</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white" to="/about" activeClassName="active">About</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white" to="/shortenurl" activeClassName="active">Shorten URL</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white" to="/dashboard" activeClassName="active">Dashboard</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white" to="/login" activeClassName="active">Login</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white" to="/register" activeClassName="active">Register</NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
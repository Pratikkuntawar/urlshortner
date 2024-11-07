import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Importing custom styles

const Home = () => {
  const navigate = useNavigate(); // React Router navigation hook

  const handleNavigate = () => {
    navigate('/shortenurl'); // Redirect to shorten URL page
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="home-title">Welcome to URL Shortener</h1>
        <p className="hero-description">
       Transform your long URLs into short, easy-to-share links.  
                  Track your links and manage all your URLs in one place!
        </p>
        <button className="cta-button" onClick={handleNavigate}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css'; // Importing custom styles

// const Home = () => {
//   const navigate = useNavigate(); // React Router navigation hook

//   const handleNavigate = () => {
//     navigate('/shortenurl'); // Redirect to shorten URL page
//   };

//   return (
//     <div className="home-container">
//       <div className="hero-section">
//         <h1 className="home-title">Welcome to URL Shortener</h1>
//         <p className="hero-description">
//           Shorten your URLs quickly and easily. Share smarter, track clicks, and manage your links all in one place!
//         </p>
//         <button className="cta-button" onClick={handleNavigate}>
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css'; // Importing custom styles

// const Home = () => {
//   const navigate = useNavigate(); // React Router navigation hook

//   const handleNavigate = () => {
//     navigate('/shortenurl'); // Redirect to shorten URL page
//   };

//   return (
//     <div className="home-container">
//       {/* Title and Description */}
//       <h1 className="home-title">Welcome to URL Shortener</h1>
//       {/* <p className="home-description">
//         Transform your long URLs into short, easy-to-share links with just a few clicks.  
//         Track your links, monitor engagement, and manage all your URLs in one place!
//       </p> */}
//       <p className="hero-description">
//         Shorten long links, track analytics, and share smarter. Say goodbye to unwieldy URLs with our quick and easy-to-use service.
//       </p>

//       {/* Feature Cards Section */}
//       <h2 className="section-title">Why Choose Our URL Shortener?</h2>
//       <div className="feature-cards">
//         <div className="feature-card">
//           <i className="bi bi-lightning-charge-fill feature-icon"></i>
//           <h3>Fast & Efficient</h3>
//           <p>Shorten your URLs instantly with our optimized backend.</p>
//         </div>

//         <div className="feature-card">
//           <i className="bi bi-bar-chart-line-fill feature-icon"></i>
//           <h3>Track Analytics</h3>
//           <p>Monitor clicks and performance with detailed analytics.</p>
//         </div>

//         <div className="feature-card">
//           <i className="bi bi-shield-lock-fill feature-icon"></i>
//           <h3>Secure & Private</h3>
//           <p>We prioritize your data with encryption and privacy protocols.</p>
//         </div>
//       </div>

//       {/* Call to Action Button */}
//       <button className="cta-button" onClick={handleNavigate}>
//         Get Started
//       </button>
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css'; // Optional: External CSS for styling

// const Home = () => {
//   const navigate = useNavigate(); // React Router hook for navigation

//   const handleNavigate = () => {
//     navigate('/shortenurl'); // Replace with your actual route
//   };

//   return (
//     <div className="home-container">
//       <h1 className="home-title">Welcome to URL Shortener</h1>
//       <p className="home-description">
//         Transform your long URLs into short, easy-to-share links with just a few clicks.  
//         Track your links, monitor engagement, and manage all your URLs in one place!
//       </p>
//       <button className="home-button" onClick={handleNavigate}>
//         Get Started
//       </button>
//     </div>
//   );
// };

// export default Home;


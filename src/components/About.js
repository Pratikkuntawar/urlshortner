// About.js
import React from 'react';
import urlShortenerImage from '../images/urlshortnerimage.webp'; // Update the path accordingly
import './About.css'; // Import CSS file

const About = () => {
  return (
    <div className='container mt-5'>
    <div className='row'>
        {/* Left Column: Brain Stroke Definition */}
        <div className='col-lg-6 text-container'>
          <h2 className="heading">A Fast and Simple URL Shortener</h2>
          <p className="definition">
     
          Free URL Shortener for transforming long, ugly links into nice, memorable, and trackable short URLs.
            Use it to shorten links for any social media platforms, blogs, SMS, emails, ads, or pretty much anywhere
            else you want to share them. Whether you're sharing your favorite blog post, promoting a video, or advertising
           a new product, our URL shortener simplifies the process and makes your links easier to manage.
            With real-time analytics, you can track the performance of each shortened link, allowing you to measure
            engagement and optimize your sharing strategy. Twitter, Facebook, YouTube, Instagram, WhatsApp, emails, SMS, 
             videos—after shortening the URL, check how many clicks it received and gain valuable insights into your audience's behavior.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className='col-lg-6 image-container d-flex justify-content-center'>
          <img 
            src={urlShortenerImage} 
            alt='Brain Stroke Illustration' 
            className='img-fluid rounded'
          />
        </div>
      </div>


      <h2 className="heading2 text-center mb-4">Features of URL Shortener</h2>
      <div className="row">
    {/* Feature 1: Easy */}
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card feature-card">
        <div className="card-body text-center">
          <i className="bi bi-check-circle card-icon" style={{ fontSize: "2rem", color: "#28a745" }}></i>
          <h5 className="card-title t1">Easy</h5>
          <p className="card-text t2">
            ShortURL is easy and fast; enter the long link to get your shortened link.
          </p>
        </div>
      </div>
    </div>

    {/* Feature 2: Shortened */}
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card feature-card">
        <div className="card-body text-center">
          <i className="bi bi-link-45deg card-icon" style={{ fontSize: "2rem", color: "#17a2b8" }}></i>
          <h5 className="card-title t1">Shortened</h5>
          <p className="card-text t2">
            Use any link, no matter what size; ShortURL always shortens.
          </p>
        </div>
      </div>
    </div>

    {/* Feature 3: Secure */}
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card feature-card">
        <div className="card-body text-center">
          <i className="bi bi-shield-lock card-icon" style={{ fontSize: "2rem", color: "#dc3545" }}></i>
          <h5 className="card-title t1">Secure</h5>
          <p className="card-text t2">
            It is fast and secure; our service has HTTPS protocol and data encryption.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="row">
    {/* Feature 4: Statistics */}
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card feature-card">
        <div className="card-body text-center">
          <i className="bi bi-graph-up card-icon" style={{ fontSize: "2rem", color: "#ffc107" }}></i>
          <h5 className="card-title t1">Statistics</h5>
          <p className="card-text t2">
            Check the number of clicks that your shortened URL received.
          </p>
        </div>
      </div>
    </div>

    {/* Feature 5: Reliable */}
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card feature-card">
        <div className="card-body text-center">
          <i className="bi bi-check-circle-fill card-icon" style={{ fontSize: "2rem", color: "#28a745" }}></i>
          <h5 className="card-title t1">Reliable</h5>
          <p className="card-text t2">
            All links that try to disseminate spam, viruses, and malware are deleted.
          </p>
        </div>
      </div>
    </div>

    {/* Feature 6: Devices */}
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card feature-card">
        <div className="card-body text-center">
        <i className="fab fa-android fa-2x card-icon" style={{ fontSize: "2rem", color: "#6f42c1" }}></i>
          <h5 className="card-title t1">Devices</h5>
          <p className="card-text t2">
            Compatible with smartphones, tablets, and desktops.
          </p>
        </div>
      </div>
    </div>
  </div>


    </div>
  );
};

export default About;


// // About.js
// import React from 'react';
// import urlShortenerImage from '../images/urlshortnerimage.webp'; // Ensure the correct path
// import './About.css'; // Import CSS

// const About = () => {
//   return (
//     <div className="container my-5">
//       {/* Two-column layout: Description and Image */}
//       <div className="row mb-5">
//         <div className="col-lg-6 d-flex flex-column justify-content-center">
//           <h2 className="heading">A Fast and Simple URL Shortener</h2>
//           <p className="definition">
//             Free URL Shortener for transforming long, ugly links into nice, memorable, and trackable short URLs.
//             Use it to shorten links for any social media platforms, blogs, SMS, emails, ads, or pretty much anywhere
//             else you want to share them. Whether you're sharing your favorite blog post, promoting a video, or advertising
//             a new product, our URL shortener simplifies the process and makes your links easier to manage.
//             With real-time analytics, you can track the performance of each shortened link, allowing you to measure
//             engagement and optimize your sharing strategy. Twitter, Facebook, YouTube, Instagram, WhatsApp, emails, SMS, 
//             videos—after shortening the URL, check how many clicks it received and gain valuable insights into your audience's behavior.
//           </p>
//         </div>

//         <div className="col-lg-6 d-flex justify-content-center align-items-center">
//           <img 
//             src={urlShortenerImage} 
//             alt="URL Shortener Illustration" 
//             className="img-fluid rounded shadow"
//           />
//         </div>
//       </div>

//       {/* Features Section Heading */}
//       <h2 className="heading2 text-center mb-4">Features of URL Shortener</h2>

//       {/* Features Grid: Two Rows, Three Cards in Each Row */}
//       <div className="row justify-content-center">
//         {/* Row 1: First Three Features */}
//         <div className="col-md-4 mb-4 d-flex justify-content-center">
//           <div className="card feature-card">
//             <div className="card-body text-center">
//               <i className="bi bi-check-circle card-icon"></i>
//               <h5 className="card-title">Easy</h5>
//               <p className="card-text">
//                 ShortURL is easy and fast; enter the long link to get your shortened link.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-4 mb-4 d-flex justify-content-center">
//           <div className="card feature-card">
//             <div className="card-body text-center">
//               <i className="bi bi-link-45deg card-icon"></i>
//               <h5 className="card-title">Shortened</h5>
//               <p className="card-text">
//                 Use any link, no matter what size; ShortURL always shortens.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-4 mb-4 d-flex justify-content-center">
//           <div className="card feature-card">
//             <div className="card-body text-center">
//               <i className="bi bi-shield-lock card-icon"></i>
//               <h5 className="card-title">Secure</h5>
//               <p className="card-text">
//                 It is fast and secure; our service has HTTPS protocol and data encryption.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Row 2: Next Three Features */}
//         <div className="col-md-4 mb-4 d-flex justify-content-center">
//           <div className="card feature-card">
//             <div className="card-body text-center">
//               <i className="bi bi-graph-up card-icon"></i>
//               <h5 className="card-title">Statistics</h5>
//               <p className="card-text">
//                 Check the number of clicks that your shortened URL received.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-4 mb-4 d-flex justify-content-center">
//           <div className="card feature-card">
//             <div className="card-body text-center">
//               <i className="bi bi-check-circle-fill card-icon"></i>
//               <h5 className="card-title">Reliable</h5>
//               <p className="card-text">
//                 All links that try to disseminate spam, viruses, and malware are deleted.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-4 mb-4 d-flex justify-content-center">
//           <div className="card feature-card">
//             <div className="card-body text-center">
//               <i className="bi bi-android card-icon"></i>
//               <h5 className="card-title">Devices</h5>
//               <p className="card-text">
//                 Compatible with smartphones, tablets, and desktop.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



// // // About.js
// // About.js
// import React from 'react';
// import urlShortenerImage from '../images/urlshortnerimage.webp'; // Update this with the correct path to your image
// import './About.css'; // Import the CSS file

// const About = () => {
//   return (
//     <div className="about-container row">
//       {/* Left Column: URL Shortener Description */}
//       <div className="col-lg-6 text-container d-flex flex-column justify-content-center">
//         <h2 className="heading">A Fast and Simple URL Shortener</h2>
//         <p className="definition">
//         Free URL Shortener for transforming long, ugly links into nice, memorable, and trackable short URLs. Use it to shorten links for any social media platforms, blogs, SMS, emails, ads, or pretty much anywhere else you want to share them. Whether you're sharing your favorite blog post, promoting a video, or advertising a new product, our URL shortener simplifies the process and makes your links easier to manage. With real-time analytics, you can track the performance of each shortened link, allowing you to measure engagement and optimize your sharing strategy. Twitter, Facebook, YouTube, Instagram, WhatsApp, emails, SMS, videos—after shortening the URL, check how many clicks it received and gain valuable insights into your audience's behavior.
//         </p>
//       </div>

//       {/* Right Column: Image */}
//       <div className="col-lg-6 image-container d-flex justify-content-center align-items-center">
//         <img 
//           src={urlShortenerImage} 
//           alt="URL Shortener Illustration" 
//           className="img-fluid rounded shadow" 
//         />
//       </div>
//       <h2  className="heading2" style={{textAlign:'center',marginTop:20,marginBottom:0}}>Features Of Url Shortner</h2>
//       <div className="container mt-5">
//       <div className="row justify-content-center">
//         {/* Feature 1: Easy */}
//         <div className="col-md-4 mb-4 d-flex justify-content-center">
//           <div className="card feature-card">
//             <div className="card-body text-center">
//               <i className="bi bi-check-circle card-icon"></i>
//               <h5 className="card-title">Easy</h5>
//               <p className="card-text">
//                 ShortURL is easy and fast; enter the long link to get your shortened link.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Feature 2: Shortened */}
//         <div className="col-md-4 mb-4 d-flex justify-content-center">
//           <div className="card feature-card">
//             <div className="card-body text-center">
//               <i className="bi bi-link-45deg card-icon"></i>
//               <h5 className="card-title">Shortened</h5>
//               <p className="card-text">
//                 Use any link, no matter what size; ShortURL always shortens.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Feature 3: Secure */}
//         <div className="col-md-4 mb-4 d-flex justify-content-center">
//           <div className="card feature-card">
//             <div className="card-body text-center">
//               <i className="bi bi-shield-lock card-icon"></i>
//               <h5 className="card-title">Secure</h5>
//               <p className="card-text">
//                 It is fast and secure; our service has HTTPS protocol and data encryption.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Feature 4: Statistics */}
//         <div className="col-md-4 mb-4 d-flex justify-content-center">
//           <div className="card feature-card">
//             <div className="card-body text-center">
//               <i className="bi bi-graph-up card-icon"></i>
//               <h5 className="card-title">Statistics</h5>
//               <p className="card-text">
//                 Check the number of clicks that your shortened URL received.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Feature 5: Reliable */}
//         <div className="col-md-4 mb-4 d-flex justify-content-center">
//           <div className="card feature-card">
//             <div className="card-body text-center">
//               <i className="bi bi-check-circle-fill card-icon"></i>
//               <h5 className="card-title">Reliable</h5>
//               <p className="card-text">
//                 All links that try to disseminate spam, viruses, and malware are deleted.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Feature 6: Devices */}
//         <div className="col-md-4 mb-4 d-flex justify-content-center">
//           <div className="card feature-card">
//             <div className="card-body text-center">
//               <i className="bi bi-android card-icon"></i>
//               <h5 className="card-title">Devices</h5>
//               <p className="card-text">
//                 Compatible with smartphones, tablets, and desktop.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>



//     </div>
//   );
// };

// export default About;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap for grid styling
// import './About.css'; // Custom CSS for further styling
// //import urlShortenerImage from '../images/url-shortener-image.svg'; // Replace with your image path

// function About() {
//   return (
//     <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
//       <div className="row w-75 shadow-lg rounded-4 overflow-hidden">
//         {/* First Div - Content Section */}
//         <div className="col-md-6 p-5 bg-light">
//           <h1 className="mb-4 fw-bold">A Fast and Simple URL Shortener</h1>
//           <p className="text-muted">
//             Free URL Shortener for transforming long, ugly links into nice, memorable, and trackable short URLs. 
//             Use it to shorten links for any social media platforms, blogs, SMS, emails, ads, or pretty much anywhere else you want to share them. 
//             Twitter, Facebook, YouTube, Instagram, WhatsApp, emails, SMS, and videos are all supported. 
//             After shortening the URL, you can also check how many clicks it received.
//           </p>
//         </div>

//         {/* Second Div - Image Section */}
//         <div className="col-md-6 d-none d-md-block p-0">
//           <img
//             src=""
//             alt="URL Shortener"
//             className="img-fluid w-100 h-100"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;


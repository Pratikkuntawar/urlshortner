import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import registerimage from '../images/signup.svg'; // Replace with the actual path to your image
import './Register.css'; // Custom CSS for styling
import { useNavigate } from 'react-router-dom';

function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('User Data:', user); // Log user data to check its content

    const { name, email, phone, password } = user;

    try {
      const res = await fetch('https://urlshortnerbackend-12.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, password }),
      });

      if (res.status === 422) {
        window.alert('Invalid Registration');
        console.log('Invalid Registration');
      } else if (res.status === 450) {
        window.alert('User already exists with the provided email');
        console.log('User already exists');
      } else if (res.status === 200) {
        window.alert('Registration Successful');
        console.log('Successful Registration');
        navigate('/login');
      } 
    } catch (error) {
      console.error('Error during registration:', error);
      window.alert('Internal Server Error');
    }
  };

  return (
    <div className="container-fluid register-container d-flex align-items-center justify-content-center">
      <div className="row w-75 shadow-lg rounded-4 overflow-hidden">
        {/* Form Section */}
        <div className="col-md-6 form-section p-5 bg-light">
          <h2 className="text-center mb-4 fw-bold">Create an Account</h2>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="mb-4 position-relative">
              <input
                type="text"
                className="form-control styled-input"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
              <label className="form-label">Name</label>
            </div>

            <div className="mb-4 position-relative">
              <input
                type="email"
                className="form-control styled-input"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              <label className="form-label">Email</label>
            </div>

            <div className="mb-4 position-relative">
              <input
                type="tel"
                className="form-control styled-input"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
              <label className="form-label">Phone</label>
            </div>

            <div className="mb-4 position-relative">
              <input
                type="password"
                className="form-control styled-input"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
              />
              <label className="form-label">Password</label>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 fw-bold submit-btn"
            >
              Register Now
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src={registerimage}
            alt="Register"
            className="img-fluid w-100 h-100"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;

//below code will be executed if above not works
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import registerimage from '../images/signup.svg'; // Replace with the actual path to your image
// import './Register.css'; // Custom CSS for styling
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('User Data:', user); // Log user data to check its content

//     const { name, email, phone, password } = user;

//     try {
//       const res = await fetch('/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, phone, password }),
//       });

//       if (res.status === 422) {
//         window.alert('Invalid Registration');
//         console.log('Invalid Registration');
//       } else if (res.status === 450) {
//         window.alert('User already exists with the provided email');
//         console.log('User already exists');
//       } else if (res.status === 200) {
//         window.alert('Registration Successful');
//         console.log('Successful Registration');
//         navigate('/login');
//       } 
//       else {
//         window.alert('Something went wrong');
//         console.log('Unexpected status:', res.status);
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//       window.alert('Internal Server Error');
//     }
//   };

//   return (
//     <div className="container-fluid register-container d-flex align-items-center justify-content-center">
//       <div className="row w-75 shadow-lg rounded-4 overflow-hidden">
//         {/* Form Section */}
//         <div className="col-md-6 form-section p-5 bg-light">
//           <h2 className="text-center mb-4 fw-bold">Create an Account</h2>
//           <form method="POST" onSubmit={handleSubmit}>
//             <div className="mb-4 position-relative">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 id="name"
//                 name="name"
//                 value={user.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 required
//               />
//               <label className="form-label">Name</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="email"
//                 className="form-control styled-input"
//                 id="email"
//                 name="email"
//                 value={user.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//               />
//               <label className="form-label">Email</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="tel"
//                 className="form-control styled-input"
//                 id="phone"
//                 name="phone"
//                 value={user.phone}
//                 onChange={handleChange}
//                 placeholder="Enter your phone number"
//                 required
//               />
//               <label className="form-label">Phone</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="password"
//                 className="form-control styled-input"
//                 id="password"
//                 name="password"
//                 value={user.password}
//                 onChange={handleChange}
//                 placeholder="Create a password"
//                 required
//               />
//               <label className="form-label">Password</label>
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary w-100 fw-bold submit-btn"
//             >
//               Register Now
//             </button>
//           </form>
//         </div>

//         {/* Image Section */}
//         <div className="col-md-6 d-none d-md-block p-0">
//           <img
//             src={registerimage}
//             alt="Register"
//             className="img-fluid w-100 h-100"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;
//----------------------------------------------------------------------
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import registerimage from '../images/signup.svg'; // Path to your image
// import './Register.css'; // Custom CSS for styling
// import { useNavigate } from 'react-router-dom';
// function Register() {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//   });
//   const navigate = useNavigate(); 
//   let name,value;
//   const handleChange = (e) => {
//     console.log(e);
//     name = e.target.name;
//     value=e.target.value;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("User Data:", user); // Log the user data to check its content
//     const { name, email, phone, password } = user;
//     const res = await fetch("/register", {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//           name, email, phone, password
//       })
//   });
//   const data = await res.json();
//   if (data.status === 422 || !data) {
//     window.alert("INvalid Registration");
//     console.log("INvalid Registration");
// } 
// else if(data.status === 450){
//   window.alert("user already exist with the provided email");
// }
// else {
//      window.alert(" Registration Successfull");
//     console.log("Successfull Registration");

//     navigate("/login");
// }
//   };

//   return (
//     <div className="container-fluid register-container d-flex align-items-center justify-content-center">
//       <div className="row w-75 shadow-lg rounded-4 overflow-hidden">
//         {/* Form Section */}
//         <div className="col-md-6 form-section p-5 bg-light">
//           <h2 className="text-center mb-4 fw-bold">Create an Account</h2>
//           <form method="POST" onSubmit={handleSubmit}>
//             <div className="mb-4 position-relative">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 id="name"
//                 name="name"
//                 value={user.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 required
//               />
//               <label className="form-label">Name</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="email"
//                 className="form-control styled-input"
//                 id="email"
//                 name="email"
//                 value={user.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//               />
//               <label className="form-label">Email</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="tel"
//                 className="form-control styled-input"
//                 id="phone"
//                 name="phone"
//                 value={user.phone}
//                 onChange={handleChange}
//                 placeholder="Enter your phone number"
//                 required
//               />
//               <label className="form-label">Phone</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="password"
//                 className="form-control styled-input"
//                 id="password"
//                 name="password"
//                 value={user.password}
//                 onChange={handleChange}
//                 placeholder="Create a password"
//                 required
//               />
//               <label className="form-label">Password</label>
//             </div>

//             <button type="submit" className="btn btn-primary w-100 fw-bold submit-btn">
//               Register Now
//             </button>
//           </form>
//         </div>

//         {/* Image Section */}
//         <div className="col-md-6 d-none d-md-block p-0">
//           <img
//             src={registerimage}
//             alt="Register"
//             className="img-fluid w-100 h-100"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;


// import React, { useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';
// import registerimage from '../images/signup.svg'
// import './Register.css'; // Custom CSS for styling

// function Register() {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/register', user);
//       alert(response.data.msg);
//     } catch (err) {
//       alert(err.response?.data?.err || 'Error occurred');
//     }
//   };

//   return (
//     <div className="container-fluid register-container d-flex align-items-center justify-content-center">
//       <div className="row w-75 shadow-lg rounded-4 overflow-hidden">
//         {/* Form Section */}
//         <div className="col-md-6 form-section p-5 bg-light">
//           <h2 className="text-center mb-4 fw-bold">Create an Account</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4 position-relative">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 id="name"
//                 name="name"
//                 value={user.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 required
//               />
//               <label className="form-label">Name</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="email"
//                 className="form-control styled-input"
//                 id="email"
//                 name="email"
//                 value={user.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//               />
//               <label className="form-label">Email</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="tel"
//                 className="form-control styled-input"
//                 id="phone"
//                 name="phone"
//                 value={user.phone}
//                 onChange={handleChange}
//                 placeholder="Enter your phone number"
//                 required
//               />
//               <label className="form-label">Phone</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="password"
//                 className="form-control styled-input"
//                 id="password"
//                 name="password"
//                 value={user.password}
//                 onChange={handleChange}
//                 placeholder="Create a password"
//                 required
//               />
//               <label className="form-label">Password</label>
//             </div>

//             <button type="submit" className="btn btn-primary w-100 fw-bold submit-btn">
//               Register Now
//             </button>
//           </form>
//         </div>

//         {/* Image Section */}
//         <div className="col-md-6 d-none d-md-block p-0">
//           <img
//             src={registerimage}
//             alt="Register"
//             className="img-fluid w-100 h-100"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;


// import React, { useState } from 'react';
// import axios from 'axios'; // Axios for HTTP requests
// import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
// import './Register.css'; // Import custom CSS for styling
// import registerimage from '../images/signup.svg'
// function Register() {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/register', user);
//       alert(response.data.msg);
//     } catch (err) {
//       alert(err.response?.data?.err || 'Error occurred');
//     }
//   };

//   return (
//     <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
//       <div className="row w-75">
//         {/* Form Section */}
//         <div className="col-md-6 d-flex flex-column justify-content-center">
//           <h2 className="text-center mb-4">Register</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={user.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={user.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="phone" className="form-label">Phone</label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="phone"
//                 name="phone"
//                 value={user.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 name="password"
//                 value={user.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-primary w-100">Register</button>
//           </form>
//         </div>

//         {/* Image Section */}
//         <div className="col-md-6 d-none d-md-block">
//           <img
//             src={registerimage}
//             alt="Registration"
//             className="img-fluid rounded"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;


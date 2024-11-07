// import React, { useState } from 'react';
// import './Shortenurl.css';
// import { FaLink, FaClipboard } from 'react-icons/fa'; // Importing icons

// const ShortenUrl = () => {
//   const [longUrl, setLongUrl] = useState('');
//   const [shortId, setShortId] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/shorturl', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         // credentials:'include',
//         body: JSON.stringify({ longUrl }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setShortId(data.shortId);
//         setError(''); // Clear error message
//       } else {
//         setError(data.error || 'Something went wrong');
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       //setError('Failed to shorten URL. Please try again.');
//       setError('Kindly register and then logged in yourself,If you have been already registered then kindly logged in yourself so that we can recover your data stored in an application');
//     }
//   };

//   // Function to copy the shortened URL to the clipboard
//   const handleCopy = () => {
//     const shortenedUrl = `${window.location.origin}/${shortId}`;
//     navigator.clipboard.writeText(shortenedUrl)
//       .then(() => {
//         alert('Shortened URL copied to clipboard!');
//       })
//       .catch((err) => {
//         console.error('Failed to copy:', err);
//       });
//   };

//   return (
//     <div className="shorten-url-wrapper"> {/* Parent div for centering */}
//       <div className="shorten-url-container">
//         <h1 className="shorten-url-title">URL Shortener</h1>
//         <p className="shorten-url-description">
//           Transform long URLs into short, manageable links that are easy to share. Just enter your long URL and click "Shorten URL"!
//         </p>
//         <form className="shorten-url-form" onSubmit={handleSubmit}>
//           <div className="input-group">
//             <FaLink className="input-icon" />
//             <input
//               type="url"
//               placeholder="Enter a long URL"
//               className="shorten-url-input"
//               value={longUrl}
//               onChange={(e) => setLongUrl(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="shorten-url-button">
//             Shorten URL
//           </button>
//         </form>

//         {error && <p className="shorten-url-error">{error}</p>}

//         {shortId && (
//           <div className="shorten-url-result">
//             <p>Shortened URL:</p>
//             <a href={`/${shortId}`} target="_blank" rel="noopener noreferrer">
//             {window.location.origin}/{shortId}
//             </a>
//             <button onClick={handleCopy} className="shorten-url-copy-button">
//               <FaClipboard className="copy-icon" /> Copy
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShortenUrl;
import React, { useState } from 'react';
import './Shortenurl.css';
import { FaLink, FaClipboard } from 'react-icons/fa'; // Importing icons

const ShortenUrl = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortId, setShortId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://urlshortnerbackend-12.onrender.com/shorturl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials:'include',
        body: JSON.stringify({ longUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        setShortId(data.shortId);
        setError(''); // Clear error message
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      console.error('Error:', err);
      //setError('Failed to shorten URL. Please try again.');
      setError('Kindly register and then logged in yourself,If you have been already registered then kindly logged in yourself so that we can recover your data stored in an application');
    }
  };

  // Function to copy the shortened URL to the clipboard
  const handleCopy = () => {
    const shortenedUrl = `https://urlshortnerbackend-12.onrender.com/${shortId}`;
    navigator.clipboard.writeText(shortenedUrl)
      .then(() => {
        alert('Shortened URL copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
      });
  };

  return (
    <div className="shorten-url-wrapper"> {/* Parent div for centering */}
      <div className="shorten-url-container">
        <h1 className="shorten-url-title">URL Shortener</h1>
        <p className="shorten-url-description">
          Transform long URLs into short, manageable links that are easy to share. Just enter your long URL and click "Shorten URL"!
        </p>
        <form className="shorten-url-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaLink className="input-icon" />
            <input
              type="url"
              placeholder="Enter a long URL"
              className="shorten-url-input"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="shorten-url-button">
            Shorten URL
          </button>
        </form>

        {error && <p className="shorten-url-error">{error}</p>}

        {shortId && (
          <div className="shorten-url-result">
            <p>Shortened URL:</p>
            <a  href={`https://urlshortnerbackend-12.onrender.com/${shortId}`}  target="_blank" rel="noopener noreferrer">
            {`https://urlshortnerbackend-12.onrender.com/${shortId}`}
            </a>
            <button onClick={handleCopy} className="shorten-url-copy-button">
              <FaClipboard className="copy-icon" /> Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShortenUrl;


// import React, { useState } from 'react';
// import './Shortenurl.css';
// import { FaLink, FaClipboard } from 'react-icons/fa'; // Importing icons

// const ShortenUrl = () => {
//   const [longUrl, setLongUrl] = useState('');
//   const [shortId, setShortId] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/shorturl', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ longUrl }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setShortId(data.shortId);
//         setError(''); // Clear error message
//       } else {
//         setError(data.error || 'Something went wrong');
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       setError('Failed to shorten URL. Please try again.');
//     }
//   };

//   // Function to copy the shortened URL to the clipboard
//   const handleCopy = () => {
//     const shortenedUrl = `${window.location.origin}/${shortId}`;
//     navigator.clipboard.writeText(shortenedUrl)
//       .then(() => {
//         alert('Shortened URL copied to clipboard!');
//       })
//       .catch((err) => {
//         console.error('Failed to copy:', err);
//       });
//   };

//   return (
//     <div className="shorten-url-container">
//       <h1 className="shorten-url-title">URL Shortener</h1>
//       <p className="shorten-url-description">
//         Transform long URLs into short, manageable links that are easy to share. Just enter your long URL and click "Shorten URL"!
//       </p>
//       <form className="shorten-url-form" onSubmit={handleSubmit}>
//         <div className="input-group">
//           <FaLink className="input-icon" />
//           <input
//             type="url"
//             placeholder="Enter a long URL"
//             className="shorten-url-input"
//             value={longUrl}
//             onChange={(e) => setLongUrl(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="shorten-url-button">
//           Shorten URL
//         </button>
//       </form>

//       {error && <p className="shorten-url-error">{error}</p>}

//       {shortId && (
//         <div className="shorten-url-result">
//           <p>Shortened URL:</p>
//           <a href={`/${shortId}`} target="_blank" rel="noopener noreferrer">
//             {window.location.origin}/{shortId}
//           </a>
//           <button onClick={handleCopy} className="shorten-url-copy-button">
//             <FaClipboard className="copy-icon" /> Copy
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShortenUrl;





// import React, { useState } from 'react';
// import './Shortenurl.css';

// const ShortenUrl = () => {
//   const [longUrl, setLongUrl] = useState('');
//   const [shortId, setShortId] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/shorturl', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ longUrl }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setShortId(data.shortId);
//         setError(''); // Clear error message
//       } else {
//         setError(data.error || 'Something went wrong');
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       setError('Failed to shorten URL. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="title">URL Shortener</h1>
//       <form className="form" onSubmit={handleSubmit}>
//         <input
//           type="url"
//           placeholder="Enter a long URL"
//           className="input"
//           value={longUrl}
//           onChange={(e) => setLongUrl(e.target.value)}
//           required
//         />
//         <button type="submit" className="button">
//           Shorten URL
//         </button>
//       </form>

//       {error && <p className="error">{error}</p>}

//       {shortId && (
//         <div className="result">
//           <p>Shortened URL:</p>
//           <a href={`/${shortId}`} target="_blank" rel="noopener noreferrer">
//             {window.location.origin}/{shortId}
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShortenUrl;


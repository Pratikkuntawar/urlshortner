// import React, { useEffect, useState } from 'react';
// import './Dashboard.css'; // Import the CSS file

// const Dashboard = () => {
//     const [analyticsData, setAnalyticsData] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchAnalytics = async () => {
//             try {
//                 const response = await fetch('/analytics', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${localStorage.getItem('token')}`,
//                     },
//                 });

//                 if (!response.ok) {
//                     throw new Error('You Have not provided any url to transform into Short url');
//                 }

//                 const data = await response.json();
//                 setAnalyticsData(data.analytics);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAnalytics();
//     }, []);

//     return (
//         <div className="dashboard-body">
//             <h2 className="analytics-title">Link Shortener Analytics</h2>
//             {loading && <p className="loading-message">Loading...</p>}
//             {error && <p className="error-message">{error}</p>}
//             {!loading && !error && (
//                 <table className="analytics-table">
//                     <thead>
//                         <tr>
//                             <th className="table-header">Sr. No</th>
//                             <th className="table-header">Long URL</th>
//                             <th className="table-header">Short URL</th>
//                             <th className="table-header">Click Counts</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {analyticsData.map((url, index) => (
//                             <tr key={url.shortId} className="table-row">
//                                 <td className="table-data">{index + 1}</td>
//                                 <td className="table-data">
//                                     <a
//                                         href={url.longUrl}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="link"
//                                     >
//                                         {url.longUrl}
//                                     </a>
//                                 </td>
//                                 <td className="table-data">
//                                     <a
//                                         href={`http://localhost:3000/${url.shortId}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="link"
//                                     >
//                                         http://localhost:3000/{url.shortId}
//                                     </a>
//                                 </td>
//                                 <td className="table-data">{url.clicks}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default Dashboard;
import React, { useEffect, useState } from 'react';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
    const [analyticsData, setAnalyticsData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await fetch('https://urlshortnerbackend-12.onrender.com/analytics', {
                    method: 'GET',
                    credentials:'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('You Have not provided any url to transform into Short url');
                }

                const data = await response.json();
                setAnalyticsData(data.analytics);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAnalytics();
    }, []);

    return (
        <div className="dashboard-body">
            <h2 className="analytics-title">Link Shortener Analytics</h2>
            {loading && <p className="loading-message">Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            {!loading && !error && (
                <table className="analytics-table">
                    <thead>
                        <tr>
                            <th className="table-header">Sr. No</th>
                            <th className="table-header">Long URL</th>
                            <th className="table-header">Short URL</th>
                            <th className="table-header">Click Counts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {analyticsData.map((url, index) => (
                            <tr key={url.shortId} className="table-row">
                                <td className="table-data">{index + 1}</td>
                                <td className="table-data">
                                    <a
                                        href={url.longUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link"
                                    >
                                        {url.longUrl}
                                    </a>
                                </td>
                                <td className="table-data">
                                    <a
                                         href={`https://urlshortnerbackend-12.onrender.com/${url.shortId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link"
                                    >
                                          {`https://urlshortnerbackend-12.onrender.com/${url.shortId}`}
                                    </a>
                                </td>
                                <td className="table-data">{url.clicks}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import './Dashboard.css'; // Import the CSS file

// const Dashboard = () => {
//     const [analyticsData, setAnalyticsData] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchAnalytics = async () => {
//             try {
//                 const response = await fetch('/analytics', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${localStorage.getItem('token')}`
//                     },
//                 });

//                 if (!response.ok) {
//                     throw new Error('Failed to fetch analytics data');
//                 }

//                 const data = await response.json();
//                 setAnalyticsData(data.analytics);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAnalytics();
//     }, []);

//     return (
//         <div className="dashboard-body">
//             <div className="dashboard-container">
//                 <h2 className="analytics-title">Link Shortener Analytics</h2>
//                 {loading && <p className="loading-message">Loading...</p>}
//                 {error && <p className="error-message">{error}</p>}
//                 {!loading && !error && (
//                     <table className="analytics-table">
//                         <thead>
//                             <tr>
//                                 <th className="table-header">Sr. No</th>
//                                 <th className="table-header">Long URL</th>
//                                 <th className="table-header">Short URL</th>
//                                 <th className="table-header">Click Counts</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {analyticsData.map((url, index) => (
//                                 <tr key={url.shortId} className="table-row">
//                                     <td className="table-data">{index + 1}</td>
//                                     <td className="table-data">
//                                         <a
//                                             href={url.longUrl}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="link"
//                                         >
//                                             {url.longUrl}
//                                         </a>
//                                     </td>
//                                     <td className="table-data">
//                                         <a
//                                             href={`http://localhost:3000/${url.shortId}`}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="link"
//                                         >
//                                             http://localhost:3000/{url.shortId}
//                                         </a>
//                                     </td>
//                                     <td className="table-data">{url.clicks}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import './Dashboard.css'; // Import the CSS file

// const Dashboard = () => {
//     const [analyticsData, setAnalyticsData] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchAnalytics = async () => {
//             try {
//                 const response = await fetch('/analytics', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${localStorage.getItem('token')}`
//                     },
//                 });

//                 if (!response.ok) {
//                     throw new Error('Failed to fetch analytics data');
//                 }

//                 const data = await response.json();
//                 setAnalyticsData(data.analytics);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAnalytics();
//     }, []);

//     return (
//         <div className='dashboard-body'>
//         <div className="dashboard-container">
//             <h2 className="analytics-title">Link Shortener Analytics</h2>
//             {loading && <p className="loading-message">Loading...</p>}
//             {error && <p className="error-message">{error}</p>}
//             {!loading && !error && (
//                 <table className="analytics-table">
//                     <thead>
//                         <tr>
//                             <th className="table-header">Sr. No</th>
//                             <th className="table-header">Long URL</th>
//                             <th className="table-header">Short URL</th>
//                             <th className="table-header">Click Counts</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {analyticsData.map((url, index) => (
//                             <tr key={url.shortId} className="table-row">
//                                 <td className="table-data">{index + 1}</td>
//                                 <td className="table-data">
//                                     <a
//                                         href={url.longUrl}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="link"
//                                     >
//                                         {url.longUrl}
//                                     </a>
//                                 </td>
//                                 <td className="table-data">
//                                     <a
//                                         href={`http://localhost:3000/${url.shortId}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="link"
//                                     >
//                                         http://localhost:3000/{url.shortId}
//                                     </a>
//                                 </td>
//                                 <td className="table-data">{url.clicks}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//         </div>
//     );
// };

// export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import './Dashboard.css'; // Import the CSS file

// const Dashboard = () => {
//     const [analyticsData, setAnalyticsData] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchAnalytics = async () => {
//             try {
//                 const response = await fetch('/analytics', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${localStorage.getItem('token')}`
//                     },
//                 });

//                 if (!response.ok) {
//                     throw new Error('Failed to fetch analytics data');
//                 }

//                 const data = await response.json();
//                 setAnalyticsData(data.analytics);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAnalytics();
//     }, []);

//     return (
//         <div className="dashboard-container">
//             <h2 className="analytics-title">Link Shortener Analytics</h2>
//             {loading && <p className="loading-message">Loading...</p>}
//             {error && <p className="error-message">{error}</p>}
//             {!loading && !error && (
//                 <table className="analytics-table">
//                     <thead>
//                         <tr>
//                             <th className="table-header">Sr. No</th>
//                             <th className="table-header">Long URL</th>
//                             <th className="table-header">Short URL</th>
//                             <th className="table-header">Click Counts</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {analyticsData.map((url, index) => (
//                             <tr key={url.shortId} className="table-row">
//                                 <td className="table-data">{index + 1}</td>
//                                 <td className="table-data">
//                                     <a
//                                         href={url.longUrl}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="link"
//                                     >
//                                         {url.longUrl}
//                                     </a>
//                                 </td>
//                                 <td className="table-data">
//                                     <a
//                                         href={`http://localhost:3000/${url.shortId}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="link"
//                                     >
//                                         http://localhost:3000/{url.shortId}
//                                     </a>
//                                 </td>
//                                 <td className="table-data">{url.clicks}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import './Dashboard.css'; // Import the CSS file directly

// const Dashboard = () => {
//     const [analyticsData, setAnalyticsData] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchAnalytics = async () => {
//             try {
//                 const response = await fetch('/analytics', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming token is stored in localStorage
//                     },
//                 });

//                 // Check for response status
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch analytics data');
//                 }

//                 const data = await response.json();
//                 setAnalyticsData(data.analytics);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAnalytics();
//     }, []);

//     return (
//         <div className="dashboard-container">
//             <h2 className="analytics-title">Link Shortener Analytics</h2>
//             {loading && <p className="loading-message">Loading...</p>}
//             {error && <p className="error-message">{error}</p>}
//             {!loading && !error && (
//                 <table className="analytics-table">
//                     <thead>
//                         <tr>
//                             <th className="table-header">Sr. No</th>
//                             <th className="table-header">Long URL</th>
//                             <th className="table-header">Short URL</th>
//                             <th className="table-header">Click Counts</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {analyticsData.map((url, index) => (
//                             <tr key={url.shortId} className="table-row">
//                                 <td className="table-data">{index + 1}</td>
//                                 <td className="table-data">{url.longUrl}</td>
//                                 <td className="table-data">{url.shortId}</td>
//                                 <td className="table-data">{url.clicks}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default Dashboard;





// import React, { useEffect, useState } from 'react';
// import styles from './Dashboard.css'; // Import the CSS module

// const Dashboard = () => {
//     const [analyticsData, setAnalyticsData] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchAnalytics = async () => {
//             try {
//                 const response = await fetch('/analytics', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming token is stored in localStorage
//                     },
//                 });

//                 // Check for response status
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch analytics data');
//                 }

//                 const data = await response.json();
//                 setAnalyticsData(data.analytics);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAnalytics();
//     }, []);

//     return (
//         <div className={styles.container}>
//             <h2 className={styles.title}>Link Shortener Analytics</h2>
//             {loading && <p className={styles.loading}>Loading...</p>}
//             {error && <p className={styles.error}>{error}</p>}
//             {!loading && !error && (
//                 <table className={styles.table}>
//                     <thead>
//                         <tr>
//                             <th className={styles.th}>Sr. No</th>
//                             <th className={styles.th}>Long URL</th>
//                             <th className={styles.th}>Short URL</th>
//                             <th className={styles.th}>Click Counts</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {analyticsData.map((url, index) => (
//                             <tr key={url.shortId}>
//                                 <td className={styles.td}>{index + 1}</td>
//                                 <td className={styles.td}>{url.longUrl}</td>
//                                 <td className={styles.td}>{url.shortId}</td>
//                                 <td className={styles.td}>{url.clicks}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import styles from './Dashboard.css'; // Import the CSS module

// const Dashboard = () => {
//     const [analyticsData, setAnalyticsData] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchAnalytics = async () => {
//             try {
//                 const response = await fetch('/analytics', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming token is stored in localStorage
//                     },
//                 });

//                 // Check for response status
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch analytics data');
//                 }

//                 const data = await response.json();
//                 setAnalyticsData(data.analytics);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAnalytics();
//     }, []);

//     return (
//         <div className={styles.container}>
//             <h2 className={styles.title}>Analytics Dashboard</h2>
//             {loading && <p className={styles.loading}>Loading...</p>}
//             {error && <p className={styles.error}>{error}</p>}
//             {!loading && !error && (
//                 <table className={styles.table}>
//                     <thead>
//                         <tr>
//                             <th className={styles.th}>Sr.No</th>
//                             <th className={styles.th}>Long URL</th>
//                             <th className={styles.th}>Short ID</th>
//                             <th className={styles.th}>Clicks</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {analyticsData.map((url) => (
//                             <tr key={url.shortId}>
//                                 <td className={styles.td}>{url.serialnumber}</td>
//                                 <td className={styles.td}>{url.longUrl}</td>
//                                 <td className={styles.td}>{url.shortId}</td>
//                                 <td className={styles.td}>{url.clicks}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default Dashboard;





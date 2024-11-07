import React from 'react';

const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="col-lg-3 col-md-6 d-flex justify-content-center mb-4">
      <div className="card feature-card">
        <div className="card-body text-center">
          <i className={`bi ${icon} card-icon`}></i>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

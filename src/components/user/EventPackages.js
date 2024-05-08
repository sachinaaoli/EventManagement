import React from 'react';
import { Packages } from '../utiles/Payment';
import { Link } from 'react-router-dom';
import './EventPackages.css'; // Import CSS file for styling

const handleBuyPackage = (packageId) => {
    console.log(`Package ${packageId} bought!`);
};

const EventPackages = () => (
  <div className="package-container">
    <h1 className="package-title">Packages</h1>
    <div className="package-grid">
      {Packages.map((packageItem) => (
        <div key={packageItem.id} className="package-item">
          <img src={packageItem.image} alt={packageItem.type} className="package-image" />
          <div className="package-details">
            <h2 className="package-name">{packageItem.type} Package</h2>
            <p className="package-description">{packageItem.description}</p>
            <div className="package-info">
              <p className="package-price">Price: ${packageItem.price}</p>
              <Link to='/form'>
                <button className="buy-button" onClick={() => handleBuyPackage(packageItem.id)}>Buy Package</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EventPackages;

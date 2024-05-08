import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css'; // Import the CSS file

const Form = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    selectedPackage: '',
    fullName: '',
    email: '',
    eventDate: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData); // You can replace this with your form submission logic
    } else {
      alert("Please fill out all required fields.");
    }
  };

  const validateForm = () => {
    return (
      formData.phoneNumber !== '' &&
      formData.selectedPackage !== '' &&
      formData.fullName !== '' &&
      formData.email !== '' &&
      formData.eventDate !== ''
    );
  };

  return (
    <div className="booking-form-container">
      <h2 className="form-title">Package Booking Form</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedPackage">Select Package:</label>
          <select
            id="selectedPackage"
            name="selectedPackage"
            value={formData.selectedPackage}
            onChange={handleChange}
            required
          >
            <option value="">Select Package</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday</option>
            <option value="conference">Conference</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Event Date:</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="additionalNotes">Additional Notes:</label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            rows="4"
          />
        </div>
        <Link to="/SubmitNow">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Form;

import React, { useState } from 'react';
import './BookAConsult.css'; // Import CSS file for styling
import { FormOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const BookAConsult = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    eventType: '',
    servicesNeeded: [],
    eventDate: '',
    referralSource: '',
    referralName: '',
    planningNeeds: '',
    estimatedBudget: '',
    estimatedGuestCount: '',
    additionalInformation: ''
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "servicesNeeded") {
      // If the checkbox is checked, add the value to the array, else remove it
      setFormData({
        ...formData,
        [name]: checked ? [...formData.servicesNeeded, value] : formData.servicesNeeded.filter(service => service !== value)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // Your form submission logic here
    } else {
      alert("Please fill out all required fields.");
    }
  };

  const validateForm = () => {
    return (
      formData.firstName !== '' &&
      formData.lastName !== '' &&
      formData.email !== '' &&
      formData.eventType !== '' &&
      formData.servicesNeeded.length > 0 &&
      formData.eventDate !== '' &&
      formData.referralSource !== '' &&
      formData.estimatedBudget !== '' &&
      formData.estimatedGuestCount !== '' &&
      formData.additionalInformation !== ''
    );
  };

  return (
    <div style={{ backgroundColor: "#fefce8", padding: '20px' }}>
      <div className='description'>
        <h2 style={{ fontSize: '20px', color: 'black' }}>Let’s Get This Party Started!</h2>
        <h1 style={{ fontSize: '50px', color: 'black' }}> <FormOutlined /> </h1>
        <p style={{ color: 'Black', fontSize: '16px' }}>For event inquiries, please fill out the form below and one of our team members will get back to you within 48 hours.</p>
      </div>
      <div className="booking-form-container">
        <h2 className="form-title">Event Booking Form</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name<span className="required">*</span></label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name <span className="required">*</span></label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email<span className="required">*</span></label>
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
          <label htmlFor="eventType">Event Type<span className="required">*</span></label>
          <input
            type="text"
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Services Needed <span className="required">*</span></label>
          <div>
            <input
              type="checkbox"
              id="eventPlanning"
              name="servicesNeeded"
              value="Event Planning and Coordination"
              checked={formData.servicesNeeded.includes("Event Planning and Coordination")}
              onChange={handleChange}
              required
            />
            <label htmlFor="eventPlanning">Event Planning and Coordination </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="decorationDesign"
              name="servicesNeeded"
              value="Decoration and Design"
              checked={formData.servicesNeeded.includes("Decoration and Design")}
              onChange={handleChange}
              required
            />
            <label htmlFor="decorationDesign">Decoration and Design</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="entertainmentBooking"
              name="servicesNeeded"
              value="Entertainment Booking"
              checked={formData.servicesNeeded.includes("Entertainment Booking")}
              onChange={handleChange}
              required
            />
            <label htmlFor="entertainmentBooking">Entertainment Booking</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="cateringFood"
              name="servicesNeeded"
              value="Catering and Food Services"
              checked={formData.servicesNeeded.includes("Catering and Food Services")}
              onChange={handleChange}
              required
            />
            <label htmlFor="cateringFood">Catering and Food Services</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Event Date</label>
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
  <label>Referral Source<span className="required">*</span></label>
  <div>
    <input
      type="radio"
      id="chappelowClient"
      name="referralSource"
      value="Chappelow Events Client"
      checked={formData.referralSource === "Chappelow Events Client"}
      onChange={handleChange}
      required
    />
    <label htmlFor="chappelowClient">Chappelow Events Client</label>
  </div>
  <div>
    <input
      type="radio"
      id="instagramFacebook"
      name="referralSource"
      value="Instagram/Facebook"
      checked={formData.referralSource === "Instagram/Facebook"}
      onChange={handleChange}
      
    />
    <label htmlFor="instagramFacebook">Instagram/Facebook</label>
  </div>
  <div>
    <input
      type="radio"
      id="onlineSearch"
      name="referralSource"
      value="Online Search"
      checked={formData.referralSource === "Online Search"}
      onChange={handleChange}
    />
    <label htmlFor="onlineSearch">Online Search</label>
  </div>
  <div>
    <input
      type="radio"
      id="friend"
      name="referralSource"
      value="Friend"
      checked={formData.referralSource === "Friend"}
      onChange={handleChange}
      
    />
    <label htmlFor="friend">Friend</label>
  </div>
  <div>
    <input
      type="radio"
      id="vendor"
      name="referralSource"
      value="Vendor"
      checked={formData.referralSource === "Vendor"}
      onChange={handleChange}
      
    />
    <label htmlFor="vendor">Vendor</label>
  </div>
</div>

        <div className="form-group">
          <label htmlFor="referralName">Name of Referral</label>
          <input
            type="text"
            id="referralName"
            name="referralName"
            value={formData.referralName}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="planningNeeds">Planning Needs<span className="required">*</span></label>
          <textarea
            id="planningNeeds"
            name="planningNeeds"
            value={formData.planningNeeds}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="estimatedBudget">Estimated Budget<span className="required">*</span></label>
          <input
            type="text"
            id="estimatedBudget"
            name="estimatedBudget"
            value={formData.estimatedBudget}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="estimatedGuestCount">Estimated Guest Count<span className="required">*</span></label>
          <input
            type="text"
            id="estimatedGuestCount"
            name="estimatedGuestCount"
            value={formData.estimatedGuestCount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="additionalInformation">Additional Information</label>
          <textarea
            id="additionalInformation"
            name="additionalInformation"
            value={formData.additionalInformation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <Link to="/SubmitNow">
          <button type="submit" className="submit-btn">Submit</button>
        </Link>
        </div>
      </form>
      <p className="required-note">Note: Fields marked with <span className="required">*</span> are required.</p>
    </div>
    </div>
  );
}

export default BookAConsult;

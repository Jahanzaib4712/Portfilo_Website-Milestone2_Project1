'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; 

const Contact = () => {
  const router = useRouter(); 

  const handleBackToHome = () => {
    router.push('/'); 
  };

  return (
    <div className="container3">
      <div className="form-container3">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Please fill out the form below:</p>
        <form className="form3">
          <div className="input-group3">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="input-group3">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group3">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} required></textarea>
          </div>
          <button type="submit" className="submit-btn3">Submit</button>
          <button className="back-home-btn" onClick={handleBackToHome}>
            Back to Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

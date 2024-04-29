// ContactDetails.tsx
import React from 'react';
import './Pages.css';


const ContactDetails: React.FC = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <div className="contact-info">
        <p>Email: contact@example.com</p>
        <p>Phone: +1-123-456-7890</p>
      </div>
    </div>
  );
};

export default ContactDetails;

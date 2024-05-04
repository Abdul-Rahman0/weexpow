import React, { useEffect } from 'react';
import './NewPageStyles.css'; // Import your CSS file

interface NewPageProps {
  title: string;
  description: string;
}

const NewPageComponent: React.FC<NewPageProps> = ({ title, description }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const contactInfo = {
        email: 'contact@example.com',
        phone: '+1234567890',
        address: '123 Main Street, City, Country',
      };
  return (
    <div className="new-page-container">
      <div className="img_container top_img">
        <img
          src="https://images.unsplash.com/photo-1522648485144-849409408aee?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="main-section" style={{ padding: 0 }}>
          <h1 style={{ fontSize: '80px' }}>{title}</h1> {/* Use the title prop here */}
        </div>
      </div>
      <>
      {title === 'Contact Us'  ? <section className="main-section">
          <div className="content_wrapper">
            <h2>Contact Us</h2>
            <p>Email: {contactInfo.email}</p>
            <p>Phone: {contactInfo.phone}</p>
            <p>Address: {contactInfo.address}</p>
            {/* Additional content goes here */}
          </div>
        </section> :<section className="main-section">
        <div className="content_wrapper">
          {/* Apply different styles for "Contact Us" description */}
          <p className='normal-description'>{description}</p>
          {/* Additional content goes here */}
        </div>
      </section>}
      </>
    </div>
  );
};

export default NewPageComponent;

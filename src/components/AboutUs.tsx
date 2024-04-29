// AboutUs.tsx
import React from 'react';
import './Pages.css'; // Import your CSS file

const AboutUs: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <div className="about-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere quam vel quam posuere, in feugiat ipsum
          vestibulum.
        </p>
        <p>
          Sed vehicula dui vel neque aliquet, at bibendum mi ultricies. Duis non nisl eget ipsum tempus pellentesque vel
          vel purus.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

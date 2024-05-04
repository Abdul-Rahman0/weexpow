import React from 'react';
import { Link } from 'react-router-dom';

interface SectionProps {
  id: string;
  backgroundImage: string;
  title: string;
}

const Section: React.FC<SectionProps> = ({ id, backgroundImage, title }) => {
  return (
    <Link to={`/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <section id={id} style={{ backgroundImage: `url(${backgroundImage})`, padding: '20px', marginBottom: '20px' }}>
        <h1>{title}</h1>
      </section>
    </Link>
  );
}

export default Section;

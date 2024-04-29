import React from 'react';

interface SectionProps {
  id: string;
  backgroundImage: string;
  title: string;
}

const Section: React.FC<SectionProps> = ({ id, backgroundImage, title }) => {
  return (
    <section id={id} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>{title}</h1>
    </section>
  );
}

export default Section;

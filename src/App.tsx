// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
import ContactDetails from './components/ContactDetails';
import AboutUs from './components/AboutUs';
// import Header from './components/ui-comps/Header';
import './App.css'; // Import your CSS file
import HomePage from './components/HomePage';
import NewPageComponent from './components/NewPage';

const App: React.FC = () => {


  return (
    <Router>
      <div className={`app-dark` }> {/* Add conditional class */}
        {/* <Header /> */}
        {/* <button onClick={toggleDarkMode}>Toggle Dark Mode</button> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<NewPageComponent title="About Us" description="Get to know more about our company and team. We strive to deliver excellence in every aspect of our work." />} />
        <Route path="/vision" element={<NewPageComponent title="Our Vision" description="Discover our vision for the future. We aim to innovate and inspire, driving positive change in the world." />} />
        <Route path="/contact" element={<NewPageComponent title="Contact Us" description="Reach out to us for any inquiries or collaborations. Our team is here to assist you. Phone: +1234567890, Email: contact@example.com" />} />
        <Route path="/knowledge" element={<NewPageComponent title="Knowledge" description="Expand your knowledge with our informative resources and educational content. Stay updated with the latest trends and insights." />} />
        <Route path="/space" element={<NewPageComponent title="Space" description="Embark on a journey through space exploration and discovery. Dive into the mysteries of the universe with us." />} />
          {/* NewPage */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/contact" element={<ContactDetails />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

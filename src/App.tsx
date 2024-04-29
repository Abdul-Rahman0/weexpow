// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
import ContactDetails from './components/ContactDetails';
import AboutUs from './components/AboutUs';
// import Header from './components/ui-comps/Header';
import './App.css'; // Import your CSS file
import HomePage from './components/HomePage';
import PageWithPicBackground from './components/PageWithPicBackground';

const App: React.FC = () => {
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(prevMode => !prevMode);
  // };

  return (
    <Router>
      <div className={`app-dark` }> {/* Add conditional class */}
        {/* <Header /> */}
        {/* <button onClick={toggleDarkMode}>Toggle Dark Mode</button> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vision" element={<PageWithPicBackground />} />

          
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/contact" element={<ContactDetails />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

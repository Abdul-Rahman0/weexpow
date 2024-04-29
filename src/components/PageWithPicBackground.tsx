import React, { useEffect } from 'react';
import './PageWithPicBackground.css'; // Assuming you have a CSS file for styling

function PageWithPicBackground() {
  // const [description, setDescription] = useState<string>('');
  // const [index, setIndex] = useState<number>(0);

//   const [description, setDescription] = useState<string>('');

  useEffect(() => {
    const text = "Your description here..."; // Replace with your actual description
    let currentIndex = 0;
    const timer = setInterval(() => {
      // setDescription((prevDescription) => prevDescription + text[currentIndex]);
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-with-pic-background">
      <div className="background-image">
        {/* Replace 'url' with the path to your image */}
        <img src="https://assets.codepen.io/214624/vision.jpg" alt="Background" />
        <div className="overlay">
          <h1>Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Voluptas quia harum odio aliquam, neque laudantium adipisci nemo facere.<br/> Nesciunt laboriosam eveniet deserunt magnam doloribus non quisquam enim maxime molestiae ratione? </p>
        </div>
      </div>
    </div>
  );
}

export default PageWithPicBackground;

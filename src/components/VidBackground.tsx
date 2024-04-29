import React from 'react';
// import './App.css';
// import { CssCode, ReactCode, Author } from './tabs';

// Assuming you have typings for your modules
// import BgVideo from '../../public/vid-bg.mp4';
// import testVid from 'public/We-Expo-Animation .mp4'
// public/We-Expo-Animation .mp4
// const BgVideo = 'https://frnt-end.github.io/React-Responsive-Video/static/media/vid-bg.c6e5cc3e.mp4'

const  VidBackground = () => {
//   const [toggleState, setToggleState] = useState<number>(1);

//   const toggleTab = (index: number) => {
//     setToggleState(index);
//   };

  return (
    <>
      <video autoPlay loop muted className="bg-vid">
        <source src='/We-Expo-Animation .mp4' type="video/mp4" />
        {/* <source src='/vid-bg.mp4' type="video/mp4" /> */}
      </video>

</>
);
}

export default VidBackground;

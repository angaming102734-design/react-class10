import { useState } from "react";
import download from "../assets/download.jpg";
import images from "../assets/images.jpg";

const ToggleState = () => {
  const [isOn, setIsOn] = useState(true);

  const toggle = () => {
    setIsOn(prev => !prev);
  };

  return (
    <>
      <img src={isOn ? download : images} alt="toggle image" style={{width: 300}} />

      <button onClick={toggle}>
        
      </button  >
    </>
  );
};

export default ToggleState;
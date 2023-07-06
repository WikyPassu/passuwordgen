import { useEffect, useRef } from "react";

const Slider = ({passLength, setPassLength}) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const {min, max, value, style} = sliderRef.current;
    style.backgroundSize = (value - min) * 100 / (max - min) + "% 100%";
  }, [passLength]);

  const handleOnChange = ({target}) => {
    const { value } = target;
    
    if(value < 1) {
      setPassLength(1);
    } else if(value > 50) {
      setPassLength(50);  
    } else {
      setPassLength(value);
    }
  };

  return (
    <div className="slider-content">
      <p>Longitud</p>
      <div className="slider">
        <input
          ref={sliderRef}
          type="range" 
          min="1" 
          max="50" 
          value={passLength}
          onChange={handleOnChange}
        />
        <input
          type="number"
          min="1" 
          max="50"
          value={passLength}
          onChange={handleOnChange}
        />      
      </div>
    </div>
  );
};

export default Slider;
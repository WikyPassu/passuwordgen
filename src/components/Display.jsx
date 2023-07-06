import Button from "./Button";
import BUTTONS from "../constants/Buttons.json";

const Display = ({pass, setPass, onClick}) => {
  const handleOnChangeInput = e => setPass(e.target.value);

  return (
    <div className="display">
      <input
        id="display"
        type="text"
        value={pass}
        onChange={handleOnChangeInput}
      />
      {
        BUTTONS.map((button, index) => (
          <Button 
            key={index} 
            index={index}
            pass={pass}
            button={button} 
            onClick={onClick} 
          />
        ))
      }
    </div>
  );
};

export default Display;
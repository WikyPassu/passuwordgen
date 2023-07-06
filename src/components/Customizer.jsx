import Slider from "./Slider";
import CheckBox from "./CheckBox";
import CHECK_BOXES from "../constants/CheckBoxes.json";

const Customizer = ({passLength, states, setters}) => {
  const { setPassLength } = setters;
  const checkStates = Object.values(states);
  const setCheckStates = Object.values(setters);

  return (
    <div className="customizer">
      <h2>Personalizar contraseña</h2>
      <div className="customizer-content">
        <Slider passLength={passLength} setPassLength={setPassLength} />
        <div className="checkboxes">
          {
            CHECK_BOXES.map(({text}, index) => (
              <CheckBox 
                key={index} 
                text={text}
                index={index}
                states={checkStates}
                state={checkStates[index]} 
                setCheck={setCheckStates[index + 1]}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Customizer;
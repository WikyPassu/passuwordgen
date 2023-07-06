const CheckBox = ({text, index, states, state, setCheck}) => {
  const handleOnCheckClick = () => {
    const auxStates = states.slice();
    auxStates.splice(index, 1);

    if(auxStates.every(item => item === false)) {
      return;
    }

    setCheck(!state);
  };

  return (
    <div className="checkbox" onClick={handleOnCheckClick}>
      <div className="checkbox-container">
        {
          state ? <i className="bx bxs-checkbox-checked" /> : null
        }
      </div>
      <p>{text}</p>
    </div>
  );
};

export default CheckBox;
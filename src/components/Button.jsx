import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Button = ({index, pass, button, onClick}) => {
  const { icon, animated, animation } = button;
  const [clicked, setClicked] = useState(false);

  const handleOnClickButton = index => {
    setClicked(true);
    onClick(index);
  };

  const handleAnimationEnd = () => setClicked(false);

  return (
    <>
      {
        index === 2 ?
        <CopyToClipboard text={pass}>
          <div className="button" onClick={() => handleOnClickButton(index)}>
            <i 
              className={`${icon} ${animated ? clicked ? animation : "" : ""}`} 
              onAnimationEnd={handleAnimationEnd}
            />
          </div>
        </CopyToClipboard> :
        <div className="button" onClick={() => handleOnClickButton(index)}>
          <i 
            className={`${icon} ${animated ? clicked ? animation : "" : ""}`} 
            onAnimationEnd={handleAnimationEnd}
          />
        </div>
      }
    </>
  );
};

export default Button;
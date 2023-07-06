import { useEffect, useState } from "react"; 
import Card from "./components/Card";
import Display from "./components/Display";
import Customizer from "./components/Customizer";
import { generatePassword, shuffleString } from "./utils/Generator";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import TOAST_CONFIG from "./constants/ToastConfig.json";

TOAST_CONFIG.icon = <i className="bx bxs-check-circle toast-icon" />;

const App = () => {
  const [pass, setPass] = useState("bibu");
  const [passLength, setPassLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  
  const options = { includeUppercase, includeLowercase, includeNumbers, includeSymbols };
  const setters = { setPassLength, setIncludeUppercase, setIncludeLowercase, setIncludeNumbers, setIncludeSymbols };
  
  useEffect(() => {
    generateNewPass();
  }, [passLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const handleOnButtonClick = index => {
    try {
      switch(index) {
        case 0:
          generateNewPass();
          break;
        case 1:
          setPass(shuffleString(pass));
          break;
        case 2:
          toast("¡Contraseña copiada!", TOAST_CONFIG);
          break;
      }
    } catch (e) {
      alert(e);
    }
  };

  const generateNewPass = () => setPass(generatePassword(options, passLength));

  return (
    <div className="container">
      <div className="header">
        <h1>Passuword<span>Gen</span></h1>
        <p>Generador de contraseñas aleatorias altamente personalizables. Te permite crear contraseñas únicas y seguras de forma rápida y sencilla, adaptadas a tus preferencias individuales.</p>
      </div>
      <Card>
        <Display 
          pass={pass} 
          setPass={setPass} 
          onClick={handleOnButtonClick}
        />
      </Card>
      <Card>
        <Customizer 
          passLength={passLength}  
          states={options}
          setters={setters}
        />
      </Card>
      <ToastContainer progressClassName="toast-progress-bar" />
    </div>
  );
};

export default App;

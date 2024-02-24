import './App.css';
import { useState } from 'react';
// import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  // const calcularResultado = () => {
  //   if (input) {
  //     setInput(evaluate(input));
  //   } else {
  //     alert("Por favor ingrese valores para realizar los cálculos.");
  //   }
  // };

  return (
    <div className="App">
      Connected:  ssh from Mac to proxmox Raspberry Pi 5 1TB 8GB.

    </div>
  );
}

export default App;

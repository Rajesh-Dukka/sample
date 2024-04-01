import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'

const Calculator = () => {
    const [inValue, setInValue] = useState('');
    const {name}=useParams()
    const [result, setResult] = useState(0);
  
    const handleButtonClick = (value) => {
      setInValue(inValue + value);
    };
  
    const handleClear = () => {
      setInValue('');
    };
  
    const handleResult = () => {
      setResult(eval(inValue));
    };
  
    const buttons = [
      '1', '2', '3', '4', '5',
      '6', '7', '8', '9', '0',
      '+', '-', '*', '/', 'C'
    ];
  
    const changeHandler= e =>{
      setInValue(e.target.value)
    }
  
    return (
      <div className='container'>
        <center>
          <h3>This name From URL Path params:{name}</h3>
          <input type='text' name="inValue" value={inValue} onChange={changeHandler} /><br />
          <button onClick={handleResult}>Results</button>
          <h4>Result is: {result}</h4>
          <div className="button-container">
            {buttons.map((button, index) => (
              <button key={index} onClick={() => button === 'C' ? handleClear() : handleButtonClick(button)}>
                {button}
              </button>
            ))}
          </div>
        </center>
      </div>
    );
}

export default Calculator

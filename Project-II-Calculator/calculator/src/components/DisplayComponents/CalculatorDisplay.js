import React from 'react';
import './Display.css';

const CalculatorDisplay = ({display}) => {
  return (
    <div className="calculator-display">
    {display || 0}
    {display || 0}
    </div>
    ,
     <div className="calculator-display">
     {display || 0}
     {display || 0}
     </div>
  );
}

export default CalculatorDisplay;
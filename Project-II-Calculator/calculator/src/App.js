import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

const App = () => {
  return (
    <div className='calculator-container button-container'>
      <CalculatorDisplay />
      <ButtonContainer />
    </div>
  );
};

export default App;

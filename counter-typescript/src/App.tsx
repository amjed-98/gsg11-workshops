import { useState } from 'react';
import { Counter, Clicks } from './components';
import './App.css';
import { EventInterface } from './components/Interfaces';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [click, setClick] = useState(0);

  const handleInput = ({ target: { value } }: EventInterface) => setInputValue(value);

  const getClick = () => setClick(click + 1);
  const resetClick = () => setClick(0);

  return (
    <div className='App'>
      <input type='text' onChange={handleInput} />
      <p>
        {inputValue} <Clicks clicks={click} /> times
      </p>

      <Counter getClick={getClick} resetClick={resetClick} />
      <Counter getClick={getClick} resetClick={resetClick} />
      <Counter getClick={getClick} resetClick={resetClick} />
    </div>
  );
}

export default App;

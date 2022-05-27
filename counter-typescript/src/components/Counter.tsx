import { useState } from 'react';
import { Button, Zero } from '.';
import { CounterPropsInterface as props } from './Interfaces';

const Counter = ({ getClick, resetClick }: props) => {
  const [counter, setCounter] = useState(0);

  const inc = () => setCounter(counter + 1);
  const dec = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return (
    <div>
      <h3>Counter: {counter === 0 ? <Zero /> : counter}</h3>

      <Button
        action={() => {
          inc();
          getClick();
        }}>
        +
      </Button>

      <Button
        action={() => {
          dec();
          getClick();
        }}>
        -
      </Button>

      <Button
        action={() => {
          reset();
          resetClick();
        }}>
        Reset
      </Button>
    </div>
  );
};

export default Counter;

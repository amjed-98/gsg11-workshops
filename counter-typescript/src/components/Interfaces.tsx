interface EventInterface {
  target: {
    value: string;
  };
}

interface ClicksPropsInterface {
  clicks: number;
}

interface CounterPropsInterface {
  getClick: () => void;
  resetClick: () => void;
}
export { EventInterface, ClicksPropsInterface, CounterPropsInterface };

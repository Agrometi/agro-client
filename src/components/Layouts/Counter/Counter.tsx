import * as Styled from "./counter.styled";
import { PlusIcon, MinusIcon } from "@/components/Layouts/Icons";

type CounterT = {
  value: string | number;
  onIncreaseCount: (e: React.MouseEvent) => void;
  onDecreaseCount: (e: React.MouseEvent) => void;
  onChangeCount: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Counter: React.FC<CounterT> = ({
  value,
  onChangeCount,
  onDecreaseCount,
  onIncreaseCount,
}) => {
  return (
    <Styled.Counter>
      <button onClick={onDecreaseCount}>
        <MinusIcon />
      </button>

      <input type="number" value={value} onChange={onChangeCount} />

      <button onClick={onIncreaseCount}>
        <PlusIcon />
      </button>
    </Styled.Counter>
  );
};

export default Counter;

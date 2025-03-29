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
      <button
        onClick={onDecreaseCount}
        title="შეამცირეთ რაოდენობა 1 ერთეულით"
        aria-label="შეამცირეთ რაოდენობა 1 ერთეულით"
      >
        <MinusIcon />
      </button>

      <input
        type="number"
        value={value}
        onChange={onChangeCount}
        aria-label="პროდუქტის რაოდენობა"
      />

      <button
        onClick={onIncreaseCount}
        title="გაზარდეთ რაოდენობა 1 ერთეულით"
        aria-label="გაზარდეთ რაოდენობა 1 ერთეულით"
      >
        <PlusIcon />
      </button>
    </Styled.Counter>
  );
};

export default Counter;

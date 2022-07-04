import { inject, observer } from "mobx-react";
import { RootStoreProps } from "./stores/RootStore";

const Counter = ({ rootStore }: RootStoreProps) => {
  const { counterStore, counterDoubleStore } = rootStore!;

  return (
    <div>
      <div>{counterStore.number}</div>
      <button onClick={() => counterStore.increase()}>+1</button>
      <button onClick={() => counterStore.decrease()}> -1</button>
      <div>{counterDoubleStore.number}</div>
      <button onClick={() => counterDoubleStore.increase()}>+2</button>
      <button onClick={() => counterDoubleStore.decrease()}> -2</button>
    </div>
  );
};

export default inject("rootStore")(observer(Counter));

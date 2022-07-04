import { makeAutoObservable } from "mobx";
import CounterStore from "./CounterStore";
import RootStore from "./RootStore";

class CounterDoubleStore {
  counterStore: CounterStore;
  constructor(rootStore: RootStore) {
    this.counterStore = rootStore.counterStore;
    makeAutoObservable(this);
  }
  number: number = 0;

  increase() {
    this.number += 2;
  }

  decrease() {
    this.number -= 2;
  }

  increaseCounterStoreThree() {
    this.counterStore.number += 3;
  }
}

export default CounterDoubleStore;

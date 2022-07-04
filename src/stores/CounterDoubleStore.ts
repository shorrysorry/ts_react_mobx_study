import { makeAutoObservable } from "mobx";
import RootStore from "./RootStore";

class CounterDoubleStore {
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
  }
  number: number = 0;

  increase() {
    this.number += 2;
  }

  decrease() {
    this.number -= 2;
  }
}

export default CounterDoubleStore;

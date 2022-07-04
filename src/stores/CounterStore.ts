import { makeAutoObservable } from "mobx";
import RootStore from "./RootStore";

class CounterStore {
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
  }
  number: number = 0;

  increase() {
    this.number += 1;
  }

  decrease() {
    this.number -= 1;
  }
}

export default CounterStore;

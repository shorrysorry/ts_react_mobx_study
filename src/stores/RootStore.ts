import { makeAutoObservable } from "mobx";
import CounterDoubleStore from "./CounterDoubleStore";
import CounterStore from "./CounterStore";

export interface RootStoreProps {
  rootStore?: RootStore;
}

export default class RootStore {
  counterStore: CounterStore;
  counterDoubleStore: CounterDoubleStore;

  constructor() {
    makeAutoObservable(this);
    this.counterStore = new CounterStore(this);
    this.counterDoubleStore = new CounterDoubleStore(this);
  }
}

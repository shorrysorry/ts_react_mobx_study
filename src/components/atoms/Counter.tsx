import { inject, observer } from 'mobx-react'
import { RootStoreProps } from '../../stores/RootStore'

const Counter = ({ rootStore }: RootStoreProps) => {
  // MobX 가 제대로 작동은 하나 rootStore! 의 방식이 잘못된것으로 보임.
  // 추가적인 방법을 공부해 볼 필요가 있음.

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { counterStore, counterDoubleStore } = rootStore!

  return (
    <div>
      <div>first store number and first store button</div>
      <div>{counterStore.number}</div>
      <button onClick={() => counterStore.increase()}>+1</button>
      <button onClick={() => counterStore.decrease()}> -1</button>

      <div>second store number and second store button</div>
      <div>{counterDoubleStore.number}</div>
      <button onClick={() => counterDoubleStore.increase()}>+2</button>
      <button onClick={() => counterDoubleStore.decrease()}> -2</button>

      <div>first store number and second store button</div>
      <button onClick={() => counterDoubleStore.increaseCounterStoreThree()}>new +3</button>
    </div>
  )
}

export default inject('rootStore')(observer(Counter))

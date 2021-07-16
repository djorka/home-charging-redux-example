import { useSelector, useDispatch } from 'react-redux'
import { selectCount, increment } from '../counter/counterSlice'

export default function Component4() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div style={{padding: '5px', border: '1px solid orange'}}>
      <p>{count}</p>
      <button
          aria-label="Increment"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
    </div>
  )
}
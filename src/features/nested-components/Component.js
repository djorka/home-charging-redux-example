import { useSelector } from 'react-redux'
import { selectCount } from '../counter/counterSlice'
import Component2 from './Component2';

export default function Component() {
  const count = useSelector(selectCount);

  return (
    <div style={{padding: '5px', border: '1px solid red'}}>
      <p>{count}</p>
      <Component2 />
    </div>
  )
}

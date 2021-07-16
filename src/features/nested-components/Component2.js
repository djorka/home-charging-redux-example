import { useSelector } from 'react-redux'
import { selectCount } from '../counter/counterSlice'
import Component3 from './Component3';

export default function Component2() {
  const count = useSelector(selectCount);

  return (
    <div style={{padding: '5px', border: '1px solid blue'}}>
      <p>{count}</p>
      <Component3 />
    </div>
  )
}
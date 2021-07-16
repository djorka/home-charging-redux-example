import { useSelector } from 'react-redux'
import { selectCount } from '../counter/counterSlice'
import Component4 from './Component4';

export default function Component3() {
  const count = useSelector(selectCount);

  return (
    <div style={{padding: '5px', border: '1px solid green'}}>
      <p>{count}</p>
      <Component4 />
    </div>
  )
}
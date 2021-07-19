import { useSelector } from 'react-redux';
import { selectCount } from '../counter/counterSlice';
import Component2 from './Component2';

export default function Component() {
  const count = useSelector(selectCount);

  return (
    <div
      style={{ width: '100%', backgroundColor: 'lightgray', display: 'grid', placeItems: 'center', margin: '20px 0 20px 0' }}
    >
      <div
        style={{ width: '100px', padding: '5px', border: '1px solid red', margin: '20px 0 20px 0' }}
      >
        <p>{count}</p>
        <Component2 />
      </div>
    </div>
  );
}

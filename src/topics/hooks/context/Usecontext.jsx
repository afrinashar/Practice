import   { useContext } from 'react';
import MyContext from './createContext';

function ChildComponent() {
  const contextValue = useContext(MyContext);

  return <div>{contextValue}</div>;
}
export default ChildComponent
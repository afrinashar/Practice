import   { useContext } from 'react';
import MyContext from './createContext';
import CodeBase from '../../../assets/CodeBase';
import Data from '../../Data';
function ChildComponent() {
  const contextValue = useContext(MyContext);
  const usecontext = Data.find(item => item.type === 'usecontext') || { header: 'context', content: '' };

  return <div>{contextValue}  <div className="col mb-4">
        <div className="col " style={{ backgroundColor: '#17a2b8', color: '#fff' }}>
          <h2 className="text-light mb-2">{usecontext.header}</h2>
          <CodeBase header={usecontext.header} content={usecontext.content} />
        </div>
      </div></div>;
}
export default ChildComponent
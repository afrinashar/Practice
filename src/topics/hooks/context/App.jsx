 import MyContext from './createContext';
import ChildComponent from './Usecontext'
function App() {
  const value = 'Hello, Context!';

  return (
    <MyContext.Provider value={value}>
      <ChildComponent />
    </MyContext.Provider>
  );
}
export default App
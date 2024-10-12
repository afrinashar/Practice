<<<<<<< HEAD
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
=======
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
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574
export default App
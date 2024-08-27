import   { useState, useContext, createContext } from 'react';

// Create a Context for the data
const DataContext = createContext();

function ParentComponent() {
  const [data, setData] = useState('some data');

  return (
    <DataContext.Provider value={data}>
      <ChildComponent />
    </DataContext.Provider>
  );
}
export default ParentComponent
function ChildComponent() {
  // Use the useContext hook to access the data
  const data = useContext(DataContext);
  return <div>{data}</div>;
}
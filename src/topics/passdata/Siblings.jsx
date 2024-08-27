import   { useState } from 'react';

function ParentComponent() {
  const [data, setData] = useState('');

  return (
    <>
      <ChildComponentA onData={setData} />
      <ChildComponentB data={data} />
      When two components are siblings and they need to share state, you can’t pass the data directly between them. Instead, you lift the state up to their closest common ancestor, which then manages the state and passes it down to both siblings.
    </>
  );
}
export default ParentComponent
function ChildComponentA({ onData }) {
  const sendData = () => {
    onData('some data from A');
  };

  return <button onClick={sendData}>Send Data</button>;
}

function ChildComponentB({ data }) {
  return <div>{data}</div>;
}
import { useEffect } from "react";
import CodeBase from "../../../assets/CodeBase";
import Data from "../../Data";
function useEffectOnce(effect) {
  useEffect(effect, []);
}

// Usage:
function Example() {
  useEffectOnce(() => {
    // This effect runs only once on component mount
    console.log("Effect ran only once");
  });
  const useeffectonce = Data.find(item => item.type === 'useeffectonce') || { header: 'useeffectonce', content: '' };

  return (
    <>
      <div className="bg-warning">
      <div>Example Component</div>‘useEffectOnce’: A custom hook that runs an
      effect only once when the component mounts.
      <CodeBase header={useeffectonce.header} content={useeffectonce.content} />

   </div> </>
  );
}

export default Example;

import { uselayout, useLayoutEffect } from "react";
import CodeBase from "../../../assets/CodeBase";
import Data from "../../Data";
function Example() {
  const [width, setWidth] = uselayout(0);

  useLayoutEffect(() => {
    // This effect runs synchronously after all DOM mutations
    // but before the browser paints

    const updateWidth = () => {
      const newWidth = document.documentElement.clientWidth;
      setWidth(newWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", updateWidth);

    // Initial width update
    updateWidth();

    // Clean up the effect
    return () => {
      // Remove event listener
      window.removeEventListener("resize", updateWidth);
    };
  }, []); // Empty dependency array, so the effect runs only once on component mount
  const uselayout = Data.find(item => item.type === 'uselayout') || { header: 'uselayout', content: '' };

  return (
    <>
     <div> <div>Window width: {width}px</div>‘useLayoutEffect’: Similar to
      ‘useEffect’, but runs synchronously after all DOM mutations are applied,
      useful for measuring layout or performing DOM manipulations that require
      synchronous updates.
      <CodeBase header={uselayout.header} content={uselayout.content} />

   </div> </>
  );
}

export default Example;

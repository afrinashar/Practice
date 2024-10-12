<<<<<<< HEAD
import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function App() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  return (
    <div>
      <CodeMirror
        value="console.log('hello world!');"
        height="200px"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
      <CodeMirror
        value="console.log('hello world!');"
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) => {
          console.log("value:", value);
        }}
      />
    </div>
  );
}
=======
import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function App() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  return (
    <div>
      <CodeMirror
        value="console.log('hello world!');"
        height="200px"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
      <CodeMirror
        value="console.log('hello world!');"
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) => {
          console.log("value:", value);
        }}
      />
    </div>
  );
}
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574

import { useRef, useState, useEffect } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";

const CodeEditor = ({ codings }) => {
  const editorRef = useRef(null);
  const [code, setCode] = useState(codings);
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("vs-dark");
  const [editorOptions, setEditorOptions] = useState({
    fontSize: 14,
    minimap: { enabled: true },
    automaticLayout: true,
    lineNumbers: "on",
    wordWrap: "on",
  });
  const [output, setOutput] = useState(""); // Output of the code execution

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const changeTheme = (e) => {
    setTheme(e.target.value);
  };

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const updateEditorOption = (option, value) => {
    setEditorOptions((prevOptions) => ({
      ...prevOptions,
      [option]: value,
    }));
  };

  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
      monaco.editor.defineTheme("myCustomTheme", {
        base: "vs-dark",
        inherit: true,
        rules: [{ background: "1E1E1E" }],
        colors: {
          "editor.background": "#1E1E1E",
        },
      });
    }
  }, [monaco]);

  // Function to execute the code
  const runCode = () => {
    try {
      // Only for JavaScript: use eval to run the code
      if (language === "javascript") {
        const result = eval(code); // Evaluates JavaScript code
        setOutput(result !== undefined ? result.toString() : "No output");
      } else {
        setOutput("Execution for this language is not supported.");
      }
    } catch (err) {
      setOutput(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Language:
          <select value={language} onChange={changeLanguage}>
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="css">CSS</option>
            <option value="html">HTML</option>
            <option value="python">Python</option>
          </select>
        </label>

        <label>
          Theme:
          <select value={theme} onChange={changeTheme}>
            <option value="vs-dark">Dark Theme</option>
            <option value="vs-light">Light Theme</option>
            <option value="myCustomTheme">Custom Theme</option>
          </select>
        </label>

        <label>
          Font Size:
          <input
            type="number"
            value={editorOptions.fontSize}
            onChange={(e) => updateEditorOption("fontSize", parseInt(e.target.value))}
            min="10"
            max="20"
          />
        </label>

        <label>
          Show Minimap:
          <input
            type="checkbox"
            checked={editorOptions.minimap.enabled}
            onChange={(e) => updateEditorOption("minimap", { enabled: e.target.checked })}
          />
        </label>

        <button onClick={runCode}>Run</button> {/* Button to execute the code */}
      </div>

      <Editor
        height="60vh"
        language={language}
        value={code}
        onChange={handleCodeChange}
        onMount={handleEditorDidMount}
        options={editorOptions}
        theme={theme}
      />

      {/* Output Section */}
      <div style={{ marginTop: "10px" }}>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;

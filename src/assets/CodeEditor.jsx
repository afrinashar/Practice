// CodeEditor.js
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
      </div>

      <Editor
        height="80vh"
        language={language}
        value={code}
        onChange={handleCodeChange}
        onMount={handleEditorDidMount}
        options={editorOptions}
        theme={theme}
      />
    </div>
  );
};

export default CodeEditor;

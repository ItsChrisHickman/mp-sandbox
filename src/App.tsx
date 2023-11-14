import { useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { sandpackDark } from "@codesandbox/sandpack-themes";

import "./App.css";

const App = () => {
  const indexHTML = `
    <div id="app"></div>
`;
  const appCSS = `body { background: #111; color: #f5f5f5 }
  iframe { width: 100%; }`;
  const appTS = `import { setupSdk } from '@matterport/sdk';
  import "./style.css"
  const setupSDK = async function () {
    const sdk = await setupSdk('3nhn5rm8hmr1x74hsr46t7fud', {
      space: 'JGPnGQ6hosj',
    });
  }
  setupSDK();
  `;
  const defaultFiles = {
    "style.css": appCSS,
    "index.html": indexHTML,
    "index.js": appTS,
  };
  const [files, setFiles] = useState(defaultFiles);
  return (
    <>
      <div className="wrapper">
        <header className="page-header">
          <img src="https://matterport.github.io/showcase-sdk/images/MP-logo_H_lock-RGB_white.svg" />
          <h1>
            <span>Matterport</span> SDK Code Playground
          </h1>
        </header>
        <main className="editor">
          <aside className="sp-font-body">
            <ul>
              <li>
                <a href="#">Getting Started</a>
              </li>
              <li>
                <a href="#">Creating Tags</a>
              </li>
              <li>
                <a href="#">Pointer Inspector</a>
              </li>
              <li>
                <a href="#">Demo 4</a>
              </li>
              <li>
                <a href="#">Demo 5</a>
              </li>
              <li>
                <a href="#">Demo 6</a>
              </li>
              <li>
                <a href="#">Demo 7</a>
              </li>
              <li>
                <a href="#">Demo 8</a>
              </li>
              <li>
                <a href="#">Demo 9</a>
              </li>
              <li>
                <a href="#">Demo 10</a>
              </li>
              <li>
                <a href="#">Demo 11</a>
              </li>
            </ul>
          </aside>
          <Sandpack
            template="vanilla"
            theme={sandpackDark}
            options={{
              showNavigator: false, // I'm not seeing a use for this.
              showLineNumbers: true, // default - true
              showInlineErrors: false, // default - false
              wrapContent: true, // default - false
              editorHeight: "100%", // default - 300
              showConsole: true,
              showConsoleButton: true,
              classes: {
                "sp-wrapper": "custom-wrapper",
                "sp-layout": "custom-layout",
                "sp-tab-button": "custom-tab",
              },
            }}
            customSetup={{
              dependencies: {
                "@matterport/sdk": "latest",
              },
            }}
            files={files}
          />
        </main>
      </div>
    </>
  );
};

export default App;

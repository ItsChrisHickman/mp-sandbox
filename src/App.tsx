import { Sandpack } from "@codesandbox/sandpack-react";
import "./App.css";

const App = () => {
  return (
    <Sandpack
      template="react"
      theme="light"
      options={{
        showNavigator: true,
        showLineNumbers: false, // default - true
        showInlineErrors: true, // default - false
        wrapContent: true, // default - false
        editorHeight: 600, // default - 300
        editorWidthPercentage: 60, // default - 50
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
      files={{
        "/App.js": `
import { setupSdk } from '@matterport/sdk';

const setupSDK = async function () {
  const sdk = await setupSdk('3nhn5rm8hmr1x74hsr46t7fud', {
    space: 'JGPnGQ6hosj',
  });
}
setupSDK();
`,
      }}
    />
  );
};

export default App;

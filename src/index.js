
import ReactDOM from "react-dom"
import App from "./App"

// ReactDOM.createRoot(<App />, document.getElementById("root"))

// Select the HTML element with the ID 'root' where the React app will be mounted.
const rootElement = document.getElementById('root');

// Create a root container using the new React 18 createRoot API.
// This prepares the root container for rendering the React component tree.
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside the root container.
// This mounts the App component and its children into the root DOM node.
root.render(<App />);

import React from 'react' // Import the React library
import ReactDOM from 'react-dom/client' // Import the ReactDOM library for rendering React components
import App from './App.jsx' // Import the main App component
import './index.css' // Import the CSS file for global styles

// Find the root element in the HTML where the React app will be mounted
const rootElement = document.getElementById('root')

// Create a root render node and render the App component inside it
ReactDOM.createRoot(rootElement).render(
  // React.StrictMode is a tool for highlighting potential problems in an application.
  // It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    <App /> {/*Render the main App component*/}
  </React.StrictMode>,
)

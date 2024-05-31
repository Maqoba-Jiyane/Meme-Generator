import Header from "./components/Header"
import Meme from "./components/Meme"

/**
 * App Component
 * 
 * This is the main component of the application. It serves as the root component
 * that renders the Header and Meme components.
 * 
 * @returns {JSX.Element} The JSX to be rendered
 */

function App() {
  return (
      // Return a div containing the Header and Meme components
      <div>
          <Header /> {/* Render the Header component */}
          <Meme /> {/* Render the Meme component */}
      </div>
  );
}

export default App; // Export the App component as the default export
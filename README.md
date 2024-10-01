# Meme Generator

This project is a meme generator built with React, following along with the Scrimba Meme Generator tutorial. The application allows users to add text to randomly selected meme images.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- Display a random meme image fetched from an API.
- Allow users to input top and bottom text for the meme.
- Dynamically position the text on the meme image.
- Generate new meme images at the click of a button.

## Installation

### Prerequisites
- Node.js installed on your machine.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Maqoba-Jiyane/Meme-Generator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd meme-generator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage
1. Open the app in the browser.
2. Enter the desired text in the "Top Text" and "Bottom Text" input fields.
3. Click "Get a new meme image" to load a random meme.
4. The input text will automatically be placed over the meme image.

## Technologies
- **React**: A JavaScript library for building user interfaces.
- **CSS**: For styling the application.
- **JavaScript (ES6+)**: For logic and interactivity.
- **HTML5**: For structuring the page.

## Project Structure
```plaintext
meme-generator/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── MemeGenerator.js
│   │   └── Header.js
│   ├── App.js
│   ├── index.js
├── package.json
└── README.md
```

- **App.js**: The main component managing the state of the app.
- **MemeGenerator.js**: Handles fetching meme images and displaying the text over the image.
- **Header.js**: Displays the app's header.
  
## Contributing
Feel free to open an issue or submit a pull request if you would like to contribute to this project.
